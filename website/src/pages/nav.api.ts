import type { DocsNavProps } from "@/components/DocsNav";

import apiExports from "@/data/next/api-exports.json";

const apiPages = apiExports.map((category) => {
  const categoryKey = Object.keys(category)[0] as keyof typeof category;
  return {
    label: categoryKey,
    pages:
      category[categoryKey]?.map((item) => ({
        title: item.name,
        slug: `docs/api/next/` + item.url.replace(/\.mdx?$/, ""),
        deprecated: item.deprecated,
        // icon and preview are not available in the original data
      })) ?? [],
  };
});

export function apiNav(): DocsNavProps["routes"] {
  return [
    {
      pages: [{ title: "Index", slug: "docs/api/next/index" }],
    },
    ...apiPages,
  ];
}
