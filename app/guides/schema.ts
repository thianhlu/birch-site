import { SITE } from "../site";
import { APP } from "../components/Chrome";
import { GUIDES, GUIDES_INDEX, plain, type Guide } from "./data";
import { PATTERNS } from "./patterns";

const org = {
  "@type": "Organization",
  "@id": `${SITE}/#org`,
  name: "Tsukemen.io",
  url: SITE,
  logo: { "@type": "ImageObject", url: `${SITE}/images/birch-icon.png` },
};

const app = {
  "@type": "MobileApplication",
  "@id": `${SITE}/#app`,
  name: "Birch: Breathe, Relax & Sleep",
  operatingSystem: "iOS, watchOS",
  applicationCategory: "HealthApplication",
  installUrl: APP,
  featureList: Object.values(PATTERNS).map(
    (p) => `${p.name}: ${p.phases.map((ph) => `${ph.label.toLowerCase()} ${ph.secs}`).join(", ")} (one count = one second)`,
  ),
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export const guideUrl = (g: Guide) => `${SITE}/guides/${g.slug}`;
export const ogUrl = (slug: string) => `${SITE}/og/guides/${slug}.png`;

export function guideJsonLd(g: Guide) {
  const url = guideUrl(g);
  const image = ogUrl(g.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: g.h1,
        description: g.description,
        image,
        datePublished: g.published,
        dateModified: g.updated,
        inLanguage: "en-US",
        author: org,
        publisher: org,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        about: plain(g.query),
        mentions: app,
        citation: g.sources.map((s) => s.url),
      },
      {
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: g.stepsHeading,
        description: g.answer,
        image,
        totalTime: g.totalTime,
        step: g.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: plain(s.text),
          url: `${url}#step-${i + 1}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: g.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: plain(a) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
          { "@type": "ListItem", position: 3, name: g.h1, item: url },
        ],
      },
    ],
  };
}

export function indexJsonLd() {
  const url = `${SITE}/guides`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: GUIDES_INDEX.title,
        description: GUIDES_INDEX.description,
        dateModified: GUIDES_INDEX.updated,
        publisher: org,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: GUIDES.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: guideUrl(g),
            name: g.h1,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Guides", item: url },
        ],
      },
    ],
  };
}
