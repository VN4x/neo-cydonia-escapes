import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

type Region = {
  id: string;
  name: string;
  slug: "hellas-sound-dome" | "olympus-caldera-oasis" | "ishtar-sothis-air-cruiser";
  coords: string;
  blurb: string;
  transit: string;
  x: number;
  y: number;
};

const regions: Region[] = [
  {
    id: "hellas",
    name: "Hellas Basin",
    slug: "hellas-sound-dome",
    coords: "42.4°S · 70.5°E · −7,152 m",
    blurb: "Deepest air pressure on Mars — home of the Sound-Dome amphitheater festivals.",
    transit: "Solar-Sail Sub-Orbital Shuttle · 40 min",
    x: 72,
    y: 68,
  },
  {
    id: "olympus",
    name: "Olympus Caldera",
    slug: "olympus-caldera-oasis",
    coords: "18.6°N · 226.2°E · +21,900 m",
    blurb: "Five-mile heated sky pool inside the summit caldera of the tallest volcano known.",
    transit: "Valles Marineris Mag-Lev Sleeper · 6 h",
    x: 26,
    y: 34,
  },
  {
    id: "tharsis",
    name: "Tharsis Plateau",
    slug: "ishtar-sothis-air-cruiser",
    coords: "2.0°N · 250.0°E · +10,400 m",
    blurb: "Launch shelf for the Ishtar-Sothis air-cruiser and its Earth-view crown deck.",
    transit: "Autonomous Exo-Atmospheric Yacht · continuous",
    x: 42,
    y: 50,
  },
];

export function MarsMap() {
  const [activeId, setActiveId] = useState(regions[0].id);
  const active = regions.find((region) => region.id === activeId) ?? regions[0];

  return (
    <section id="map" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border/60 pb-7 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">05 · Surface atlas</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">Navigate the Martian surface.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Select a landmark to read its transit corridor, then drop straight into the destination hub.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="crystal relative overflow-hidden rounded-md p-3 sm:p-5">
            <svg viewBox="0 0 100 72" role="img" aria-label="Simplified relief map of Mars with three selectable landmarks" className="h-auto w-full">
              <defs>
                <radialGradient id="mars-surface" cx="45%" cy="35%" r="80%">
                  <stop offset="0%" stopColor="hsl(18 62% 34%)" />
                  <stop offset="60%" stopColor="hsl(14 48% 22%)" />
                  <stop offset="100%" stopColor="hsl(10 40% 13%)" />
                </radialGradient>
              </defs>
              <rect width="100" height="72" fill="url(#mars-surface)" rx="2" />
              <g stroke="currentColor" className="text-foreground/10" strokeWidth="0.2">
                {[12, 24, 36, 48, 60].map((y) => <line key={y} x1="0" y1={y} x2="100" y2={y} />)}
                {[20, 40, 60, 80].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="72" />)}
              </g>
              <ellipse cx="72" cy="68" rx="24" ry="12" fill="hsl(8 45% 16%)" opacity="0.85" />
              <ellipse cx="26" cy="34" rx="11" ry="9" fill="hsl(28 55% 40%)" opacity="0.5" />
              <ellipse cx="44" cy="50" rx="20" ry="10" fill="hsl(24 50% 33%)" opacity="0.45" />
              <path d="M52 44 L84 40" stroke="hsl(20 35% 12%)" strokeWidth="1.6" opacity="0.7" strokeLinecap="round" />

              {regions.map((region) => {
                const isActive = region.id === active.id;
                return (
                  <g key={region.id} className={isActive ? "text-cyan" : "text-foreground/70"}>
                    {isActive && <circle cx={region.x} cy={region.y} r="4.6" fill="currentColor" opacity="0.18" />}
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r="2"
                      fill="currentColor"
                      stroke="hsl(0 0% 100% / 0.5)"
                      strokeWidth="0.3"
                    />
                    <text x={region.x + 3.4} y={region.y + 1} fontSize="2.6" fill="currentColor" className="font-semibold uppercase">
                      {region.name}
                    </text>
                  </g>
                );
              })}

              {regions.map((region) => (
                <circle
                  key={`${region.id}-hit`}
                  cx={region.x}
                  cy={region.y}
                  r="5"
                  fill="transparent"
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${region.name}`}
                  className="cursor-pointer outline-none focus-visible:stroke-cyan"
                  strokeWidth="0.5"
                  onClick={() => setActiveId(region.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveId(region.id);
                    }
                  }}
                />
              ))}
            </svg>
            <div className="scanlines pointer-events-none absolute inset-0 opacity-15" />
          </div>

          <div className="flex flex-col gap-3">
            {regions.map((region) => {
              const isActive = region.id === active.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveId(region.id)}
                  className={`rounded-md border p-4 text-left transition-colors ${isActive ? "border-cyan/40 bg-cyan/10" : "border-border bg-card hover:border-primary/50"}`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className={`size-4 ${isActive ? "text-cyan" : "text-primary"}`} />
                    <h3 className="font-display text-base font-bold">{region.name}</h3>
                  </div>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{region.coords}</p>
                  {isActive && (
                    <>
                      <p className="mt-3 text-xs leading-5 text-muted-foreground">{region.blurb}</p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-gold">{region.transit}</p>
                    </>
                  )}
                </button>
              );
            })}
            <Link
              to="/destinations/$slug"
              params={{ slug: active.slug }}
              className="flex h-12 items-center justify-between rounded-md border border-border px-4 font-display text-[10px] font-bold uppercase tracking-[0.14em] transition-colors hover:border-primary/60 hover:text-primary"
            >
              Open {active.name} hub <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
