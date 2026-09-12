import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Gauge,
  MapPin,
  Orbit,
  Radio,
  Route as RouteIcon,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Destination = {
  code: string;
  name: string;
  location: string;
  alignment: string;
  status: string;
  rate: string;
  heroImage: string;
  galleryImage: string;
  heroAlt: string;
  galleryAlt: string;
  intro: string;
  statement: string;
  description: string;
  gravity: string;
  atmosphere: string;
  transit: string;
  transitTime: string;
  windows: string[];
  parties: string[];
  experiences: Array<{ number: string; title: string; text: string }>;
  habitats: Array<{ name: string; rate: string; detail: string }>;
  itinerary: Array<{ time: string; title: string; detail: string }>;
};

function BookingField({ label, value, onValueChange, items }: { label: string; value: string; onValueChange: (value: string) => void; items: string[] }) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="h-12 rounded-md border-border/70 bg-background/65 px-4 text-sm font-medium shadow-none backdrop-blur-xl focus:ring-1 focus:ring-ring">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="border-border bg-popover/95 backdrop-blur-xl">
          {items.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
        </SelectContent>
      </Select>
    </label>
  );
}

export function DestinationHub({ destination }: { destination: Destination }) {
  const [window, setWindow] = useState(destination.windows[0]);
  const [habitat, setHabitat] = useState(destination.habitats[0].name);
  const [party, setParty] = useState(destination.parties[0]);
  const [confirmed, setConfirmed] = useState(false);
  const selectedHabitat = useMemo(
    () => destination.habitats.find((item) => item.name === habitat) ?? destination.habitats[0],
    [destination.habitats, habitat],
  );

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="destination-hero relative min-h-[92svh] overflow-hidden">
        <img src={destination.heroImage} alt={destination.heroAlt} width={1536} height={864} className="absolute inset-0 h-full w-full object-cover" />
        <div className="destination-vignette absolute inset-0" />
        <div className="scanlines absolute inset-0 opacity-15" />

        <header className="relative z-30 mx-auto max-w-[1380px] px-4 pt-4 sm:px-6 sm:pt-6">
          <div className="crystal flex h-14 items-center justify-between gap-4 rounded-md px-3 sm:px-4">
            <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Return to Neo-Cydonia home">
              <span className="brand-mark grid size-8 shrink-0 place-items-center rounded-sm font-display text-xs font-extrabold">NC</span>
              <span className="truncate font-display text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">Neo-Cydonia</span>
            </Link>
            <div className="hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:flex">
              <i className="status-dot" /> {destination.status}
            </div>
            <Link to="/" className="inline-flex h-9 items-center gap-2 rounded-full border border-foreground/25 bg-background/15 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] backdrop-blur-md transition-colors hover:bg-foreground/10 sm:px-4">
              <ArrowLeft className="size-3.5" /> <span className="hidden sm:inline">All destinations</span><span className="sm:hidden">Back</span>
            </Link>
          </div>
        </header>

        <div className="relative z-20 mx-auto flex min-h-[calc(92svh-80px)] max-w-[1380px] flex-col justify-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:justify-center">
          <div className="max-w-5xl">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan">
              <span className="h-px w-8 bg-cyan/60" /> {destination.code} · {destination.location}
            </div>
            <h1 className="max-w-5xl font-display text-[clamp(2.55rem,7vw,6.6rem)] font-extrabold uppercase leading-[0.9] tracking-[0] [text-shadow:0_5px_40px_var(--shadow-deep)]">
              {destination.name}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-foreground/80 sm:text-base">{destination.intro}</p>
          </div>

          <div className="crystal mt-8 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-md sm:grid-cols-4">
            {[
              ["Alignment", destination.alignment],
              ["Gravity", destination.gravity],
              ["Transit", destination.transitTime],
              ["From", `${destination.rate} CR`],
            ].map(([label, value]) => (
              <div key={label} className="min-h-20 bg-background/25 p-4">
                <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                <p className="mt-2 font-display text-sm font-bold sm:text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/35 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.35fr] lg:items-start">
          <div>
            <p className="section-kicker">01 · Field notes</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">{destination.statement}</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">{destination.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="metric"><span>Pressure</span><strong>{destination.atmosphere}</strong></div>
              <div className="metric"><span>Body load</span><strong>{destination.gravity}</strong></div>
            </div>
          </div>
          <figure className="overflow-hidden rounded-md border border-border bg-card">
            <img src={destination.galleryImage} alt={destination.galleryAlt} width={1536} height={864} loading="lazy" className="aspect-[16/10] h-full w-full object-cover" />
            <figcaption className="flex items-center justify-between gap-4 border-t border-border px-4 py-3 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>Visual record · {destination.code}</span><span className="text-cyan">Live feed</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-border pb-7 md:flex-row md:items-end">
            <div><p className="section-kicker">02 · Signature moments</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Only possible here.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Three rituals calibrated to this location, this orbit, and this exact alignment.</p>
          </div>
          <div className="grid border-l border-t border-border md:grid-cols-3">
            {destination.experiences.map((experience) => (
              <article key={experience.number} className="min-h-64 border-b border-r border-border p-6 transition-colors hover:bg-secondary/40 sm:p-8">
                <div className="flex items-center justify-between"><span className="font-display text-xs text-primary">{experience.number}</span><Sparkles className="size-4 text-gold" /></div>
                <h3 className="mt-16 font-display text-xl font-bold">{experience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{experience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/35 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.75fr_1.5fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="section-kicker">03 · Private quarters</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Choose your altitude.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Every habitat includes pressure matching, personal atmosphere, and direct concierge access.</p>
          </div>
          <div className="border-t border-border">
            {destination.habitats.map((item, index) => (
              <button key={item.name} type="button" onClick={() => { setHabitat(item.name); setConfirmed(false); }} className="grid w-full gap-4 border-b border-border px-2 py-6 text-left transition-colors hover:bg-background/35 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-4">
                <span className="font-display text-sm text-muted-foreground">0{index + 1}</span>
                <span><span className="font-display text-lg font-bold">{item.name}</span><span className="mt-2 block text-xs text-muted-foreground">{item.detail}</span></span>
                <span className="flex items-center justify-between gap-4 sm:block sm:text-right"><span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Per cycle</span><span className="block font-display text-2xl font-bold">{item.rate} <small className="text-[9px] text-muted-foreground">CR</small></span></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="section-kicker">04 · Passage</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">The route is part of the stay.</h2>
            <div className="mt-8 flex gap-4 border-l border-primary/60 pl-5">
              <RouteIcon className="mt-1 size-5 shrink-0 text-primary" />
              <div><p className="font-display text-lg font-bold">{destination.transit}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Private transfer from Elysium Gate. Cabin pressure and gravity are tuned before arrival.</p></div>
            </div>
          </div>
          <ol className="border-t border-border">
            {destination.itinerary.map((item) => (
              <li key={item.time} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-border py-5">
                <span className="font-display text-xs font-bold text-cyan">{item.time}</span>
                <span><strong className="font-display text-sm">{item.title}</strong><span className="mt-1 block text-xs leading-5 text-muted-foreground">{item.detail}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative border-t border-border bg-secondary/35 px-4 py-20 sm:px-6 sm:py-28">
        <div className="timeline-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-[1040px]">
          <div className="text-center"><p className="section-kicker">05 · Reserve alignment</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Synchronize your arrival.</h2></div>
          <div className="crystal mt-10 rounded-md p-5 sm:p-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div><div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="size-4 text-primary" /> Arrival window</div><BookingField label="Astro-cycle" value={window} onValueChange={(value) => { setWindow(value); setConfirmed(false); }} items={destination.windows} /></div>
              <div><div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><Orbit className="size-4 text-primary" /> Private quarters</div><BookingField label="Habitat" value={habitat} onValueChange={(value) => { setHabitat(value); setConfirmed(false); }} items={destination.habitats.map((item) => item.name)} /></div>
              <div><div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><Users className="size-4 text-primary" /> Manifest</div><BookingField label="Traveling party" value={party} onValueChange={(value) => { setParty(value); setConfirmed(false); }} items={destination.parties} /></div>
            </div>
            <div className="mt-7 flex flex-col justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3"><div className="grid size-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary"><Gauge /></div><div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Provisional rate</p><p className="mt-1 font-display font-bold">{selectedHabitat.rate} CR · {party}</p></div></div>
              <Button type="button" onClick={() => setConfirmed(true)} className="h-11 rounded-md px-6 font-display text-xs font-bold uppercase tracking-[0.12em]">{confirmed ? <><Check /> Alignment held</> : <>Hold this itinerary <ArrowRight /></>}</Button>
            </div>
            {confirmed && <div role="status" className="mt-5 flex items-start gap-3 rounded-md border border-cyan/30 bg-cyan/10 p-4 text-xs leading-5"><Radio className="mt-0.5 size-4 shrink-0 text-cyan" /><span>{destination.name} is provisionally held for {window}. Your concierge signal is ready.</span></div>}
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 sm:px-6"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row"><Link to="/" className="font-display font-bold text-foreground">Neo-Cydonia Escapes</Link><span>{destination.code} · {destination.status}</span><span>© 2941 NCX</span></div></footer>
    </main>
  );
}
