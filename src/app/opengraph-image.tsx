import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Coxcel: software, data, AI and digital services";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Software, data, AI and digital services",
    title: "We transform your vision into reality with innovative ICT solutions.",
  });
}
