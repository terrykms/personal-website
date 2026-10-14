// Kept separate from lib/utils.js (which uses fs) so client components can import it.
export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
