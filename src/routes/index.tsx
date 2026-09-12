import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Gauge, Orbit, Radio, Sparkles, Users } from "lucide-react";

import heroImage from "@/assets/neo-cydonia-hero.jpg";
import soundDomeImage from "@/assets/sirian-sound-dome.jpg";
import olympusImage from "@/assets/olympus-spa.jpg";
import airCruiserImage from "@/assets/ishtar-air-cruiser.jpg";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neo-Cydonia Escapes | Luxury Mars Travel" },
      {
        name: "description",
        content: "Book luxury Mars habitats, orbital transfers, and cosmic-alignment escapes from Elysium Planitia.",
      },
      { property: "og:title", content: "Neo-Cydonia Escapes | Luxury Mars Travel" },
      {
        property: "og:description",
        content: "A premium transit and leisure booking portal for the most auspicious journeys on Mars.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const alignments = [
  {
    code: "SIR-08",
    image: soundDomeImage,
    eyebrow: "Sirian Heliacal Awakening",
    title: "Hellas Sound-Dome",
    vibe: "Peak communal energy and status illumination.",
    best: "Mega-dome parties & amphitheater festivals",
    transit: "Solar-Sail Sub-Orbital Shuttle",
    from: "0.9",
    status: "12 habitats left",
  },
  {
    code: "VEN-21",
    image: olympusImage,
    eyebrow: "Venusian Morning Star",
    title: "Olympus Caldera Oasis",
    vibe: "Sensory restoration in a five-mile heated sky pool.",
    best: "Low-gravity floating & bio-spa retreats",
    transit: "Valles Marineris Mag-Lev Sleeper",
    from: "4.1",
    status: "High demand",
  },
  {
    code: "GATE-∞",
    image: airCruiserImage,
    eyebrow: "Galactic Gate Overlap",
    title: "Ishtar-Sothis Air-Cruiser",
    vibe: "Absolute cosmic fortune above the Tharsis plateau.",
    best: "Atmospheric cruises & legendary milestones",
    transit: "Autonomous Exo-Atmospheric Yacht",
    from: "18.5",
    status: "2 staterooms left",
  },
];

const habitats = [
  {
    name: "Hellas Transit Bunk",
    tuning: "Open-cycle",
    rate: "0.18",
    detail: "Shared pressure suite · 0.38G",
    perk: "Dome floor access + shuttle berth",
  },
  {
    name: "Sound-Dome Penthouse",
    tuning: "Sirian Peak",
    rate: "2.4",
    detail: "Private suite · native gravity",
    perk: "VIP sanctuary + nectar bar",
  },
  {
    name: "Olympus Caldera Spa Suite",
    tuning: "Venus Supreme",
    rate: "4.1",
    detail: "Hydro suite · adaptive gravity",
    perk: "Private 0.38G hydromassage",
  },
  {
    name: "Ishtar-Sothis Crown Deck",
    tuning: "Dual Convergence",
    rate: "48.0",
    detail: "Full deck · simulated 1.0G",
    perk: "Private yacht + Earth-view salon",
  },
];

function Field({ label, value, onValueChange, items }: { label: string; value: string; onValueChange: (value: string) => void; items: string[] }) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="h-12 rounded-md border-border/70 bg-background/60 px-4 text-sm font-medium shadow-none backdrop-blur-xl focus:ring-1 focus:ring-ring">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="border-border bg-popover/95 backdrop-blur-xl">
          {items.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
        </SelectContent>
      </Select>
    </label>
  );
}

function Index() {
  const [cycle, setCycle] = useState("Venusian Morning Star");
  const [gravity, setGravity] = useState("Martian native · 0.38G");
  const [archetype, setArchetype] = useState("Lazy poolside floating");
  const [group, setGroup] = useState("Romantic pair");
  const [launched, setLaunched] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const launch = () => {
    setLaunched(true);
    window.setTimeout(() => document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" }), 120);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="hero-scene relative min-h-[94svh] overflow-hidden">
        <img src={heroImage} alt="Earth and ring-encircled Phobos above Elysium Planitia" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-[52%_center]" />
        <div className="hero-vignette absolute inset-0" />
        <div className="scanlines absolute inset-0 opacity-20" />

        <header className="relative z-30 mx-auto max-w-[1380px] px-4 pt-4 sm:px-6 sm:pt-6">
          <div className="crystal flex h-14 items-center gap-3 rounded-md px-3 sm:gap-5 sm:px-4">
            <a href="#top" aria-label="Neo-Cydonia home" className="flex shrink-0 items-center gap-2.5">
              <span className="brand-mark grid size-8 place-items-center rounded-sm font-display text-xs font-extrabold">NC</span>
              <span className="hidden font-display text-xs font-bold uppercase tracking-[0.18em] sm:block">Neo-Cydonia</span>
            </a>
            <div className="ticker relative min-w-0 flex-1 overflow-hidden border-x border-border/50 py-1">
              <div className="ticker-track flex w-max items-center gap-9 whitespace-nowrap px-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="flex items-center gap-2"><i className="status-dot" /> Elysium corridor open</span>
                <span>23:31 MTC · Phobos azimuth 041°</span><span>Hellas Dome // Olympus Caldera</span><span>∆∷ 7X-12 // Alignment optimal</span>
                <span className="flex items-center gap-2"><i className="status-dot" /> Elysium corridor open</span>
                <span>23:31 MTC · Phobos azimuth 041°</span><span>Hellas Dome // Olympus Caldera</span><span>∆∷ 7X-12 // Alignment optimal</span>
              </div>
            </div>
            <Button type="button" variant="outline" onClick={() => setWalletConnected((value) => !value)} className="h-9 shrink-0 rounded-full border-foreground/25 bg-background/15 px-3 text-[10px] uppercase tracking-[0.12em] backdrop-blur-md hover:bg-foreground/10 sm:px-4">
              <span className={walletConnected ? "status-dot" : "size-1.5 rounded-full bg-muted-foreground"} />
              <span className="hidden sm:inline">{walletConnected ? "Wallet Linked" : "Connect Wallet"}</span>
              <span className="sm:hidden">{walletConnected ? "Linked" : "Connect"}</span>
            </Button>
          </div>
        </header>

        <div id="top" className="relative z-20 mx-auto flex min-h-[calc(94svh-80px)] max-w-[1380px] flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:justify-center lg:pt-28">
          <div className="hero-copy max-w-4xl">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan">
              <span className="h-px w-9 bg-cyan/60" /> Elysium Planitia · Mars
            </div>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.4rem)] font-extrabold uppercase leading-[0.86] tracking-[0] text-foreground [text-shadow:0_5px_40px_var(--shadow-deep)]">
              Neo-Cydonia<br /><span className="text-foreground/80">Escapes</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-foreground/75 sm:text-base">
              Book the exact moment luxury, orbit, and cosmic alignment intersect. Depart the rust. Return recalibrated.
            </p>
          </div>

          <div className="booking-console crystal mt-8 max-w-4xl rounded-md p-3 sm:p-4">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <Field label="Select Astro-Cycle" value={cycle} onValueChange={setCycle} items={["Sirian Heliacal Awakening", "Venusian Morning Star", "Galactic Gate Overlap"]} />
              <Field label="Gravity Preference" value={gravity} onValueChange={setGravity} items={["Martian native · 0.38G", "Earth-weight · 1.0G", "Absolute Zero-G float"]} />
              <Button type="button" onClick={launch} className="launch-button h-12 rounded-md px-6 font-display text-xs font-bold uppercase tracking-[0.12em] md:min-w-48">
                {launched ? <><Check /> Itinerary Locked</> : <>Launch Itinerary <ArrowRight /></>}
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 z-20 w-full border-t border-border/30 bg-background/40 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-3 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Orbital quantum matrix · live</span><span className="hidden sm:inline">Atmosphere 6.1 kPa · Ring luminance 94%</span><span>Scroll ↓</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/35 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border/60 pb-7 md:flex-row md:items-end">
            <div><p className="section-kicker">01 · Current auspicious alignments</p><h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">Choose your window into the extraordinary.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Live availability priced like a terrestrial booking desk—from quick shared berths to private atmospheric yachts.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {alignments.map((item) => (
              <article key={item.code} className="group overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary/60">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={item.image} alt={item.title} width={1200} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-background/50 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm"><span>{item.code}</span><span className="text-cyan">{item.status}</span></div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{item.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.vibe}</p>
                  <dl className="mt-5 space-y-3 border-t border-border pt-4 text-xs">
                    <div><dt className="text-muted-foreground">Best for</dt><dd className="mt-1 text-card-foreground">{item.best}</dd></div>
                    <div><dt className="text-muted-foreground">Transit</dt><dd className="mt-1 text-card-foreground">{item.transit}</dd></div>
                  </dl>
                  <div className="mt-6 flex items-end justify-between"><span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">From / cycle</span><span className="font-display text-2xl font-bold">{item.from} <small className="text-[10px] font-medium text-muted-foreground">CR</small></span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr]">
            <div className="lg:sticky lg:top-24 lg:self-start"><p className="section-kicker">02 · Habitat exchange</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">A room for every orbit.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Every stay includes pressure matching, radiation shielding, and calibrated gravity. Pay only for the level of spectacle you want.</p><div className="mt-8 grid grid-cols-2 gap-3"><div className="metric"><span>From</span><strong>0.18 CR</strong></div><div className="metric"><span>To</span><strong>48.0 CR</strong></div></div></div>
            <div className="border-t border-border">
              {habitats.map((habitat, index) => (
                <div key={habitat.name} className="grid gap-4 border-b border-border py-6 transition-colors hover:bg-secondary/40 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-4">
                  <span className="font-display text-sm text-muted-foreground">0{index + 1}</span>
                  <div><div className="flex flex-wrap items-center gap-3"><h3 className="font-display text-lg font-bold">{habitat.name}</h3><span className="rounded-full border border-border px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-gold">{habitat.tuning}</span></div><p className="mt-2 text-xs text-muted-foreground">{habitat.detail} · {habitat.perk}</p></div>
                  <div className="flex items-center justify-between gap-5 sm:block sm:text-right"><span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Per night</span><p className="font-display text-2xl font-bold">{habitat.rate} <small className="text-[9px] text-muted-foreground">CR</small></p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="relative border-y border-border bg-secondary/35 px-4 py-20 sm:px-6 sm:py-28">
        <div className="timeline-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1040px]">
          <div className="text-center"><p className="section-kicker">03 · Quantum itinerary</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Tune your cosmic timeline.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">Tell the concierge how you travel. The matrix will pair you with the strongest available alignment.</p></div>
          <div className="crystal mt-10 rounded-md p-5 sm:p-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div><div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><Sparkles className="size-4 text-primary" /> Leisure archetype</div><Field label="Experience" value={archetype} onValueChange={setArchetype} items={["Lazy poolside floating", "Mega-dome partying", "Scenic canyon cruising"]} /></div>
              <div><div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><Users className="size-4 text-primary" /> Traveling party</div><Field label="Group size" value={group} onValueChange={setGroup} items={["Solo explorer", "Romantic pair", "Synthetic-cyborg entourage"]} /></div>
              <div><div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><Gauge className="size-4 text-primary" /> Body calibration</div><Field label="Gravity" value={gravity} onValueChange={setGravity} items={["Martian native · 0.38G", "Earth-weight · 1.0G", "Absolute Zero-G float"]} /></div>
            </div>
            <div className="mt-7 flex flex-col justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-md bg-primary/15 text-primary"><Orbit /></div><div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Current best match</p><p className="mt-1 font-display font-bold">{cycle} · {group}</p></div></div>
              <Button type="button" onClick={() => setLaunched(true)} className="h-11 rounded-md px-6 font-display text-xs font-bold uppercase tracking-[0.12em]">Lock private consultation <ArrowRight /></Button>
            </div>
            {launched && <div role="status" className="mt-5 flex items-center gap-3 rounded-md border border-cyan/30 bg-cyan/10 p-4 text-xs text-foreground"><Radio className="size-4 shrink-0 text-cyan" /> Quantum matrix online. Your provisional route is synchronized and ready for review.</div>}
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 sm:px-6"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row"><span className="font-display font-bold text-foreground">Neo-Cydonia Escapes</span><span>Premium transit authority · Elysium Planitia</span><span>© 2941 NCX</span></div></footer>
    </main>
  );
}