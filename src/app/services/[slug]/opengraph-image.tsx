import { getGroup, getService, services } from "@/content/services";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Coxcel service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  const group = service ? getGroup(service.group) : null;
  return renderOgImage({
    eyebrow: group ? group.name : "Services",
    title: service?.title ?? "Coxcel services",
  });
}
