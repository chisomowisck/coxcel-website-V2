import { createElement, type SVGProps } from "react";
import { iconData, type IconKey } from "./icon-data";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children" | "name" | "strokeWidth"> & {
  strokeWidth?: number;
};

/** Line icon rendered from vendored path data. Decorative unless given an aria-label. */
export function Icon({ name, strokeWidth = 2, ...props }: IconProps & { name: IconKey }) {
  const labelled = Boolean(props["aria-label"] || props["aria-labelledby"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={labelled ? undefined : true}
      focusable="false"
      {...props}
    >
      {iconData[name].map(([tag, attrs], i) => createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}

const make = (name: IconKey) => {
  const Component = (props: IconProps) => <Icon name={name} {...props} />;
  Component.displayName = name;
  return Component;
};

export const ArrowRight = make("ArrowRight");
export const ArrowUpRight = make("ArrowUpRight");
export const ChevronDown = make("ChevronDown");
export const CircleAlert = make("CircleAlert");
export const CircleCheck = make("CircleCheck");
export const Clock = make("Clock");
export const LoaderCircle = make("LoaderCircle");
export const Mail = make("Mail");
export const MapPin = make("MapPin");
export const Menu = make("Menu");
export const MessageCircle = make("MessageCircle");
export const Phone = make("Phone");
export const Plus = make("Plus");
export const X = make("X");
