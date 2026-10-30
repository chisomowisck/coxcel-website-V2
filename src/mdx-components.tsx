import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  a: ({ href = "", children }) =>
    href.startsWith("/") ? <Link href={href}>{children}</Link> : <a href={href} rel="noopener noreferrer">{children}</a>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
