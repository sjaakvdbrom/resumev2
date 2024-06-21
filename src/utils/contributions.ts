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

  const now = new Date();
  const startDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - amount,
  );
  const endDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  );

  stats.contributions.map((item) => {
    const itemDate = new Date(item.date);
    if (itemDate >= startDate && itemDate < endDate) {
      levels.push(item);
    }
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
