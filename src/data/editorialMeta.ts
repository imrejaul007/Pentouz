export const editorialMeta = {
  publisher: "The Pentouz Editorial Desk",
  reviewer: "City Experience and Concierge Team",
  policyPath: "/editorial-policy",
  updatedOn: "2026-03-10",
};

export function formatEditorialDate(isoDate: string) {
  const d = new Date(isoDate);
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
