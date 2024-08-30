import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontSize: "38px", fontWeight: "300" }}>{children}</h1>
    ),
    ...components,
  };
}
