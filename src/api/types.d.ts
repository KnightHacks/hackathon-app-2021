import { APIEventData } from '@knighthacks/hackathon';

export interface EventResponse {
  events: APIEventData[];
  status: string;
}
