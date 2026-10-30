import { servicesByGroup } from "@/content/services";

/** Serializable navigation data passed to client menu components. */
export const serviceMenu = servicesByGroup.map((g) => ({
  id: g.id,
  label: g.label,
  name: g.name,
  summary: g.summary,
  items: g.services.map((s) => ({ slug: s.slug, title: s.title, icon: s.icon })),
}));

export type ServiceMenu = typeof serviceMenu;
