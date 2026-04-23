import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  MapPin,
  Train,
  Plane,
  Wifi,
  Car,
  BedDouble,
  Bath,
  Users,
  CalendarDays,
  ChevronRight,
  Star,
  ShieldCheck,
  Phone,
  Mail,
  Trees,
  Waves,
  Castle,
  Fish,
  CheckCircle2,
  Building2,
  Clock3,
  CreditCard,
  Luggage,
  Ticket,
  Music4,
  Sailboat,
  Gamepad2,
  Footprints,
  Search,
  Filter,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  XCircle,
  Info,
  MoveRight,
} from 'lucide-react';

// Brand and animation presets used across the whole site.
const BRAND = 'Livornolife';
const EASE = [0.22, 1, 0.36, 1];
const REVEAL = { duration: 0.45, ease: EASE };
const PAGE = { duration: 0.22, ease: 'easeOut' };
const SPRING = { type: 'spring', stiffness: 120, damping: 18, mass: 0.88 };

// Main property data shown across the demo.
const property = {
  title: 'Appartamento con terrazza a Livorno',
  subtitle:
    'Una base luminosa, spaziosa e curata per soggiorni brevi vicino al centro e al mare.',
  location: 'Livorno, Toscana',
  address: 'Via Luigi Cherubini, 9 • 57124 Livorno',
  rating: '9.1',
  reviews: '84+ recensioni',
  size: '100 m²',
  guests: 5,
  beds: 2,
  baths: 1,
  checkIn: 'dalle 13:00',
  checkOut: 'entro le 10:00',
  phone: '+39 333 123 4567',
  email: 'info@esempio.it',
  basePrice: 115,
  cleaningFee: 35,
  cityTax: 1.5,
  description:
    'Una soluzione spaziosa e accogliente per chi desidera un soggiorno comodo a Livorno, con ambienti ordinati, contatto diretto e una posizione pratica per muoversi tra città, porto e costa.',
  longDescription:
    'L’appartamento offre circa 100 m² con due camere, zona living e terrazza. Gli spazi sono pensati per coppie, famiglie o piccoli gruppi che cercano una base ampia e funzionale per visitare Livorno e i dintorni. L’atmosfera è chiara, rilassata e adatta sia a soggiorni brevi sia a permanenze di qualche giorno in più.',
  highlights: [
    'Terrazza con vista aperta',
    'Wi‑Fi gratuito',
    'Parcheggio disponibile',
    'Posizione comoda vicino alla stazione',
  ],
  amenities: [
    'Wi‑Fi gratuito in tutta la struttura',
    '2 camere da letto',
    '1 bagno completo',
    'Cucina attrezzata',
    'Balcone / terrazza',
    'Parcheggio',
    'Ascensore',
    'Transfer aeroportuale su richiesta',
  ],
  policies: [
    'Check-in dalle 13:00',
    'Check-out entro le 10:00',
    'Contatto diretto con la struttura',
    'Parcheggio disponibile',
    'Richieste speciali gestibili su richiesta',
    'Transfer aeroportuale disponibile a pagamento',
  ],
  gallery: [
    'https://www.hotels-in-it.com/data/Imgs/700x500w/17092/1709282/1709282655/livorno-life-livorno-img-1.JPEG',
    'https://www.hotels-in-it.com/data/Imgs/700x500w/16606/1660676/1660676258/livorno-life-livorno-img-2.JPEG',
    'https://www.hotels-in-it.com/data/Imgs/700x500w/16793/1679352/1679352181/livorno-life-livorno-img-3.JPEG',
    'https://www.hotels-in-it.com/data/Imgs/700x500w/16793/1679352/1679352842/livorno-life-livorno-img-4.JPEG',
    'https://www.hotels-in-it.com/data/Imgs/700x500w/16607/1660724/1660724143/livorno-life-livorno-img-5.JPEG',
    'https://www.hotels-in-it.com/data/Imgs/700x500w/17415/1741540/1741540154/livorno-life-livorno-img-6.JPEG',
  ],
};

const nearby = [
  {
    title: 'Livorno Centrale',
    text: 'Comoda per chi arriva in treno e utile per spostarsi rapidamente verso Pisa e altre destinazioni.',
    meta: 'Circa 9 minuti a piedi',
    icon: Train,
  },
  {
    title: 'Aeroporto di Pisa',
    text: 'Una soluzione pratica anche per chi arriva in aereo e vuole raggiungere facilmente Livorno.',
    meta: 'Circa 25 km',
    icon: Plane,
  },
  {
    title: 'Porto di Livorno',
    text: 'Un punto strategico per imbarchi, traghetti e collegamenti marittimi.',
    meta: 'Circa 3,5 km',
    icon: Building2,
  },
  {
    title: 'Venezia Nuova',
    text: 'Uno dei quartieri più affascinanti della città, tra canali, ponti e scorci storici.',
    meta: 'Circa 2,3 km',
    icon: MapPin,
  },
];

const thingsToDo = [
  {
    title: 'Terrazza Mascagni',
    text: 'L’icona del lungomare livornese, perfetta per una passeggiata sul mare tra panorama e architettura.',
    icon: Waves,
  },
  {
    title: 'Acquario di Livorno',
    text: 'Una tappa ideale per famiglie e visitatori, situata sul lungomare accanto a Terrazza Mascagni.',
    icon: Fish,
  },
  {
    title: 'Quartiere Venezia Nuova',
    text: 'Canali, ponticelli e atmosfere uniche: uno dei luoghi più caratteristici della città.',
    icon: Trees,
  },
  {
    title: 'Fortezza Vecchia',
    text: 'Un simbolo storico di Livorno e una tappa perfetta per scoprire il volto mediceo della città.',
    icon: Castle,
  },
];

const currentEvents = [
  { area: 'Livorno', title: 'Concerto per la Liberazione', date: '24 aprile 2026', place: 'Teatro Goldoni', tag: 'Musica', icon: Music4 },
  { area: 'Livorno', title: 'Settimana Velica Internazionale 2026', date: '24 aprile – 3 maggio 2026', place: 'Livorno', tag: 'Sport e mare', icon: Sailboat },
  { area: 'Livorno', title: 'Livorno AprileJazz 2026', date: 'fino al 30 aprile 2026', place: 'Auditorium Cesare Chiti', tag: 'Festival', icon: Music4 },
  { area: 'Livorno', title: 'Schubertiade alla Goldonetta', date: '22 aprile 2026', place: 'Goldonetta', tag: 'Classica', icon: Music4 },
  { area: 'Livorno', title: 'La stanza delle ombre', date: '6 marzo – 24 aprile 2026', place: 'Fortezza Nuova', tag: 'Mostra', icon: Ticket },
  { area: 'Pisa', title: 'Strapazzata 2026', date: '25 aprile 2026', place: 'Lungarno Simonelli', tag: 'Sport', icon: Footprints },
  { area: 'Pisa', title: 'Gamicon Videogames Festival 2026', date: '25 – 26 aprile 2026', place: 'Stazione Leopolda', tag: 'Festival', icon: Gamepad2 },
  { area: 'Pisa', title: 'Mura di Pisa Night Experience', date: '25 aprile e 2 maggio 2026', place: 'Mura di Pisa', tag: 'Esperienza', icon: Ticket },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'appartamento', label: 'Appartamento' },
  { id: 'prenota', label: 'Prenota' },
  { id: 'galleria', label: 'Galleria' },
  { id: 'livorno', label: 'Livorno & Eventi' },
  { id: 'contatti', label: 'Contatti' },
];

// Demo occupied ranges. End date is exclusive, just like most booking systems.
const bookedRanges = [
  { start: '2026-04-20', end: '2026-04-23' },
  { start: '2026-04-30', end: '2026-05-03' },
  { start: '2026-05-11', end: '2026-05-14' },
  { start: '2026-05-22', end: '2026-05-25' },
];

// Weekday labels start on Monday to match the Italian calendar layout.
const weekdayLabels = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

/* -------------------------------------------------------------------------- */
/* Date helpers                                                                */
/* -------------------------------------------------------------------------- */

function formatEuro(value) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

function normalizeDate(input) {
  const date = new Date(input);
  date.setHours(0, 0, 0, 0);
  return date;
}

function toISODate(date) {
  const normalized = normalizeDate(date);
  const year = normalized.getFullYear();
  const month = `${normalized.getMonth() + 1}`.padStart(2, '0');
  const day = `${normalized.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDateDisplay(iso) {
  if (!iso) return 'Seleziona';
  return new Date(`${iso}T00:00:00`).toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function isSameDay(a, b) {
  if (!a || !b) return false;
  return toISODate(a) === toISODate(b);
}

function isSameISO(a, b) {
  return Boolean(a && b && a === b);
}

function addDays(dateInput, days) {
  const date = normalizeDate(dateInput);
  date.setDate(date.getDate() + days);
  return date;
}

function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const start = normalizeDate(checkIn);
  const end = normalizeDate(checkOut);
  const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

function startOfMonth(dateInput) {
  const date = normalizeDate(dateInput);
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function startOfCalendarGrid(dateInput) {
  const firstOfMonth = startOfMonth(dateInput);
  const day = firstOfMonth.getDay();
  // JS week starts on Sunday, so we remap to a Monday-first grid.
  const mondayIndex = day === 0 ? 6 : day - 1;
  return addDays(firstOfMonth, -mondayIndex);
}

function buildMonthGrid(dateInput) {
  const start = startOfCalendarGrid(dateInput);
  return Array.from({ length: 42 }, (_, index) => addDays(start, index));
}

function isSameMonth(dateA, dateB) {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth()
  );
}

function monthLabel(dateInput) {
  return normalizeDate(dateInput).toLocaleDateString('it-IT', {
    month: 'long',
    year: 'numeric',
  });
}

function isDateBooked(dateInput) {
  const date = normalizeDate(dateInput);

  return bookedRanges.some((range) => {
    const start = normalizeDate(range.start);
    const end = normalizeDate(range.end);
    return date >= start && date < end;
  });
}

function isRangeAvailable(checkIn, checkOut) {
  if (!checkIn || !checkOut) return false;

  const start = normalizeDate(checkIn);
  const end = normalizeDate(checkOut);
  let cursor = new Date(start);

  // We inspect every night of the stay. If any night is booked, the whole range is invalid.
  while (cursor < end) {
    if (isDateBooked(cursor)) return false;
    cursor = addDays(cursor, 1);
  }

  return true;
}

function isBetweenInclusive(dateInput, startIso, endIso) {
  if (!startIso || !endIso) return false;
  const date = normalizeDate(dateInput);
  const start = normalizeDate(startIso);
  const end = normalizeDate(endIso);
  return date > start && date < end;
}

function findNextAvailableCheckout(checkInIso, searchDays = 120) {
  if (!checkInIso) return '';

  // We start from the next day because check-out must always be after check-in.
  for (let offset = 1; offset <= searchDays; offset += 1) {
    const candidate = addDays(checkInIso, offset);
    const candidateIso = toISODate(candidate);

    if (isRangeAvailable(checkInIso, candidateIso)) {
      return candidateIso;
    }
  }

  return '';
}

function getDefaultDates() {
  const checkIn = '2026-04-24';
  const checkOut = '2026-04-27';
  return { checkIn, checkOut };
}

/* -------------------------------------------------------------------------- */
/* Reusable UI blocks                                                          */
/* -------------------------------------------------------------------------- */

function Modal({ open, onClose, title, children, wide = false }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={PAGE}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={SPRING}
            className={`relative w-full ${wide ? 'max-w-5xl' : 'max-w-lg'} rounded-[28px] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.24)]`}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200"
            >
              <X size={18} />
            </button>

            {title ? (
              <div className="border-b border-slate-200 px-5 py-4 text-lg font-bold text-slate-900">
                {title}
              </div>
            ) : null}

            <div className="p-4 md:p-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={REVEAL}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-700 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={REVEAL}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function FloatingOrb({ className = '', delay = 0, duration = 9, x = 0, y = 14, scale = 0.04 }) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0], x: [0, x, 0], scale: [1, 1 + scale, 1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      className={className}
    />
  );
}

function InfoBox({ icon, label, value }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-slate-50/80 p-4">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-2 text-xl font-bold text-slate-950">{value}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Header and hero                                                             */
/* -------------------------------------------------------------------------- */

function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const goTo = (page) => {
    setCurrentPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/72">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <button onClick={() => goTo('home')} className="min-w-0 text-left">
            <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-[11px]">
              Soggiorni brevi a Livorno
            </div>
            <div className="mt-1 text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
              {BRAND}
            </div>
          </button>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-sm md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${currentPage === item.id ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => goTo('prenota')}
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-900 md:inline-flex"
          >
            Prenota ora
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="border-t border-slate-200 bg-white/95 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => goTo(item.id)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${currentPage === item.id ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-700'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function SearchBarVisual({ setCurrentPage }) {
  const defaults = getDefaultDates();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, ...REVEAL }}
      className="mt-8 rounded-[28px] border border-white/80 bg-white/86 p-3 shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
    >
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_0.8fr_auto]">
        {[
          ['Check-in', formatDateDisplay(defaults.checkIn)],
          ['Check-out', formatDateDisplay(defaults.checkOut)],
          ['Ospiti', '2 adulti'],
        ].map(([label, value]) => (
          <button
            key={label}
            onClick={() => setCurrentPage('prenota')}
            className="min-w-0 rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 text-left transition hover:border-slate-300 hover:shadow-sm"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {label}
            </div>
            <div className="mt-2 truncate text-base font-semibold text-slate-900">
              {value}
            </div>
          </button>
        ))}

        <button
          onClick={() => setCurrentPage('prenota')}
          className="rounded-[22px] bg-slate-950 px-6 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-slate-900"
        >
          Cerca disponibilità
        </button>
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, ...REVEAL }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-2 top-4 z-20 hidden rounded-[24px] border border-white/80 bg-white/88 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
      >
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Valutazione</div>
        <div className="mt-2 flex items-center gap-2 text-2xl font-bold text-slate-950">
          {property.rating}
          <Star size={18} className="fill-sky-500 text-sky-500" />
        </div>
        <div className="mt-1 text-sm text-slate-500">{property.reviews}</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 8.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-2 bottom-6 z-20 hidden rounded-[24px] border border-white/80 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
      >
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Da</div>
        <div className="mt-2 text-2xl font-bold text-slate-950">{formatEuro(property.basePrice)}</div>
        <div className="text-sm text-slate-500">a notte</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-2 shadow-[0_40px_120px_rgba(15,23,42,0.18)] sm:rounded-[34px]"
      >
        <img
          src={property.gallery[0]}
          alt={property.title}
          className="h-[330px] w-full rounded-[24px] object-cover sm:h-[480px] md:h-[620px] sm:rounded-[30px]"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/75 bg-white/86 p-5 shadow-xl backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
                {BRAND}
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {property.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={15} className="text-sky-700" /> {property.address}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-3">
              {[
                [`${property.guests}`, 'ospiti'],
                [`${property.beds}`, 'camere'],
                [property.size, 'superficie'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-slate-950 px-3 py-3 text-center text-white sm:px-4">
                  <div className="text-base font-bold sm:text-lg">{value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/70">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero({ setCurrentPage }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfdff_0%,#f4f9ff_58%,#f9fcff_100%)]">
      <FloatingOrb className="absolute left-[-80px] top-[120px] h-[220px] w-[220px] rounded-full bg-sky-200/35 blur-3xl" delay={0.1} duration={10} x={8} y={18} scale={0.05} />
      <FloatingOrb className="absolute right-[-60px] top-[180px] h-[240px] w-[240px] rounded-full bg-cyan-200/30 blur-3xl" delay={0.3} duration={12} x={-10} y={14} scale={0.04} />
      <FloatingOrb className="absolute bottom-[40px] left-[36%] h-[180px] w-[180px] rounded-full bg-slate-200/40 blur-3xl" delay={0.2} duration={11} x={6} y={12} scale={0.03} />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={REVEAL}
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/88 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-xl"
            >
              <ShieldCheck size={16} className="text-sky-600" />
              Terrazza • Fino a 5 ospiti • Prenotazione diretta
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04, ...REVEAL }}
              className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Appartamento elegante e spazioso per soggiorni brevi a Livorno.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, ...REVEAL }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Ambienti ampi, luce naturale, terrazza e posizione comoda tra stazione, centro e lungomare. Una soluzione pensata per offrire un soggiorno semplice, curato e affidabile fin dal primo contatto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, ...REVEAL }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => setCurrentPage('prenota')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-xl transition hover:bg-slate-900"
              >
                Verifica disponibilità <MoveRight size={18} />
              </button>
              <button
                onClick={() => setCurrentPage('appartamento')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/90 px-6 py-3.5 font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition hover:border-slate-400 hover:text-slate-950"
              >
                Scopri la struttura <ChevronRight size={18} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, ...REVEAL }}
              className="mt-9 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                [property.rating, 'Valutazione'],
                [property.size, 'Superficie'],
                [`${property.guests} ospiti`, 'Capienza'],
                [property.checkIn, 'Check-in'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[22px] border border-white/80 bg-white/78 p-4 shadow-md backdrop-blur-xl">
                  <div className="truncate text-lg font-bold text-slate-950 sm:text-xl">{value}</div>
                  <div className="mt-1 text-sm text-slate-500">{label}</div>
                </div>
              ))}
            </motion.div>

            <SearchBarVisual setCurrentPage={setCurrentPage} />
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Booking calendars                                                           */
/* -------------------------------------------------------------------------- */

function CalendarMonth({
  monthDate,
  checkIn,
  checkOut,
  hoverDate,
  selectionPhase,
  minDate,
  onDayHover,
  onPick,
}) {
  const days = buildMonthGrid(monthDate);

  return (
    <div>
      <div className="mb-4 text-base font-semibold text-slate-950">{monthLabel(monthDate)}</div>

      <div className="mb-2 grid grid-cols-7 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {weekdayLabels.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const iso = toISODate(day);
          const outsideMonth = !isSameMonth(day, monthDate);
          const booked = isDateBooked(day);
          const tooEarly = minDate ? normalizeDate(day) <= normalizeDate(minDate) : false;
          const disabled = booked || tooEarly;

          const startSelected = isSameISO(iso, checkIn);
          const endSelected = isSameISO(iso, checkOut);

          // While choosing check-out, we show a preview range under the pointer.
          const previewRangeActive =
            selectionPhase === 'end' &&
            checkIn &&
            hoverDate &&
            nightsBetween(checkIn, hoverDate) > 0;

          const inPreviewRange =
            previewRangeActive && isBetweenInclusive(iso, checkIn, hoverDate);

          const inConfirmedRange = isBetweenInclusive(iso, checkIn, checkOut);

          let stateClasses = 'border border-slate-200 bg-white text-slate-900 hover:border-sky-300 hover:bg-sky-50';

          if (outsideMonth) {
            stateClasses = 'border border-slate-100 bg-slate-50 text-slate-300';
          }

          if (disabled) {
            stateClasses = 'border border-slate-100 bg-slate-100 text-slate-400 cursor-not-allowed';
          }

          if (inPreviewRange || inConfirmedRange) {
            stateClasses = 'border border-sky-100 bg-sky-100 text-sky-950';
          }

          if (startSelected || endSelected) {
            stateClasses = 'border border-slate-950 bg-slate-950 text-white';
          }

          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onMouseEnter={() => onDayHover(iso)}
              onMouseLeave={() => onDayHover('')}
              onClick={() => onPick(iso)}
              className={`flex h-11 items-center justify-center rounded-2xl text-sm font-semibold transition ${stateClasses}`}
              title={booked ? 'Data occupata' : formatDateDisplay(iso)}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DateRangeModal({
  open,
  onClose,
  initialMonth,
  checkIn,
  checkOut,
  onSelectRange,
}) {
  const [viewMonth, setViewMonth] = useState(initialMonth ?? new Date(2026, 3, 1));
  const [selectionPhase, setSelectionPhase] = useState(checkIn && !checkOut ? 'end' : 'start');
  const [draftCheckIn, setDraftCheckIn] = useState(checkIn || '');
  const [draftCheckOut, setDraftCheckOut] = useState(checkOut || '');
  const [hoverDate, setHoverDate] = useState('');

  // Keep the modal state in sync every time it opens with external values.
  React.useEffect(() => {
    if (open) {
      setDraftCheckIn(checkIn || '');
      setDraftCheckOut(checkOut || '');
      setSelectionPhase(checkIn && !checkOut ? 'end' : 'start');
      const sourceDate = checkIn ? new Date(checkIn) : initialMonth ?? new Date(2026, 3, 1);
      setViewMonth(new Date(sourceDate.getFullYear(), sourceDate.getMonth(), 1));
      setHoverDate('');
    }
  }, [open, checkIn, checkOut, initialMonth]);

  const handlePick = (iso) => {
    if (selectionPhase === 'start') {
      // First click always starts a new range.
      setDraftCheckIn(iso);
      setDraftCheckOut('');
      setSelectionPhase('end');
      return;
    }

    // If the second click is before or equal to check-in, restart the selection from that day.
    if (!draftCheckIn || normalizeDate(iso) <= normalizeDate(draftCheckIn)) {
      setDraftCheckIn(iso);
      setDraftCheckOut('');
      setSelectionPhase('end');
      return;
    }

    // The whole range must remain free.
    if (!isRangeAvailable(draftCheckIn, iso)) {
      // Instead of silently failing, we restart from the clicked day.
      setDraftCheckIn(iso);
      setDraftCheckOut('');
      setSelectionPhase('end');
      return;
    }

    setDraftCheckOut(iso);
    onSelectRange({ checkIn: draftCheckIn, checkOut: iso });
    onClose();
  };

  const nextMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1);

  return (
    <Modal open={open} onClose={onClose} title="Seleziona le date" wide>
      <div className="space-y-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm text-slate-500">
              {selectionPhase === 'start'
                ? 'Scegli il check-in'
                : 'Ora scegli il check-out'}
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                Check-in: <strong>{formatDateDisplay(draftCheckIn)}</strong>
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                Check-out: <strong>{formatDateDisplay(draftCheckOut)}</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1))}
              className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))}
              className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 hover:bg-slate-50"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Two months on desktop, one below the other on narrow screens. */}
        <div className="grid gap-6 xl:grid-cols-2">
          <CalendarMonth
            monthDate={viewMonth}
            checkIn={draftCheckIn}
            checkOut={draftCheckOut}
            hoverDate={hoverDate}
            selectionPhase={selectionPhase}
            minDate={selectionPhase === 'end' ? draftCheckIn : ''}
            onDayHover={setHoverDate}
            onPick={handlePick}
          />

          <CalendarMonth
            monthDate={nextMonth}
            checkIn={draftCheckIn}
            checkOut={draftCheckOut}
            hoverDate={hoverDate}
            selectionPhase={selectionPhase}
            minDate={selectionPhase === 'end' ? draftCheckIn : ''}
            onDayHover={setHoverDate}
            onPick={handlePick}
          />
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-slate-600">
          <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full border border-slate-300 bg-white" /> Disponibile</div>
          <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-slate-300" /> Occupato</div>
          <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-sky-100" /> Range selezionato</div>
          <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-slate-950" /> Check-in / Check-out</div>
        </div>
      </div>
    </Modal>
  );
}

function DateDisplayButton({ label, value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="min-w-0 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:border-slate-300 hover:bg-white"
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</div>
      <div className="mt-2 truncate text-base font-semibold text-slate-950">{formatDateDisplay(value)}</div>
    </button>
  );
}

function CompactAvailabilityCalendar() {
  const month = new Date(2026, 3, 1);
  const days = buildMonthGrid(month);
  const checkIn = '2026-04-24';
  const checkOut = '2026-04-27';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={SPRING}
      className="rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-950">Disponibilità simulata</h3>
          <p className="mt-2 text-sm text-slate-600">Anteprima visuale del mese corrente.</p>
        </div>
        <div className="text-sm font-medium text-sky-700">{monthLabel(month)}</div>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {weekdayLabels.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-7 gap-2">
        {days.map((day) => {
          const iso = toISODate(day);
          const outside = !isSameMonth(day, month);
          const booked = isDateBooked(day);
          const selected = isBetweenInclusive(iso, checkIn, checkOut);
          const edge = isSameISO(iso, checkIn) || isSameISO(iso, checkOut);

          let classes = 'border border-slate-200 bg-white text-slate-900';
          if (outside) classes = 'border border-slate-100 bg-slate-50 text-slate-300';
          if (booked) classes = 'border border-slate-100 bg-slate-100 text-slate-400';
          if (selected) classes = 'border border-sky-100 bg-sky-100 text-sky-950';
          if (edge) classes = 'border border-slate-950 bg-slate-950 text-white';

          return (
            <div
              key={iso}
              className={`flex h-10 items-center justify-center rounded-2xl text-sm font-semibold ${classes}`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-600">
        <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full border border-slate-300 bg-white" /> Disponibile</div>
        <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-slate-300" /> Occupato</div>
        <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-sky-100" /> Range selezionato</div>
        <div className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-slate-950" /> Check-in / Check-out</div>
      </div>
    </motion.div>
  );
}

function BookingWidget({ compact = false, onConfirmed }) {
  const defaults = getDefaultDates();
  const [checkIn, setCheckIn] = useState(defaults.checkIn);
  const [checkOut, setCheckOut] = useState(defaults.checkOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [airportTransfer, setAirportTransfer] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [rangeModalOpen, setRangeModalOpen] = useState(false);

  const nights = nightsBetween(checkIn, checkOut);
  const roomTotal = nights * property.basePrice;
  const cityTaxTotal = nights * adults * property.cityTax;
  const transferTotal = airportTransfer ? 35 : 0;
  const total = roomTotal + property.cleaningFee + cityTaxTotal + transferTotal;

  const handleRangeSelection = ({ checkIn: nextCheckIn, checkOut: nextCheckOut }) => {
    setCheckIn(nextCheckIn);
    setCheckOut(nextCheckOut || findNextAvailableCheckout(nextCheckIn));
    setError('');
  };

  const handleNext = () => {
    if (!checkIn || !checkOut || !nights) {
      setError('Seleziona date valide per continuare.');
      return;
    }

    if (!isRangeAvailable(checkIn, checkOut)) {
      setError('Le date selezionate non sono disponibili.');
      return;
    }

    setError('');
    setStep(2);
  };

  const handleConfirm = () => {
    if (!name || !email) {
      setError('Inserisci nome ed email per completare la simulazione.');
      return;
    }

    setError('');
    setShowSummary(true);
    onConfirmed?.({ name, email, total, nights });
  };

  return (
    <>
      <motion.div
        whileHover={{ y: compact ? 0 : -2 }}
        transition={SPRING}
        className={`rounded-[28px] border border-slate-200 bg-white/92 ${compact ? 'p-5' : 'p-5 md:p-7'} shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold text-slate-950">Prenota il soggiorno</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Calendario vero, ospiti, extra e riepilogo soggiorno in una demo più rifinita e immersiva.
            </p>
          </div>
          <div className="shrink-0 rounded-[22px] border border-sky-100 bg-sky-50/80 px-4 py-3 text-right">
            <div className="text-sm text-slate-500">da</div>
            <div className="text-xl font-bold text-slate-950">{formatEuro(property.basePrice)}</div>
            <div className="text-xs text-slate-500">a notte</div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          <span className={`rounded-full px-3 py-1.5 ${step === 1 ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-500'}`}>1. date</span>
          <span className={`rounded-full px-3 py-1.5 ${step === 2 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>2. dati ospite</span>
        </div>

        {step === 1 ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <DateDisplayButton label="Check-in" value={checkIn} onClick={() => setRangeModalOpen(true)} />
              <DateDisplayButton label="Check-out" value={checkOut} onClick={() => setRangeModalOpen(true)} />
            </div>

            <button
              type="button"
              onClick={() => setRangeModalOpen(true)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-white"
            >
              <CalendarDays size={18} className="text-sky-700" />
              Apri calendario prenotazioni
            </button>

            <div className="grid gap-3 sm:grid-cols-3">
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">Adulti</span>
                <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="w-full rounded-[22px] border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 sm:text-base">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">Bambini</span>
                <select value={children} onChange={(e) => setChildren(Number(e.target.value))} className="w-full rounded-[22px] border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 sm:text-base">
                  {[0, 1, 2, 3].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">Animali</span>
                <select value={pets} onChange={(e) => setPets(Number(e.target.value))} className="w-full rounded-[22px] border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 sm:text-base">
                  {[0, 1, 2].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={airportTransfer}
                onChange={(e) => setAirportTransfer(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-sky-600"
              />
              Aggiungi transfer aeroportuale
            </label>
          </div>
        ) : (
          <div className="mt-6 grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">Nome e cognome</span>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[22px] border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500 sm:text-base" placeholder="Mario Rossi" />
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[22px] border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500 sm:text-base" placeholder="email@esempio.it" />
              </label>
            </div>
            <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <div className="font-semibold text-slate-950">Riepilogo rapido</div>
              <div className="mt-2">{nights} notti • {adults} adulti • {children} bambini • {pets} animali</div>
              <div className="mt-1">{formatDateDisplay(checkIn)} → {formatDateDisplay(checkOut)}</div>
            </div>
          </div>
        )}

        <div className="mt-6 rounded-[24px] border border-sky-100 bg-sky-50/80 p-5">
          <div className="flex items-center justify-between text-sm text-slate-600"><span>Notti</span><span className="font-semibold text-slate-950">{nights || '—'}</span></div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-600"><span>Tariffa soggiorno</span><span className="font-semibold text-slate-950">{nights ? formatEuro(roomTotal) : '—'}</span></div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-600"><span>Pulizie finali</span><span className="font-semibold text-slate-950">{formatEuro(property.cleaningFee)}</span></div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-600"><span>Tassa di soggiorno</span><span className="font-semibold text-slate-950">{nights ? formatEuro(cityTaxTotal) : '—'}</span></div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-600"><span>Transfer</span><span className="font-semibold text-slate-950">{airportTransfer ? formatEuro(transferTotal) : formatEuro(0)}</span></div>
          <div className="mt-4 flex items-center justify-between border-t border-sky-200 pt-4"><span className="text-base font-semibold text-slate-950">Totale stimato</span><span className="text-2xl font-bold text-slate-950">{nights ? formatEuro(total) : '—'}</span></div>
        </div>

        {error ? (
          <div className="mt-4 rounded-[22px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <div className="rounded-[22px] border border-slate-200 bg-white p-4"><div className="flex items-center gap-2 font-medium text-slate-950"><Clock3 size={16} className="text-sky-700" /> {property.checkIn}</div><div className="mt-1">Check-in coordinato con host o self-service</div></div>
          <div className="rounded-[22px] border border-slate-200 bg-white p-4"><div className="flex items-center gap-2 font-medium text-slate-950"><CreditCard size={16} className="text-sky-700" /> Conferma soggiorno</div><div className="mt-1">Demo del flusso finale di prenotazione</div></div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {step === 2 ? (
            <button type="button" onClick={() => setStep(1)} className="flex-1 rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Torna indietro
            </button>
          ) : null}
          {step === 1 ? (
            <button type="button" onClick={handleNext} className="flex-1 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-900">
              Continua
            </button>
          ) : (
            <button type="button" onClick={handleConfirm} className="flex-1 rounded-full bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500">
              Conferma prenotazione
            </button>
          )}
        </div>
      </motion.div>

      <DateRangeModal
        open={rangeModalOpen}
        onClose={() => setRangeModalOpen(false)}
        initialMonth={new Date(checkIn || '2026-04-24')}
        checkIn={checkIn}
        checkOut={checkOut}
        onSelectRange={handleRangeSelection}
      />

      <Modal open={showSummary} onClose={() => setShowSummary(false)} title="Prenotazione inviata (demo)">
        <div className="space-y-4">
          <div className="rounded-[22px] border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
            Simulazione completata con successo. Nel sito finale qui si aprirebbe la conferma vera o l’invio al booking engine.
          </div>
          <div className="grid gap-3 text-sm text-slate-700">
            <div><span className="font-semibold">Ospite:</span> {name}</div>
            <div><span className="font-semibold">Email:</span> {email}</div>
            <div><span className="font-semibold">Soggiorno:</span> {formatDateDisplay(checkIn)} → {formatDateDisplay(checkOut)}</div>
            <div><span className="font-semibold">Notti:</span> {nights}</div>
            <div><span className="font-semibold">Totale stimato:</span> {formatEuro(total)}</div>
          </div>
          <button onClick={() => setShowSummary(false)} className="w-full rounded-full bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-900">
            Chiudi anteprima
          </button>
        </div>
      </Modal>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Page sections                                                               */
/* -------------------------------------------------------------------------- */

function BenefitRibbon() {
  const items = [
    { icon: Wifi, title: 'Wi‑Fi incluso', text: 'Connessione stabile per vacanze, lavoro o soste più pratiche.' },
    { icon: Car, title: 'Posizione comoda', text: 'Facile da raggiungere e utile per muoversi tra stazione, centro e porto.' },
    { icon: CalendarDays, title: 'Prenotazione dal sito', text: 'Calendario, riepilogo soggiorno e richiesta in un flusso più pulito e premium.' },
  ];

  return (
    <AnimatedSection className="border-y border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, ...REVEAL }}
              className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 font-semibold text-slate-950"><Icon size={18} className="text-sky-700" /> {item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

function BookingPreview({ setCurrentPage }) {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-16 lg:px-8">
      <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#fbfdff_0%,#f1f7ff_60%,#f8fbff_100%)] p-6 shadow-[0_30px_100px_rgba(15,23,42,0.10)] md:p-10">
        <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"><Sparkles size={16} className="text-sky-600" /> Booking engine preview</div>
            <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Prenotazione più chiara, più elegante, più vicina a un sito premium.</h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">Qui si vedono check-in, check-out, ospiti, extra, riepilogo costi e conferma simulata in una presentazione più pulita, adatta a una demo da mostrare.</p>
            <button onClick={() => setCurrentPage('prenota')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-900">
              Apri la pagina prenotazione <ChevronRight size={18} />
            </button>
          </div>
          <div className="rounded-[26px] border border-white/85 bg-white/92 p-3 shadow-2xl backdrop-blur-xl md:p-4">
            <BookingWidget compact />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ApartmentImageShowcase() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const prev = () => setActive((active - 1 + property.gallery.length) % property.gallery.length);
  const next = () => setActive((active + 1) % property.gallery.length);

  return (
    <>
      <div>
        <motion.img whileHover={{ scale: 1.01 }} transition={{ duration: 0.45, ease: 'easeOut' }} src={property.gallery[active]} alt={`${property.title} ${active + 1}`} onClick={() => setOpen(true)} className="h-[280px] w-full cursor-pointer rounded-[28px] border border-slate-200 object-cover shadow-lg sm:h-[420px] md:h-[520px]" />
        <div className="mt-4 flex items-center justify-between gap-3">
          <button onClick={prev} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"><ArrowLeft size={16} /> Precedente</button>
          <div className="text-sm text-slate-500">Foto {active + 1} di {property.gallery.length}</div>
          <button onClick={next} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Successiva <ArrowRight size={16} /></button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {property.gallery.map((img, index) => (
            <button key={img} onClick={() => setActive(index)} className={`overflow-hidden rounded-[20px] border transition ${active === index ? 'border-sky-600 ring-2 ring-sky-200' : 'border-slate-200'}`}>
              <img src={img} alt={`miniatura ${index + 1}`} className="h-20 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} wide title="Galleria struttura">
        <div className="space-y-4">
          <img src={property.gallery[active]} alt={`${property.title} ${active + 1}`} className="max-h-[72vh] w-full rounded-[24px] object-cover" />
          <div className="flex items-center justify-between">
            <button onClick={prev} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"><ArrowLeft size={16} /> Precedente</button>
            <div className="text-sm text-slate-500">Foto {active + 1} di {property.gallery.length}</div>
            <button onClick={next} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Successiva <ArrowRight size={16} /></button>
          </div>
        </div>
      </Modal>
    </>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <BenefitRibbon />
      <ApartmentPreview setCurrentPage={setCurrentPage} />
      <BookingPreview setCurrentPage={setCurrentPage} />
      <LivornoPreview setCurrentPage={setCurrentPage} />
    </>
  );
}

function ApartmentPreview({ setCurrentPage }) {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <SectionHeading
        eyebrow="La struttura"
        title="Spazio, luce e dettagli più curati per una percezione di livello superiore"
        text={property.longDescription}
      />

      <div className="mt-10 grid gap-6 md:gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {property.gallery.slice(1, 5).map((img, index) => (
            <motion.div key={img} whileHover={{ y: -4 }} transition={SPRING} className={index === 0 ? 'sm:col-span-2' : ''}>
              <img src={img} alt={`${property.title} ${index + 2}`} className="h-full min-h-[190px] w-full rounded-[24px] border border-slate-200 object-cover shadow-sm sm:min-h-[220px]" />
            </motion.div>
          ))}
        </div>

        <motion.div whileHover={{ y: -4 }} transition={SPRING} className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-7">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <InfoBox icon={<Users size={18} className="text-sky-700" />} label="Ospiti" value={`${property.guests}`} />
            <InfoBox icon={<BedDouble size={18} className="text-sky-700" />} label="Camere" value={`${property.beds}`} />
            <InfoBox icon={<Bath size={18} className="text-sky-700" />} label="Bagno" value={`${property.baths}`} />
            <InfoBox icon={<Building2 size={18} className="text-sky-700" />} label="Superficie" value={property.size} />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-950">Punti di forza</h3>
            <div className="mt-4 grid gap-3">
              {property.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50/80 px-4 py-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-700" /> {item}
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setCurrentPage('appartamento')} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-900">
            Vedi tutti i dettagli <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function ApartmentPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={PAGE} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      {/* The aside now uses a fixed width only on extra-large screens, which keeps the desktop alignment much cleaner. */}
      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.05fr)_420px]">
        <div className="min-w-0">
          <SectionHeading eyebrow="Scheda struttura" title={property.title} text={property.longDescription} />
          <div className="mt-8"><ApartmentImageShowcase /></div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            <motion.div whileHover={{ y: -2 }} transition={SPRING} className="rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <h3 className="text-xl font-bold text-slate-950">Servizi inclusi</h3>
              <div className="mt-4 grid gap-3">
                {property.amenities.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="text-sky-700" /> {item}</div>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={SPRING} className="rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <h3 className="text-xl font-bold text-slate-950">Informazioni utili</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div><span className="font-semibold">Check-in:</span> {property.checkIn}</div>
                <div><span className="font-semibold">Check-out:</span> {property.checkOut}</div>
                <div><span className="font-semibold">Area:</span> {property.address}</div>
                <div><span className="font-semibold">Valutazione:</span> {property.rating} su 10</div>
                <div><span className="font-semibold">Recensioni:</span> {property.reviews}</div>
                <div><span className="font-semibold">Contatto:</span> diretto con la struttura</div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 md:gap-6 lg:grid-cols-[1fr_1fr]">
            <CompactAvailabilityCalendar />
            <motion.div whileHover={{ y: -2 }} transition={SPRING} className="rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <h3 className="text-xl font-bold text-slate-950">Regole e soggiorno</h3>
              <div className="mt-4 grid gap-3">
                {property.policies.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-700"><CheckCircle2 size={16} className="mt-0.5 text-sky-700" /> {item}</div>
                ))}
              </div>
              <div className="mt-6 rounded-[22px] border border-sky-100 bg-sky-50/80 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-950">Extra richiesti di frequente</div>
                <div className="mt-2 flex items-center gap-2"><Luggage size={16} className="text-sky-700" /> Deposito bagagli / coordinamento arrivo</div>
                <div className="mt-2 flex items-center gap-2"><Plane size={16} className="text-sky-700" /> Transfer aeroportuale su richiesta</div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <SectionHeading eyebrow="Posizione" title="Una base pratica per muoversi tra stazione, centro e luoghi simbolo di Livorno" text="La posizione è utile sia per soggiorni turistici sia per chi arriva in città in treno, in auto o per imbarco al porto." />
            <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
              {nearby.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} whileHover={{ y: -2 }} transition={SPRING} className="rounded-[24px] border border-slate-200 bg-sky-50/70 p-5 shadow-sm">
                    <div className="flex items-center gap-2 font-semibold text-slate-950"><Icon size={18} className="text-sky-700" /> {item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    <div className="mt-3 text-sm font-medium text-sky-700">{item.meta}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="xl:sticky xl:top-24 xl:self-start">
          <BookingWidget />
        </aside>
      </div>
    </motion.main>
  );
}

function BookingPage() {
  const [lastBooking, setLastBooking] = useState(null);

  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={PAGE} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      <SectionHeading eyebrow="Prenotazione" title="Un flusso completo che fa percepire il sito come un prodotto più maturo" text="Qui si vedono ricerca disponibilità, calendario vero, selezione ospiti, costi, regole e conferma simulata all’interno di una pagina più premium e rifinita." />

      <div className="mt-10 grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-6">
          <CompactAvailabilityCalendar />
          <motion.div whileHover={{ y: -2 }} transition={SPRING} className="rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
            <h3 className="text-xl font-bold text-slate-950">Come funziona il soggiorno</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ['1', 'Seleziona le date', 'Si vede il calendario reale e si scelgono check-in e check-out in modo ordinato e intuitivo.'],
                ['2', 'Imposta gli ospiti', 'Numero di adulti, bambini, eventuali extra e richieste speciali.'],
                ['3', 'Controlla il riepilogo', 'Tariffa notti, pulizie, eventuale tassa di soggiorno e totale stimato.'],
                ['4', 'Invia la richiesta', 'Conferma prenotazione o richiesta disponibilità con dati già organizzati.'],
              ].map(([num, title, text]) => (
                <div key={num} className="rounded-[22px] border border-sky-100 bg-sky-50/80 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 font-bold text-white">{num}</div>
                  <div className="mt-4 font-semibold text-slate-950">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {lastBooking ? (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={PAGE} className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
              <div className="flex items-center gap-2 font-semibold text-emerald-800"><Sparkles size={18} /> Ultima simulazione completata</div>
              <div className="mt-3 text-sm text-emerald-800">Prenotazione demo inviata da <strong>{lastBooking.name}</strong> per <strong>{lastBooking.nights}</strong> notti, totale stimato <strong>{formatEuro(lastBooking.total)}</strong>.</div>
            </motion.div>
          ) : null}
        </div>

        <aside className="xl:sticky xl:top-24 xl:self-start">
          <BookingWidget onConfirmed={setLastBooking} />
        </aside>
      </div>
    </motion.main>
  );
}

function GalleryPage() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const prev = () => setActive((active - 1 + property.gallery.length) % property.gallery.length);
  const next = () => setActive((active + 1) % property.gallery.length);

  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={PAGE} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      <SectionHeading eyebrow="Galleria" title="Una selezione fotografica più ampia e immersiva" text="Una bozza pensata per mostrare come il sito finale può valorizzare gli ambienti con una galleria più ricca, ordinata e scenografica." />
      <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {property.gallery.map((img, index) => (
          <motion.button key={img} whileHover={{ y: -3 }} transition={SPRING} onClick={() => { setActive(index); setOpen(true); }} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <img src={img} alt={`${property.title} foto ${index + 1}`} className="h-[220px] w-full object-cover transition duration-500 hover:scale-[1.03] md:h-[300px]" />
          </motion.button>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} wide title="Galleria struttura">
        <div className="space-y-4">
          <img src={property.gallery[active]} alt={`${property.title} foto ${active + 1}`} className="max-h-[72vh] w-full rounded-[24px] object-cover" />
          <div className="flex items-center justify-between">
            <button onClick={prev} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"><ArrowLeft size={16} /> Precedente</button>
            <div className="text-sm text-slate-500">Foto {active + 1} di {property.gallery.length}</div>
            <button onClick={next} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Successiva <ArrowRight size={16} /></button>
          </div>
        </div>
      </Modal>
    </motion.main>
  );
}

function LivornoPreview({ setCurrentPage }) {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-16 lg:px-8">
      <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#0b3f73_55%,#0a5fa9_100%)] p-6 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] md:p-10">
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Scopri Livorno</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Cosa fare in città e gli eventi correnti già dentro il sito.</h2>
            <p className="mt-4 leading-relaxed text-slate-200">Qui si possono unire guide utili, itinerari locali ed eventi in corso a Livorno e Pisa, così la permanenza diventa più ricca e il sito acquista più valore percepito.</p>
            <button onClick={() => setCurrentPage('livorno')} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Vedi eventi e guida città <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {currentEvents.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} whileHover={{ y: -3 }} transition={SPRING} className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-2 font-semibold text-white"><Icon size={18} className="text-sky-300" /> {item.title}</div>
                  <div className="mt-3 text-sm text-slate-300">{item.date}</div>
                  <div className="mt-1 text-sm text-slate-300">{item.place}</div>
                  <div className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sky-200">{item.area}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function EventCard({ item }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <>
      <motion.button whileHover={{ y: -3 }} transition={SPRING} onClick={() => setOpen(true)} className="text-left rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <div className="flex items-center gap-2 font-semibold text-slate-950"><Icon size={18} className="text-sky-700" /> {item.title}</div>
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600"><CalendarDays size={16} className="text-sky-700" /> {item.date}</div>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600"><MapPin size={16} className="text-sky-700" /> {item.place}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">{item.area}</span>
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{item.tag}</span>
        </div>
      </motion.button>

      <Modal open={open} onClose={() => setOpen(false)} title={item.title}>
        <div className="space-y-4 text-sm text-slate-700">
          <div className="rounded-[22px] border border-sky-100 bg-sky-50 p-4">Qui si possono mostrare descrizione completa, foto, mappa, orari e link esterni dell’evento.</div>
          <div><span className="font-semibold">Area:</span> {item.area}</div>
          <div><span className="font-semibold">Data:</span> {item.date}</div>
          <div><span className="font-semibold">Luogo:</span> {item.place}</div>
          <div><span className="font-semibold">Categoria:</span> {item.tag}</div>
          <button onClick={() => setOpen(false)} className="w-full rounded-full bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-900">Chiudi</button>
        </div>
      </Modal>
    </>
  );
}

function LivornoPage() {
  const [area, setArea] = useState('Tutti');
  const [tag, setTag] = useState('Tutti');
  const [query, setQuery] = useState('');

  const areas = ['Tutti', ...new Set(currentEvents.map((item) => item.area))];
  const tags = ['Tutti', ...new Set(currentEvents.map((item) => item.tag))];
  const filteredEvents = currentEvents.filter((item) => {
    const areaOk = area === 'Tutti' || item.area === area;
    const tagOk = tag === 'Tutti' || item.tag === tag;
    const queryOk = !query || `${item.title} ${item.place} ${item.tag} ${item.area}`.toLowerCase().includes(query.toLowerCase());
    return areaOk && tagOk && queryOk;
  });

  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={PAGE} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      <SectionHeading eyebrow="Livorno & dintorni" title="Guide locali e calendario eventi in una sezione più ricca e filtrabile" text="Qui si uniscono contenuti evergreen su Livorno con eventi correnti già visibili in homepage o in una pagina dedicata, per dare più utilità e spessore al sito." />

      <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
        {thingsToDo.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} whileHover={{ y: -2 }} transition={SPRING} className="rounded-[28px] border border-slate-200 bg-white/92 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <div className="flex items-center gap-2 font-semibold text-slate-950"><Icon size={20} className="text-sky-700" /> {item.title}</div>
              <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 rounded-[28px] border border-slate-200 bg-white/92 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700"><Filter size={16} /> Filtri eventi</div>
          <div className="relative min-w-[220px] flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cerca evento, luogo o categoria" className="w-full rounded-full border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-slate-500" />
          </div>
          <select value={area} onChange={(e) => setArea(e.target.value)} className="rounded-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500">
            {areas.map((a) => <option key={a}>{a}</option>)}
          </select>
          <select value={tag} onChange={(e) => setTag(e.target.value)} className="rounded-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500">
            {tags.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="text-sm text-slate-500">{filteredEvents.length} eventi trovati</div>
        {query || area !== 'Tutti' || tag !== 'Tutti' ? (
          <button onClick={() => { setQuery(''); setArea('Tutti'); setTag('Tutti'); }} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <XCircle size={16} /> Azzera filtri
          </button>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {filteredEvents.map((item) => <EventCard key={`${item.title}-${item.date}`} item={item} />)}
      </div>

      {filteredEvents.length === 0 ? <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">Nessun evento trovato con i filtri attuali.</div> : null}
    </motion.main>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ nome: '', cognome: '', email: '', telefono: '', arrivo: '', partenza: '', messaggio: '' });
  const [sent, setSent] = useState(false);
  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={PAGE} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      <SectionHeading eyebrow="Contatti" title="Richiesta soggiorno e informazioni in una pagina più pulita e credibile" text="Qui si può contattare direttamente la struttura, verificare disponibilità e inviare una richiesta in modo semplice e ordinato." />

      <div className="mt-10 grid gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div whileHover={{ y: -2 }} transition={SPRING} className="rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#0c4a7d_58%,#0a5fa9_100%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.20)]">
          <h3 className="text-2xl font-bold">Contatto rapido</h3>
          <p className="mt-4 leading-relaxed text-slate-200">Per informazioni su date, soggiorno e disponibilità qui si può contattare direttamente la struttura in modo semplice e veloce.</p>
          <div className="mt-8 space-y-4 text-slate-100">
            <div className="flex items-center gap-3"><Phone size={18} className="text-sky-300" /> {property.phone}</div>
            <div className="flex items-center gap-3"><Mail size={18} className="text-sky-300" /> {property.email}</div>
            <div className="flex items-center gap-3"><MapPin size={18} className="text-sky-300" /> {property.address}</div>
          </div>
          <div className="mt-8 rounded-[22px] border border-white/10 bg-white/10 p-5 text-sm text-slate-200">Una comunicazione diretta e una struttura presentata meglio aumentano fiducia e qualità percepita.</div>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} transition={SPRING} className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl md:p-8">
          {sent ? (
            <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6">
              <div className="flex items-center gap-2 font-semibold text-emerald-800"><CheckCircle2 size={18} /> Messaggio inviato (demo)</div>
              <p className="mt-3 text-sm text-emerald-800">Grazie {form.nome || 'ospite'}, nel sito finale qui verrebbe inviata una richiesta reale alla struttura.</p>
              <button onClick={() => setSent(false)} className="mt-5 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-900">Invia un altro messaggio</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Nome" className="rounded-[22px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-500" />
                <input value={form.cognome} onChange={(e) => update('cognome', e.target.value)} placeholder="Cognome" className="rounded-[22px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-500" />
              </div>
              <input value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Email" className="rounded-[22px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-500" />
              <input value={form.telefono} onChange={(e) => update('telefono', e.target.value)} placeholder="Telefono" className="rounded-[22px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-500" />
              <div className="grid gap-4 md:grid-cols-2">
                <input value={form.arrivo} onChange={(e) => update('arrivo', e.target.value)} placeholder="Data arrivo" className="rounded-[22px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-500" />
                <input value={form.partenza} onChange={(e) => update('partenza', e.target.value)} placeholder="Data partenza" className="rounded-[22px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-500" />
              </div>
              <textarea value={form.messaggio} onChange={(e) => update('messaggio', e.target.value)} placeholder="Messaggio" className="min-h-[140px] rounded-[22px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-500" />
              <button type="submit" className="rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-900">Invia richiesta</button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.main>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-base font-bold text-slate-950">{BRAND}</div>
          <p className="mt-2 max-w-md">Bozza premium con una sola proprietà, booking engine visivo, galleria interattiva e sezione eventi pensata per far percepire il sito come più completo e competitivo.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setCurrentPage(item.id)} className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FloatingHelp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-4 right-4 z-40 rounded-full bg-slate-950 p-3 text-white shadow-[0_18px_40px_rgba(15,23,42,0.24)] transition hover:bg-slate-900 md:bottom-5 md:right-5 md:p-4" aria-label="Apri informazioni demo">
        <Info size={20} />
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Demo interattiva pronta da mostrare">
        <div className="space-y-4 text-sm text-slate-700">
          <p>Qui si vede una versione più premium e interattiva del sito: prenotazione, galleria, filtri eventi, modali, form e animazioni sono pensati per far percepire il progetto come più maturo e competitivo.</p>
          <div className="rounded-[22px] border border-sky-100 bg-sky-50 p-4">Nel sito finale questi elementi verrebbero collegati a WordPress, booking engine reale e gestione eventi dal backend.</div>
          <button onClick={() => setOpen(false)} className="w-full rounded-full bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-900">Chiudi</button>
        </div>
      </Modal>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Main app                                                                    */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // This memo avoids rebuilding the whole page tree unnecessarily on every render.
  const page = useMemo(() => {
    if (currentPage === 'home') return <HomePage setCurrentPage={setCurrentPage} />;
    if (currentPage === 'appartamento') return <ApartmentPage />;
    if (currentPage === 'prenota') return <BookingPage />;
    if (currentPage === 'galleria') return <GalleryPage />;
    if (currentPage === 'livorno') return <LivornoPage />;
    if (currentPage === 'contatti') return <ContactPage />;
    return <HomePage setCurrentPage={setCurrentPage} />;
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbfdff_0%,#f6faff_38%,#fcfdff_100%)] text-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AnimatePresence mode="wait">
        <motion.div key={currentPage} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={PAGE}>
          {page}
        </motion.div>
      </AnimatePresence>
      <Footer setCurrentPage={setCurrentPage} />
      <FloatingHelp />
    </div>
  );
}
