import {
  AppWindow, Bot, ChartColumn, ChartPie, Cloud, Code, Compass, Database, FileSearch, Gauge,
  GitBranch, Globe, LayoutDashboard, Lightbulb, MousePointerClick, Newspaper, PenTool, Plug,
  Rocket, ScanSearch, Search, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Target, TestTube,
  TrendingUp, Workflow, Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/services";
import { cn } from "@/lib/utils";

const icons: Record<IconName, LucideIcon> = {
  AppWindow, Bot, ChartColumn, ChartPie, Cloud, Code, Compass, Database, FileSearch, Gauge,
  GitBranch, Globe, LayoutDashboard, Lightbulb, MousePointerClick, Newspaper, PenTool, Plug,
  Rocket, ScanSearch, Search, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Target, TestTube,
  TrendingUp, Workflow, Wrench,
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" strokeWidth={1.5} className={cn("size-6", className)} />;
}
