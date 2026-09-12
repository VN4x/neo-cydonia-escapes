# Destination Hubs

## Goal
Turn the three featured destinations into immersive, bookable hub pages while preserving the cinematic Neo-Cydonia visual system.

## Build
- Create dedicated hubs for **Hellas Sound-Dome**, **Olympus Caldera Oasis**, and **Ishtar-Sothis Air-Cruiser**.
- Make every destination card on the homepage open its matching hub through normal site navigation.
- Give each hub a full-bleed cinematic opening scene, live destination status, alignment window, starting rate, and a clear return path to Neo-Cydonia.
- Add distinct editorial sections for the destination experience, signature moments, habitat options, transit route, environmental/gravity profile, and a compact itinerary summary.
- Add working selectors for travel window, habitat, and party size, with a booking action that visibly confirms the selected itinerary.
- Reuse the established obsidian, Martian rust, gold, cyan, glass, typography, and restrained motion language while giving each location its own atmosphere.
- Generate additional local destination imagery where needed so the hubs feel like complete worlds rather than enlarged homepage cards.
- Keep the pages fully usable on mobile and desktop, with reduced-motion and accessible interaction states.

## Page Direction
- **Hellas Sound-Dome:** energetic, architectural, performance-led; Sirian light, amphitheater scale, communal luxury.
- **Olympus Caldera Oasis:** quiet, restorative, water-and-stone luxury; heated sky pool, bio-spa, low-gravity calm.
- **Ishtar-Sothis Air-Cruiser:** rarefied, mobile, panoramic; private atmospheric yacht, Crown Deck, Earth-view salon.

## Technical Details
- Add three shareable TanStack routes under `/destinations/...`, each with unique title, description, Open Graph, and Twitter metadata.
- Use a shared destination data model and reusable presentation pieces so content stays consistent without making the hubs look identical.
- Update homepage cards to use typed links and add an explicit destination call to action.
- Keep booking state front-end only for this phase; no account, payment, or persistent reservation system will be added.
- Verify all three routes, homepage navigation, booking confirmations, image loading, overflow, and layout at desktop and mobile sizes.
