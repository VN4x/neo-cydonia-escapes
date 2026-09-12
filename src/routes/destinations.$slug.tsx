import { createFileRoute, notFound } from "@tanstack/react-router";

import { DestinationHub } from "@/components/destination-hub";
import { hellasDestination, ishtarDestination, olympusDestination } from "@/lib/destinations";

const destinations = {
  "hellas-sound-dome": hellasDestination,
  "olympus-caldera-oasis": olympusDestination,
  "ishtar-sothis-air-cruiser": ishtarDestination,
} as const;

type DestinationSlug = keyof typeof destinations;

function isDestinationSlug(slug: string): slug is DestinationSlug {
  return slug in destinations;
}

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    if (!isDestinationSlug(params.slug)) throw notFound();
    return { destination: destinations[params.slug] };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Destination unavailable | Neo-Cydonia" }, { name: "robots", content: "noindex" }] };
    }
    const { destination } = loaderData;
    const description = `${destination.intro} Explore habitats, transit, signature experiences, and alignment windows.`;
    return {
      meta: [
        { title: `${destination.name} | Neo-Cydonia Escapes` },
        { name: "description", content: description },
        { property: "og:title", content: `${destination.name} | Neo-Cydonia Escapes` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/destinations/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/destinations/${params.slug}` }],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination } = Route.useLoaderData();
  return <DestinationHub destination={destination} />;
}
