import { APIEvent } from '@knighthacks/hackathon';
import { EventResponse } from './types';

const url: string = 'https://stagingapi.knighthacks.org/api';

const api = {
  async getEvents(): Promise<APIEvent[]> {
    // eslint-disable-next-line
    const response = await fetch(url + '/events/get_all_events/');
    const { events, status }: EventResponse = await response.json();
    return status !== 'success' ? [] : events;
  },
};

export default api;
