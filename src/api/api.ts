import AsyncStorage from '@react-native-async-storage/async-storage';
import { APIEvent } from '@knighthacks/hackathon';
import { EventResponse } from './types';

const url: string = 'https://stagingapi.knighthacks.org/api';

const api = {
  async getEvents(): Promise<APIEvent[]> {
    try {
      const eventsList = await AsyncStorage.getItem('events');

      // Check if we had anything in async storage, if not, go to our endpoint
      // and get it and store it.

      if (!eventsList) {
        // eslint-disable-next-line
        const response = await fetch(url + '/events/get_all_events/');
        const { events, status }: EventResponse = await response.json();

        if (status !== 'success') {
          // Unsuccessful, dont cache, return empty list
          return [];
        } else {
          // Successful
          if (events.length !== 0) {
            // Event list isnt empty, cache
            await AsyncStorage.setItem('events', JSON.stringify(events));
          }
          // Dont cache if empty list, can return as is if empty
          return events;
        }
      } else {
        // Had events cached, return them
        const cachedEvents = JSON.parse(eventsList);
        return cachedEvents;
      }
    } catch (e) {
      throw new Error('Something went wrong trying to fetch events!');
    }
  },
};

export default api;
