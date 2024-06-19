import type { Response } from "@/types/contributions";

export const getContributions = async () => {
  if (!import.meta.env.CONTRIBUTIONS_URL) {
    throw new Error("Missing env CONTRIBUTIONS_URL");
  }

  const response = await fetch(import.meta.env.CONTRIBUTIONS_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch contributions");
  }

  const stats: Response = await response.json();

  // Get total contributions from the last 30 days
  const totalContributions = stats.contributions.reduce((total, item) => {
    var days = 30;
    var delta = days * 24 * 60 * 60 * 1000;
    var result =
      Math.abs(new Date().valueOf() - new Date(item.date).valueOf()) < delta;

    if (result) {
      return total + item.count;
    }

    return total;
  }, 0);

  return totalContributions;
};
