import type { Response, Contribution } from "@/types/contributions";

/**
 * Fetches contributions data.
 */
export const getContributions = async () => {
  if (!import.meta.env.CONTRIBUTIONS_URL) {
    throw new Error("Missing env CONTRIBUTIONS_URL");
  }

  const response = await fetch(import.meta.env.CONTRIBUTIONS_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch contributions");
  }

  const stats: Response = await response.json();

  return stats;
};

/**
 * Get contributions in the last x days
 */
export const getContributionsDays = async (amount: number = 30) => {
  const stats = await getContributions();

  const levels: Contribution[] = [];

  stats.contributions.map((item) => {
    const days = amount;
    const delta = days * 24 * 60 * 60 * 1000;
    const result =
      Math.abs(new Date().valueOf() - new Date(item.date).valueOf()) < delta;

    if (result) {
      levels.push(item);
    }

    return;
  });

  return levels;
};

/**
 * Get total amount of contributions in last x days
 */
export const getContributionsCount = async (amount: number = 30) => {
  const stats = await getContributionsDays(amount);

  const totalContributions = stats.reduce((total, item) => {
    return total + item.count;
  }, 0);

  return totalContributions;
};
