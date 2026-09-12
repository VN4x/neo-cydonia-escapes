import { useMemo, useState } from "react";
import { ArrowRight, Bitcoin, Check, Minus, Plus, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const destinations = [
  { name: "Hellas Sound-Dome", base: 0.9, slug: "hellas-sound-dome" },
  { name: "Olympus Caldera Oasis", base: 4.1, slug: "olympus-caldera-oasis" },
  { name: "Ishtar-Sothis Air-Cruiser", base: 18.5, slug: "ishtar-sothis-air-cruiser" },
] as const;

const cycles = [
  { name: "Open cycle · off-alignment", factor: 0.72 },
  { name: "Sirian Heliacal Awakening", factor: 1.0 },
  { name: "Venusian Morning Star", factor: 1.35 },
  { name: "Galactic Gate Overlap", factor: 2.4 },
] as const;

const gravities = [
  { name: "Martian native · 0.38G", factor: 1.0 },
  { name: "Earth-weight · 1.0G", factor: 1.28 },
  { name: "Absolute Zero-G float", factor: 1.55 },
] as const;

const currencies = [
  { code: "CR", label: "Crypto-Credit", rate: 1, discount: 0.08 },
  { code: "MRS", label: "MarsCoin", rate: 3.4, discount: 0.05 },
  { code: "SOL-X", label: "Solari-X", rate: 128.5, discount: 0.03 },
] as const;

function pick<T extends { name: string }>(items: readonly T[], name: string) {
  return items.find((item) => item.name === name) ?? items[0];
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className={muted ? "text-muted-foreground" : "font-display font-bold text-foreground"}>{value}</span>
    </div>
  );
}

function Stepper({ label, value, onChange, min, max }: { label: string; value: number; onChange: (value: number) => void; min: number; max: number }) {
  return (
    <div>
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="flex h-12 items-center justify-between rounded-md border border-border/70 bg-background/60 px-2 backdrop-blur-xl">
        <Button type="button" variant="ghost" size="icon" aria-label={`Decrease ${label}`} disabled={value <= min} onClick={() => onChange(Math.max(min, value - 1))} className="size-8">
          <Minus className="size-4" />
        </Button>
        <span className="font-display text-sm font-bold">{value}</span>
        <Button type="button" variant="ghost" size="icon" aria-label={`Increase ${label}`} disabled={value >= max} onClick={() => onChange(Math.min(max, value + 1))} className="size-8">
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  );
}

function Field({ label, value, onValueChange, items }: { label: string; value: string; onValueChange: (value: string) => void; items: readonly string[] }) {
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

export function PricingCalculator() {
  const [destination, setDestination] = useState<string>(destinations[1].name);
  const [cycle, setCycle] = useState<string>(cycles[2].name);
  const [gravity, setGravity] = useState<string>(gravities[0].name);
  const [nights, setNights] = useState(4);
  const [travelers, setTravelers] = useState(2);
  const [currency, setCurrency] = useState<string>(currencies[0].code);
  const [payWithCrypto, setPayWithCrypto] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  const quote = useMemo(() => {
    const dest = pick(destinations, destination);
    const cyc = pick(cycles, cycle);
    const grav = pick(gravities, gravity);
    const cur = currencies.find((item) => item.code === currency) ?? currencies[0];

    const habitat = dest.base * cyc.factor * grav.factor * nights;
    const transit = dest.base * 0.45 * travelers * cyc.factor;
    const lifeSupport = 0.06 * travelers * nights;
    const subtotal = habitat + transit + lifeSupport;
    const discount = payWithCrypto ? subtotal * cur.discount : 0;
    const total = (subtotal - discount) * cur.rate;

    return { dest, cur, habitat, transit, lifeSupport, subtotal, discount, total, perTraveler: total / travelers };
  }, [destination, cycle, gravity, nights, travelers, currency, payWithCrypto]);

  const fmt = (value: number) => value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section id="pricing" className="border-y border-border bg-secondary/35 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border/60 pb-7 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">04 · Fare matrix</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">Price your escape to the credit.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Alignment demand, gravity calibration, and orbit distance all move the fare. Settle in crypto for an instant ledger discount.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="crystal rounded-md p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Destination" value={destination} onValueChange={(value) => { setDestination(value); setConfirmed(false); }} items={destinations.map((item) => item.name)} />
              <Field label="Astro-Cycle" value={cycle} onValueChange={(value) => { setCycle(value); setConfirmed(false); }} items={cycles.map((item) => item.name)} />
              <Field label="Gravity preference" value={gravity} onValueChange={(value) => { setGravity(value); setConfirmed(false); }} items={gravities.map((item) => item.name)} />
              <Field label="Settlement currency" value={currency} onValueChange={setCurrency} items={currencies.map((item) => item.code)} />
              <Stepper label="Nights" value={nights} onChange={(value) => { setNights(value); setConfirmed(false); }} min={1} max={30} />
              <Stepper label="Travelers" value={travelers} onChange={(value) => { setTravelers(value); setConfirmed(false); }} min={1} max={12} />
            </div>

            <button
              type="button"
              aria-pressed={payWithCrypto}
              onClick={() => setPayWithCrypto((value) => !value)}
              className={`mt-5 flex w-full items-center gap-4 rounded-md border p-4 text-left transition-colors ${payWithCrypto ? "border-cyan/40 bg-cyan/10" : "border-border bg-background/40 hover:border-primary/50"}`}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-md ${payWithCrypto ? "bg-cyan/20 text-cyan" : "bg-secondary text-muted-foreground"}`}>
                {payWithCrypto ? <Bitcoin className="size-5" /> : <Wallet className="size-5" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-sm font-bold">Pay with crypto ledger</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {payWithCrypto
                    ? `${Math.round((quote.cur.discount) * 100)}% off when settled in ${quote.cur.label}.`
                    : "Switch on to settle instantly and unlock the ledger discount."}
                </span>
              </span>
              <span className={payWithCrypto ? "status-dot" : "size-1.5 rounded-full bg-muted-foreground"} />
            </button>
          </div>

          <div className="crystal flex flex-col rounded-md p-5 sm:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Estimated total</p>
            <p className="mt-3 font-display text-4xl font-extrabold leading-none sm:text-5xl">
              {fmt(quote.total)} <small className="text-xs font-medium text-muted-foreground">{quote.cur.code}</small>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{fmt(quote.perTraveler)} {quote.cur.code} per traveler · {nights} night{nights > 1 ? "s" : ""}</p>

            <div className="mt-6 space-y-3 border-t border-border pt-5">
              <Row label={`Habitat · ${quote.dest.name}`} value={`${fmt(quote.habitat)} CR`} />
              <Row label="Orbital transit" value={`${fmt(quote.transit)} CR`} />
              <Row label="Life support & shielding" value={`${fmt(quote.lifeSupport)} CR`} />
              <Row label="Subtotal" value={`${fmt(quote.subtotal)} CR`} muted />
              <Row label={payWithCrypto ? `Crypto ledger discount` : "No discount applied"} value={payWithCrypto ? `−${fmt(quote.discount)} CR` : "0.00 CR"} />
            </div>

            <Button type="button" onClick={() => setConfirmed(true)} className="mt-7 h-12 rounded-md font-display text-xs font-bold uppercase tracking-[0.12em]">
              {confirmed ? <><Check /> Fare reserved</> : <>Reserve this fare <ArrowRight /></>}
            </Button>
            {confirmed && (
              <div role="status" className="mt-4 rounded-md border border-cyan/30 bg-cyan/10 p-4 text-xs text-foreground">
                Fare held for one Martian sol. Settle in {quote.cur.label} to confirm your berth.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
