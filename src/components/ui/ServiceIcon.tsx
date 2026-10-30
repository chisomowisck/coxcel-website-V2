import type { IconName } from "@/content/services";
import { cn } from "@/lib/utils";
import { Icon } from "./icons";

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  return <Icon name={name} strokeWidth={1.5} className={cn("size-6", className)} />;
}
