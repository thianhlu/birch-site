import { SITE } from "../../components/Chrome";
import { GUIDES, getGuide } from "../../guides/data";
import { guideMarkdown } from "../../guides/markdown";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const g = getGuide(slug);
  if (!g) return new Response("Not found", { status: 404 });
  return new Response(guideMarkdown(g), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${SITE}/guides/${g.slug}>; rel="canonical"`,
    },
  });
}
