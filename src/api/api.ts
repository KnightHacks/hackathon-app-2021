import { APIEvent } from '@knighthacks/hackathon';
import { EventResponse } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
          // Successful, cache and return list of events
          // eslint-disable-next-line
          console.log('Storing events in cache');
          AsyncStorage.setItem('events', JSON.stringify(events));
          return events;
        }
      } else {
        // Had events cached, return them
        // eslint-disable-next-line
        console.log('Grabbing from cache');
        const cachedEvents = JSON.parse(eventsList);
        return cachedEvents;
      }
    } catch (e) {
      throw new Error('Something went wrong trying to fetch events!');
    }
  },
};

export default api;
