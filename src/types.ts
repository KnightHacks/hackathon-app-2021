/**
 * The strucuture of a sponsor response given by the API.
 */
export interface Sponsor {
  email: string;
  logo: string;
  sponsor_name: string;
  subscription_tier: string;
  username: string;
}

/**
 * The strucuture of an Event response given by the API.
 */
export interface Event {
  attendees_count: number;
  date_time: string;
  description: string;
  end_date_time: string;
  event_status: string;
  event_type: string;
  image: string;
  link: string;
  loc: string;
  name: string;
  sponsors: Sponsor[];
  user: string;
}
