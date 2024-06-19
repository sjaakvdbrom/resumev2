import type { CodingActivityStats } from "@/types/timeSpentCoding";

export const getTimeSpentCoding = async () => {
  if (!import.meta.env.TIME_SPENT_CODING_URL) {
    throw new Error("Missing env TIME_SPENT_CODING_URL");
  }

  if (!import.meta.env.TIME_SPENT_CODING_API_KEY) {
    throw new Error("Missing env TIME_SPENT_CODING_API_KEY");
  }

  const response = await fetch(
    `${import.meta.env.TIME_SPENT_CODING_URL}/stats/last_30_days`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${import.meta.env.TIME_SPENT_CODING_API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch time spent coding");
  }

  const stats: CodingActivityStats = await response.json();

  const humanReadableTotal =
    stats.data.human_readable_total_including_other_language;

  return humanReadableTotal;
};
