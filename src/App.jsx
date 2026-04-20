import React, { useMemo, useState } from 'react';
import {
  Home,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  ShieldCheck,
  Star,
  Users,
  BedDouble,
  Bath,
  Car,
  Wifi,
  Coffee,
  MessageCircle,
  Waves,
  KeyRound,
  Sparkles,
} from 'lucide-react';

const properties = [
  {
    id: 'casa-mare',
    name: 'Appartamento Vista Mare',
    location: 'Livorno, Toscana',
    price: 'da 85€/notte',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description:
      'Una soluzione luminosa e accogliente a pochi minuti dal mare, pensata per offrire un soggiorno rilassante in una delle zone più piacevoli della costa toscana.',
    longDescription:
      'Appartamento curato nei dettagli, ideale per coppie e piccole famiglie che cercano comfort, praticità e una posizione comoda per vivere il mare, il centro città e i principali servizi. Gli ambienti sono funzionali, ben distribuiti e adatti sia a weekend brevi sia a soggiorni di più giorni.',
    guests: 4,
    beds: 2,
    baths: 1,
    features: ['Wi‑Fi', 'Cucina attrezzata', 'Balcone', 'Parcheggio vicino'],
    highlight: 'Perfetto per coppie e piccole famiglie',
  },
  {
    id: 'suite-centro',
    name: 'Suite Centro Storico',
    location: 'Pisa, Toscana',
    price: 'da 95€/notte',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    description:
      'Una sistemazione elegante e riservata nel cuore della città, ideale per chi desidera comodità, stile e accesso immediato ai principali punti di interesse.',
    longDescription:
      'La suite è pensata per chi apprezza una posizione centrale senza rinunciare a comfort e privacy. Perfetta per viaggi di coppia, soggiorni business o brevi permanenze in città, offre un ambiente curato e una base pratica per muoversi con facilità.',
    guests: 2,
    beds: 1,
    baths: 1,
    features: ['Self check-in', 'Aria condizionata', 'Smart TV', 'Posizione centrale'],
    highlight: 'Ideale per city break e soggiorni business',
  },
  {
    id: 'villa',
    name: 'Villa con Giardino Privato',
    location: 'Castiglioncello, Toscana',
    price: 'da 140€/notte',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description:
      'Una villa indipendente con ambienti ampi e spazi esterni riservati, pensata per chi desidera tranquillità, privacy e un soggiorno di livello superiore.',
    longDescription:
      'Ideale per famiglie o piccoli gruppi, questa soluzione unisce comfort, atmosfera e libertà di vivere gli spazi in totale relax. La vicinanza al mare e il contesto tranquillo la rendono perfetta per vacanze rigeneranti, con tutta la comodità di una casa completa.',
    guests: 6,
    beds: 3,
    baths: 2,
    features: ['Giardino privato', 'Zona relax', 'Cucina completa', 'Spazi ampi'],
    highlight: 'Pensata per soggiorni rilassanti e più lunghi',
  },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'proprieta', label: 'Proprietà' },
  { id: 'servizi', label: 'Servizi' },
  { id: 'chi-siamo', label: 'Chi siamo' },
  { id: 'contatti', label: 'Contatti' },
];

function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const goTo = (page) => {
    setCurrentPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <button onClick={() => goTo('home')} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-900 text-white shadow-sm">
              <Home size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Case vacanza e soggiorni brevi
              </div>
              <div className="text-lg font-bold text-sky-950">Residenze Toscana</div>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  currentPage === item.id ? 'bg-sky-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => goTo('contatti')}
              className="rounded-2xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Verifica disponibilità
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-2 pt-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium ${
                  currentPage === item.id ? 'bg-sky-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{text}</p> : null}
    </div>
  );
}

function Hero({ setCurrentPage }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <ShieldCheck size={16} className="text-sky-400" />
            Ospitalità curata, contatto diretto, esperienza affidabile
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Soggiorni selezionati in Toscana, pensati per chi cerca comfort, stile e semplicità.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Appartamenti, suite e ville scelti per offrire un’esperienza piacevole, ambienti curati e
            una gestione attenta dell’ospitalità. Una proposta ideale per vacanze brevi, weekend sul
            mare o soggiorni in città.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setCurrentPage('proprieta')}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-500"
            >
              Scopri le proprietà <ChevronRight size={18} />
            </button>
            <button
              onClick={() => setCurrentPage('contatti')}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Richiedi informazioni
            </button>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ['3', 'Soluzioni selezionate'],
              ['24h', 'Risposta rapida'],
              ['Diretto', 'Contatto senza intermediari'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">{value}</div>
                <div className="mt-1 text-sm text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80"
              alt="Interno elegante appartamento"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-[24px] bg-white/92 p-5 text-slate-900 shadow-lg backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    In evidenza
                  </div>
                  <div className="mt-1 text-xl font-bold">Appartamento Vista Mare</div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={15} /> Livorno, Toscana
                  </div>
                </div>
                <div className="rounded-2xl bg-sky-900 px-4 py-2 text-sm font-semibold text-white">
                  da 85€/notte
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProperties({ setCurrentPage, setSelectedProperty }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Proprietà"
        title="Spazi accoglienti per vacanze, weekend e soggiorni brevi"
        text="Ogni struttura è presentata con immagini di qualità, informazioni essenziali e una scheda dedicata per aiutare il visitatore a scegliere con facilità la soluzione più adatta."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {properties.map((property) => (
          <article
            key={property.id}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl"
          >
            <img src={property.image} alt={property.name} className="h-60 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{property.name}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin size={14} /> {property.location}
                  </p>
                </div>
                <span className="text-sm font-semibold text-sky-700">{property.price}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">{property.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {property.features.slice(0, 3).map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="text-sm text-slate-500">{property.highlight}</div>
                <button
                  onClick={() => {
                    setSelectedProperty(property);
                    setCurrentPage('dettaglio');
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-sky-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Vedi dettagli <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BenefitsStrip() {
  const items = [
    {
      icon: <KeyRound size={18} className="text-sky-700" />,
      title: 'Accoglienza semplice e diretta',
      text: 'Comunicazione immediata con la struttura per verificare disponibilità, dettagli e condizioni del soggiorno.',
    },
    {
      icon: <Sparkles size={18} className="text-sky-700" />,
      title: 'Ambienti scelti con cura',
      text: 'Soluzioni pensate per offrire comfort, pulizia, ordine e una permanenza piacevole in ogni stagione.',
    },
    {
      icon: <Waves size={18} className="text-sky-700" />,
      title: 'Località strategiche',
      text: 'Mare, città e relax: proposte selezionate in contesti ideali per turismo, lavoro o brevi fughe.',
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              {item.icon}
              {item.title}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-[32px] bg-sky-900 p-8 text-white shadow-xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">Esperienza di soggiorno</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Ogni struttura è pensata per far sentire l’ospite a proprio agio fin dal primo momento.
          </h2>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-1 text-sky-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
          <p className="mt-4 leading-relaxed text-slate-200">
            “Proponiamo soluzioni selezionate per chi desidera un soggiorno comodo, ben organizzato e
            gestito con attenzione. Dalla richiesta iniziale all’arrivo in struttura, l’obiettivo è
            offrire un’esperienza chiara, serena e piacevole.”
          </p>
          <p className="mt-4 text-sm text-slate-400">Comfort, disponibilità e cura dei dettagli</p>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setCurrentPage, setSelectedProperty }) {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <BenefitsStrip />
      <FeaturedProperties setCurrentPage={setCurrentPage} setSelectedProperty={setSelectedProperty} />
      <TestimonialSection />
    </>
  );
}

function PropertiesPage({ setCurrentPage, setSelectedProperty }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Catalogo"
        title="Le nostre strutture"
        text="Una selezione di appartamenti, suite e ville pensata per offrire soluzioni adatte a esigenze diverse, sempre con attenzione a comfort, posizione e qualità dell’accoglienza."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <img src={property.image} alt={property.name} className="h-64 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">{property.name}</h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={14} /> {property.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{property.description}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-3 text-center">
                  <Users size={16} className="mx-auto mb-1 text-slate-700" />
                  {property.guests} ospiti
                </div>
                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-3 text-center">
                  <BedDouble size={16} className="mx-auto mb-1 text-slate-700" />
                  {property.beds} letti
                </div>
                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-3 text-center">
                  <Bath size={16} className="mx-auto mb-1 text-slate-700" />
                  {property.baths} bagni
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">{property.price}</span>
                <button
                  onClick={() => {
                    setSelectedProperty(property);
                    setCurrentPage('dettaglio');
                  }}
                  className="rounded-2xl bg-sky-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Apri scheda
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function PropertyDetailPage({ property, setCurrentPage }) {
  const selected = property || properties[0];

  const amenityIcons = {
    'Wi‑Fi': <Wifi size={16} />,
    'Cucina attrezzata': <Coffee size={16} />,
    Balcone: <Home size={16} />,
    'Parcheggio vicino': <Car size={16} />,
    'Self check-in': <ShieldCheck size={16} />,
    'Aria condizionata': <Home size={16} />,
    'Smart TV': <Star size={16} />,
    'Posizione centrale': <MapPin size={16} />,
    'Giardino privato': <Home size={16} />,
    'Zona relax': <Coffee size={16} />,
    'Cucina completa': <Coffee size={16} />,
    'Spazi ampi': <Users size={16} />,
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <button
        onClick={() => setCurrentPage('proprieta')}
        className="mb-6 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        ← Torna alle proprietà
      </button>

      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <img src={selected.image} alt={selected.name} className="h-[460px] w-full rounded-[32px] object-cover shadow-lg" />

          <div className="mt-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Scheda proprietà</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{selected.name}</h1>
                <p className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={16} /> {selected.location}
                </p>
              </div>
              <div className="rounded-[24px] bg-sky-900 px-5 py-4 text-white shadow-sm">
                <div className="text-sm text-slate-300">Tariffa indicativa</div>
                <div className="mt-1 text-2xl font-bold">{selected.price}</div>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-600">{selected.longDescription}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">Ospiti</div>
                <div className="mt-1 text-2xl font-bold text-slate-900">{selected.guests}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">Letti</div>
                <div className="mt-1 text-2xl font-bold text-slate-900">{selected.beds}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">Bagni</div>
                <div className="mt-1 text-2xl font-bold text-slate-900">{selected.baths}</div>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Servizi inclusi</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {selected.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <span className="text-sky-700">{amenityIcons[feature] || <Star size={16} />}</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="sticky top-24 rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl md:p-7">
          <h3 className="text-2xl font-bold text-slate-900">Richiedi disponibilità</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Compila il modulo per ricevere informazioni sulla struttura, periodi disponibili e
            condizioni del soggiorno.
          </p>

          <form className="mt-6 flex flex-col gap-3">
            <input
              placeholder="Nome e cognome"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
            />
            <input
              placeholder="Email"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
            />
            <input
              placeholder="Telefono"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Check-in"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
              />
              <input
                placeholder="Check-out"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
              />
            </div>
            <textarea
              placeholder="Messaggio"
              className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
            />
            <button
              type="button"
              className="mt-2 rounded-2xl bg-sky-600 p-3 font-semibold text-white transition hover:bg-sky-500"
            >
              Invia richiesta
            </button>
          </form>

          <div className="mt-6 rounded-[24px] border border-sky-100 bg-sky-50 p-5 text-sm text-slate-600">
            <div className="font-semibold text-slate-900">Contatto diretto</div>
            <div className="mt-3 flex items-center gap-2">
              <Phone size={15} /> +39 333 123 4567
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Mail size={15} /> info@esempio.it
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function ServicesPage({ setCurrentPage }) {
  const services = [
    {
      title: 'Soggiorni brevi in strutture selezionate',
      text: 'Una proposta pensata per chi desidera trascorrere qualche giorno in ambienti accoglienti, ben presentati e facili da raggiungere.',
    },
    {
      title: 'Contatto diretto e assistenza rapida',
      text: 'Ogni richiesta viene gestita in modo semplice e personale, per offrire risposte chiare su disponibilità, soggiorno e organizzazione dell’arrivo.',
    },
    {
      title: 'Comfort essenziale e ambienti curati',
      text: 'Le strutture sono presentate in modo trasparente, con descrizioni chiare e attenzione ai dettagli più importanti per l’ospite.',
    },
    {
      title: 'Soluzioni adatte a esigenze diverse',
      text: 'Dal weekend romantico al soggiorno in famiglia, ogni immobile risponde a bisogni differenti con stile, praticità e flessibilità.',
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Servizi"
        title="Un’ospitalità pensata per essere semplice, piacevole e affidabile"
        text="Il progetto è orientato a valorizzare le strutture e a rendere il primo contatto con l’ospite chiaro, diretto e professionale."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{service.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[32px] bg-sky-900 p-8 text-white shadow-xl md:p-10">
        <h3 className="text-2xl font-bold md:text-3xl">Prenota il tuo soggiorno con semplicità</h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
          Che si tratti di un breve weekend, di una trasferta o di una vacanza più rilassante, il
          nostro obiettivo è offrire strutture ben presentate, contatto diretto e un’esperienza di
          prenotazione chiara fin dal primo messaggio.
        </p>
        <button
          onClick={() => setCurrentPage('contatti')}
          className="mt-6 rounded-2xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
        >
          Contattaci ora
        </button>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Chi siamo"
        title="Ospitalità, attenzione e cura dell’esperienza"
        text="Crediamo in un modo semplice ma professionale di accogliere: ambienti piacevoli, informazioni chiare e disponibilità reale verso chi sceglie di soggiornare nelle nostre strutture."
      />

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            Una proposta pensata per far sentire l’ospite al posto giusto
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600">
            Ogni struttura viene presentata con chiarezza per trasmettere fiducia, ordine e qualità.
            L’obiettivo è rendere semplice la scelta, facilitare il contatto e offrire fin da subito
            una percezione positiva dell’esperienza di soggiorno.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Accoglienza diretta e disponibile',
              'Strutture curate e ben presentate',
              'Comunicazione chiara e veloce',
              'Esperienza ottimizzata anche da mobile',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
            alt="Accoglienza struttura"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contatti"
        title="Richiedi informazioni o verifica la disponibilità"
        text="Per conoscere periodi disponibili, dettagli sul soggiorno o ricevere una proposta personalizzata, è possibile contattarci direttamente in modo semplice e veloce."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] bg-sky-900 p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold">Contatto rapido</h3>
          <p className="mt-4 leading-relaxed text-slate-300">
            Siamo disponibili per fornire informazioni sulle strutture, aiutare nella scelta della
            soluzione più adatta e rispondere rapidamente alle richieste di soggiorno.
          </p>

          <div className="mt-8 space-y-4 text-slate-200">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-sky-400" /> +39 333 123 4567
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-sky-400" /> info@esempio.it
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-sky-400" /> Toscana, Italia
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="text-sky-400" /> Assistenza rapida via WhatsApp
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
            Una comunicazione semplice e diretta per organizzare il soggiorno con maggiore serenità e
            senza passaggi inutili.
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                placeholder="Nome"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
              />
              <input
                placeholder="Cognome"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
              />
            </div>
            <input
              placeholder="Email"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
            />
            <input
              placeholder="Telefono"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                placeholder="Data arrivo"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
              />
              <input
                placeholder="Data partenza"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
              />
            </div>
            <textarea
              placeholder="Messaggio"
              className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600"
            />
            <button
              type="button"
              className="rounded-2xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
            >
              Invia richiesta
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:px-8">
        <div>
          <div className="text-base font-bold text-slate-900">Residenze Toscana</div>
          <p className="mt-2 max-w-md">
            Soggiorni brevi in strutture selezionate, con un’esperienza semplice, curata e pensata
            per mettere l’ospite a proprio agio fin dal primo contatto.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setCurrentPage(item.id)} className="hover:text-slate-900">
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  const page = useMemo(() => {
    if (currentPage === 'home') {
      return <HomePage setCurrentPage={setCurrentPage} setSelectedProperty={setSelectedProperty} />;
    }
    if (currentPage === 'proprieta') {
      return <PropertiesPage setCurrentPage={setCurrentPage} setSelectedProperty={setSelectedProperty} />;
    }
    if (currentPage === 'dettaglio') {
      return <PropertyDetailPage property={selectedProperty} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage === 'servizi') {
      return <ServicesPage setCurrentPage={setCurrentPage} />;
    }
    if (currentPage === 'chi-siamo') {
      return <AboutPage />;
    }
    if (currentPage === 'contatti') {
      return <ContactPage />;
    }
    return <HomePage setCurrentPage={setCurrentPage} setSelectedProperty={setSelectedProperty} />;
  }, [currentPage, selectedProperty]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {page}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
