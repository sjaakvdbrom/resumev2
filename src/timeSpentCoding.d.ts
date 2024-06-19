export interface CodingActivityStats {
  data: {
    total_seconds: number;
    total_seconds_including_other_language: number;
    human_readable_total: string;
    human_readable_total_including_other_language: string;
    daily_average: number;
    daily_average_including_other_language: number;
    human_readable_daily_average: string;
    human_readable_daily_average_including_other_language: string;
    categories: Category[];
    projects: Project[];
    languages: Language[];
    editors: Editor[];
    operating_systems: OperatingSystem[];
    dependencies: Dependency[];
    machines: Machine[];
    best_day: BestDay;
    range: string;
    human_readable_range: string;
    holidays: number;
    days_including_holidays: number;
    days_minus_holidays: number;
    status: string;
    percent_calculated: number;
    is_already_updating: boolean;
    is_coding_activity_visible: boolean;
    is_other_usage_visible: boolean;
    is_stuck: boolean;
    is_including_today: boolean;
    is_up_to_date: boolean;
    start: string;
    end: string;
    timezone: string;
    timeout: number;
    writes_only: boolean;
    user_id: string;
    username: string;
    created_at: string;
    modified_at: string;
  };
}

export interface Category {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
}

export interface Project {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
}

export interface Language {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Editor {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface OperatingSystem {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Dependency {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Machine {
  name: string;
  machine_name_id: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface BestDay {
  date: string;
  text: string;
  total_seconds: number;
}
