import { APIEvent, APISponsor } from '@knighthacks/hackathon';

export interface EventResponse {
  events: APIEvent[];
  status: string;
}

export interface SponsorResponse {
  sponsors: APISponsor[];
  status: string;
}
