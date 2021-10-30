import { APIEvent } from '@knighthacks/hackathon';

export interface EventResponse {
  events: APIEvent[];
  status: string;
}
