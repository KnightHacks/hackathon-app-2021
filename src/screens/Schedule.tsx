import React, { useState, useEffect } from 'react';
import { Platform, ScrollView, UIManager } from 'react-native';
import { View } from 'react-native';
import EventCard from '../components/cards/EventCard';
import { APIEvent } from '@knighthacks/hackathon';
import SearchBar from '../components/SearchBar';
import api from '../api/api';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

/**
 * The Schedule page for knight hacks.
 *
 * @returns {JSX.Element}
 */
function Schedule(): JSX.Element {
  const [events, setEvents] = useState<APIEvent[]>([]);
  const [curEvents, setCurEvents] = useState<APIEvent[]>([]);

  useEffect(() => {
    async function getEvents() {
      const res = await api.getEvents();
      setEvents(res);
      setCurEvents(res);
    }
    getEvents();
  }, []);

  const onSearch = (e: string) => {
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(e.toLowerCase())
    );
    setCurEvents(filteredEvents);
  };

  return (
    <ScrollView contentInset={{ bottom: 30 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <SearchBar onChangeText={onSearch} />
        {curEvents.map((event) => (
          <EventCard event={event} key={event.name} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Schedule;
