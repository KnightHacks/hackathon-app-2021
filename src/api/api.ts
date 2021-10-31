import { APIEvent } from '@knighthacks/hackathon';
import { EventResponse } from './types';

const url: string = 'https://stagingapi.knighthacks.org/api';

const api = {
  async getEvents(): Promise<APIEvent[]> {
    try {
      // Check if we had anything in async storage, if not, go to our endpoint
      // and get it and store it.

      // eslint-disable-next-line
      const response = await fetch(url + '/events/get_all_events/');
      const { events, status }: EventResponse = await response.json();

      if (status !== 'success') {
        // Unsuccessful return empty list
        return [];
      } else {
        return events;
      }
    } catch (e) {
      throw new Error('Something went wrong trying to fetch events!');
    }
  },
};

export default api;
