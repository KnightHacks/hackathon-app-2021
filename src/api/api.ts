import { APIEvent } from '@knighthacks/hackathon';
import { EventResponse } from './types';

const url: string = 'https://stagingapi.knighthacks.org/api';

const api = {
  async getEvents(): Promise<APIEvent[]> {
    try {
      // eslint-disable-next-line
      const response = await fetch(url + '/events/get_all_events/');
      const { events, status }: EventResponse = await response.json();

      if (status !== 'success') {
        // Unsuccessful, return empty list
        return [];
      } else {
        return events;
      }
    } catch (e) {
      throw new Error('Something went wrong trying to fetch events!');
    }
  },
  async getSponsors(): Promise<APISponsor[]> {
    try {
      // eslint-disable-next-line
      const response = await fetch(url + '/sponsors/get_all_sponsors/');
      const { sponsors, status }: SponsorResponse = await response.json();

      if (status !== 'success') {
        return [];
      } else {
        return sponsors;
      }
    } catch (e) {
      throw new Error('Something went wrong trying to fetch sponsors!');
    }
  },
};

export default api;
