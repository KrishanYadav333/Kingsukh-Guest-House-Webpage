const ROOMS = [
  {
    id: 'cozy-haven',
    name: 'Cozy Haven Room',
    description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
    price: 1000,
    features: ['Queen Bed', '2 Guests', '250 sq ft'],
    image: '/images/small.jpg',
  },
  {
    id: 'spacious-serenity',
    name: 'Spacious Serenity Suite',
    description: 'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
    price: 1500,
    features: ['King Bed', '4 Guests', '450 sq ft'],
    image: '/images/large.jpg',
  },
];
const PRICES = Object.fromEntries(ROOMS.map((r) => [r.id, r.price]));
const DAY = 86400000;

const bad = (error, status = 400) => Response.json({ error }, { status });
const str = (v) => String(v ?? '').slice(0, 1000);
const authed = (request, env) => {
  const a = request.headers.get('authorization') || '';
  const t = env.ADMIN_TOKEN || '';
  return t.length > 0 && a.length === 7 + t.length && a === `Bearer ${t}`;
};
const list = async (kv, key) => JSON.parse((await kv.get(key)) || '[]');

// ponytail: read-modify-write on one KV key can drop a write under concurrent
// submits. Fine for a guest house; move to D1 if booking volume grows.
const append = async (kv, key, item) => {
  const items = await list(kv, key);
  items.push(item);
  await kv.put(key, JSON.stringify(items));
};

const dates = (checkIn, checkOut) => {
  const a = new Date(checkIn), b = new Date(checkOut);
  return Number.isNaN(a) || Number.isNaN(b) || b <= a ? null : { a, b };
};

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const kv = env.kingsukh_data;
    const post = request.method === 'POST';

    if (pathname === '/api/rooms' && request.method === 'GET') return Response.json(ROOMS);
    const admin = { '/api/bookings': 'bookings', '/api/contact': 'contacts' }[pathname];
    if (admin && request.method === 'GET') {
      // ponytail: plain string compare, fine for a long random token; use timingSafeEqual if this grows
      if (!authed(request, env)) return bad('Not found', 404);
      const items = await list(kv, admin);
      return Response.json(items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
    if (!post) return bad('Not found', 404);

    let body;
    try { body = await request.json(); } catch { return bad('Invalid JSON'); }

    if (pathname === '/api/bookings/check-availability') {
      const d = dates(body.checkIn, body.checkOut);
      if (!d || !(body.roomType in PRICES)) return bad('Invalid dates or room');
      const clash = (await list(kv, 'bookings')).some((x) =>
        x.roomType === body.roomType && x.status !== 'cancelled' &&
        new Date(x.checkIn) < d.b && new Date(x.checkOut) > d.a);
      return Response.json({ available: !clash });
    }

    if (pathname === '/api/bookings') {
      const d = dates(body.checkIn, body.checkOut);
      const guests = Number(body.guests);
      if (!d || !(body.roomType in PRICES) || !(guests >= 1)) return bad('Invalid booking');
      const booking = {
        id: Date.now().toString(),
        checkIn: body.checkIn,
        checkOut: body.checkOut,
        guests,
        roomType: body.roomType,
        customerName: str(body.customerName),
        email: str(body.email),
        phone: str(body.phone),
        totalPrice: Math.ceil((d.b - d.a) / DAY) * PRICES[body.roomType],
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
      await append(kv, 'bookings', booking);
      return Response.json({ message: 'Booking created successfully', booking }, { status: 201 });
    }

    if (pathname === '/api/contact') {
      if (!body.message) return bad('Message required');
      await append(kv, 'contacts', {
        id: Date.now().toString(),
        firstName: str(body.firstName),
        lastName: str(body.lastName),
        email: str(body.email),
        phone: str(body.phone),
        message: str(body.message),
        status: 'new',
        createdAt: new Date().toISOString(),
      });
      return Response.json({ message: 'Message sent successfully' }, { status: 201 });
    }

    return bad('Not found', 404);
  },
};
