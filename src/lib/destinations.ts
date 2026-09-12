import type { Destination } from "@/components/destination-hub";

import hellasHero from "@/assets/sirian-sound-dome.jpg";
import hellasGallery from "@/assets/hellas-amphitheater.jpg";
import olympusHero from "@/assets/olympus-spa.jpg";
import olympusGallery from "@/assets/olympus-sky-pool.jpg";
import ishtarHero from "@/assets/ishtar-air-cruiser.jpg";
import ishtarGallery from "@/assets/ishtar-crown-deck.jpg";

export const hellasDestination: Destination = {
  code: "SIR-08",
  name: "Hellas Sound-Dome",
  location: "Hellas Planitia",
  alignment: "Sirian Awakening",
  status: "12 habitats left",
  rate: "0.9",
  heroImage: hellasHero,
  galleryImage: hellasGallery,
  heroAlt: "Hellas Sound-Dome glowing beneath the Martian sky",
  galleryAlt: "The concentric amphitheater inside Hellas Sound-Dome",
  intro: "A city-sized instrument where Mars hears Sirius rise. Arrive for the resonance; stay for the collective afterglow.",
  statement: "Feel a whole crater breathe in time.",
  description: "Hellas is tuned rather than built. Its pressure-glass shell, basalt resonators, and light architecture turn the planet's deepest basin into an instrument experienced by the entire body.",
  gravity: "0.38G native",
  atmosphere: "6.3 kPa",
  transit: "Solar-Sail Sub-Orbital Shuttle",
  transitTime: "02h 18m",
  windows: ["Sirian Rise · Cycle 08", "Blue Hour · Cycle 09", "Periapsis Encore · Cycle 11"],
  parties: ["Solo listener", "Romantic pair", "Festival circle · 6"],
  experiences: [
    { number: "01", title: "First Light Resonance", text: "Stand beneath the aperture as Sirius activates the dome's lowest harmonic." },
    { number: "02", title: "Basalt Pulse Supper", text: "A seven-course table paced to vibrations moving through the crater wall." },
    { number: "03", title: "Silent Orbit", text: "The entire amphitheater goes dark before one weightless, unamplified finale." },
  ],
  habitats: [
    { name: "Transit Listening Bunk", rate: "0.9", detail: "Shared pressure suite · dome-floor access" },
    { name: "Resonance Gallery", rate: "1.6", detail: "Private balcony · acoustic bathing chamber" },
    { name: "Sound-Dome Penthouse", rate: "2.4", detail: "Aperture view · VIP sanctuary · nectar bar" },
  ],
  itinerary: [
    { time: "17:40", title: "Elysium ascent", detail: "A solar-sail transfer skims the terminator toward Hellas." },
    { time: "20:05", title: "Pressure & pitch", detail: "Body calibration followed by a private acoustic fitting." },
    { time: "23:31", title: "Sirian awakening", detail: "The central aperture opens and the crater enters resonance." },
  ],
};

export const olympusDestination: Destination = {
  code: "VEN-21",
  name: "Olympus Caldera Oasis",
  location: "Olympus Mons",
  alignment: "Venus Morning Star",
  status: "High demand",
  rate: "4.1",
  heroImage: olympusHero,
  galleryImage: olympusGallery,
  heroAlt: "Olympus Caldera Oasis beneath a luminous Martian sky",
  galleryAlt: "Heated mineral pools suspended inside Olympus Caldera",
  intro: "Five miles of warm mineral water at the edge of the solar system's greatest volcano. Float above weather itself.",
  statement: "Stillness, lifted twenty-one kilometers.",
  description: "The oasis captures geothermal heat beneath Olympus Mons and releases it through a sequence of open-air pressure pools. Every sound is softened; every movement is made lighter by native gravity.",
  gravity: "0.38G soft",
  atmosphere: "7.0 kPa",
  transit: "Valles Marineris Mag-Lev Sleeper",
  transitTime: "06h 42m",
  windows: ["Venus Dawn · Cycle 21", "Caldera Blue · Cycle 22", "Solar Quiet · Cycle 24"],
  parties: ["Solo restoration", "Romantic pair", "Private circle · 4"],
  experiences: [
    { number: "01", title: "Dawn Suspension", text: "Float at the caldera rim as Venus clears the copper horizon." },
    { number: "02", title: "Basalt Bio-Spa", text: "Mineral therapy, pressure massage, and adaptive-gravity restoration." },
    { number: "03", title: "Cloudline Table", text: "A private tasting platform above the evening dust inversion." },
  ],
  habitats: [
    { name: "Mineral Alcove", rate: "4.1", detail: "Warm stone suite · shared sky-pool passage" },
    { name: "Caldera Spa Suite", rate: "7.8", detail: "Private hydro room · adaptive gravity" },
    { name: "Aureole Pavilion", rate: "13.6", detail: "Rim-edge residence · private thermal terrace" },
  ],
  itinerary: [
    { time: "19:10", title: "Night-line departure", detail: "Board a silent mag-lev suite through Valles Marineris." },
    { time: "01:52", title: "Caldera arrival", detail: "A low-light transfer completes pressure and thermal acclimation." },
    { time: "05:18", title: "Venus dawn", detail: "Enter the eastern sky pool before first planetary light." },
  ],
};

export const ishtarDestination: Destination = {
  code: "GATE-∞",
  name: "Ishtar-Sothis Air-Cruiser",
  location: "Tharsis Airspace",
  alignment: "Galactic Gate",
  status: "2 staterooms left",
  rate: "18.5",
  heroImage: ishtarHero,
  galleryImage: ishtarGallery,
  heroAlt: "Ishtar-Sothis luxury air-cruiser sailing above Mars",
  galleryAlt: "Islening Floats and Guofge Bar on the panoramic Crown Deck",
  intro: "A private atmospheric yacht tracing the Tharsis crown, with Islening Floats, the Guofge Bar, and Earth always in view.",
  statement: "The horizon moves. You never have to.",
  description: "Ishtar-Sothis follows the night boundary above Tharsis, holding its salons in permanent amber dusk. The Crown Deck pairs near-silent propulsion with uninterrupted planetary views.",
  gravity: "0.38–1.0G",
  atmosphere: "8.2 kPa",
  transit: "Autonomous Exo-Atmospheric Yacht",
  transitTime: "Private lift",
  windows: ["Gate Overlap · Cycle ∞", "Earthrise Arc · Cycle 03", "Tharsis Dusk · Cycle 07"],
  parties: ["Solo patron", "Romantic pair", "Private entourage · 8"],
  experiences: [
    { number: "01", title: "Islening Floats", text: "Sculptural lounge islands drift through a softly modulated gravity field." },
    { number: "02", title: "Guofge Bar", text: "Rare botanical distillates are mixed against a continuous Earthrise." },
    { number: "03", title: "Crown Deck Passage", text: "A private promenade above Arsia, Pavonis, and Ascraeus Mons." },
  ],
  habitats: [
    { name: "Panorama Stateroom", rate: "18.5", detail: "Full-height glass · personalized gravity" },
    { name: "Islening Float Suite", rate: "29.0", detail: "Floating salon · private Guofge service" },
    { name: "Crown Deck Residence", rate: "48.0", detail: "Full deck · Earth-view salon · private yacht tender" },
  ],
  itinerary: [
    { time: "21:00", title: "Vertical rendezvous", detail: "A private lift meets the cruiser above Elysium airspace." },
    { time: "22:20", title: "Guofge service", detail: "Your first pour is timed to Earth clearing the Tharsis ridge." },
    { time: "00:∞", title: "Gate overlap", detail: "The Crown Deck enters its rare dual-convergence trajectory." },
  ],
};
