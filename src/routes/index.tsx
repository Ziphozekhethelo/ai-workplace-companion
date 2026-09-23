import { createFileRoute } from "@tanstack/react-router";
import { ProductivityWorkspace } from "@/components/productivity-workspace";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workmate AI | Workplace Productivity Assistant" },
      { name: "description", content: "Summarize research, prioritize tasks, and get practical workplace guidance in a private browser workspace." },
      { property: "og:title", content: "Workmate AI | Workplace Productivity Assistant" },
      { property: "og:description", content: "A polished AI productivity workspace for research, planning, and workplace questions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <ProductivityWorkspace />;
}
