import React, { useState, useEffect } from 'react';
import { Platform, ScrollView, UIManager } from 'react-native';
import { View } from 'react-native';
import EventCard from '../components/cards/EventCard';
import { APIEventData } from '@knighthacks/hackathon';
import SearchBar from '../components/SearchBar';
import ErrorMsgContainer from '../components/ErrorMsgContainer';
import api from '../api/api';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function comparator(lhs: APIEventData, rhs: APIEventData) {
  // Same start time, check end
  if (dayjs(lhs.date_time).isSame(dayjs(rhs.date_time))) {
    if (dayjs(lhs.end_date_time).isSameOrBefore(dayjs(rhs.end_date_time))) {
      return -1;
    } else {
      return 1;
    }
  } else {
    if (dayjs(lhs.date_time).isBefore(dayjs(rhs.date_time))) {
      return -1;
    } else {
      return 1;
    }
  }
}

/**
 * The Schedule page for knight hacks.
 *
 * @returns {JSX.Element}
 */
function Schedule(): JSX.Element {
  const [events, setEvents] = useState<APIEventData[]>([]);
  const [curEvents, setCurEvents] = useState<APIEventData[]>([]);
  const [notEmpty, setNotEmpty] = useState(false);

  useEffect(() => {
    async function getEvents() {
      const res = await api.getEvents();
      const sorted = res.sort(comparator);
      setEvents(sorted);
      setCurEvents(sorted);
    }
    getEvents();
  }, []);

  useEffect(() => {
    setNotEmpty(events.length !== 0 ? true : false);
  }, [events]);

  const onSearch = (e: string) => {
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(e.toLowerCase())
    );
    setCurEvents(filteredEvents);
  };

  return (
    <>
      {notEmpty && <SearchBar onChangeText={onSearch} />}
      <ScrollView contentInset={{ bottom: 40 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
        >
          {notEmpty && (
            <>
              {curEvents.map((event) => (
                <EventCard event={event} key={event.name} />
              ))}
            </>
          )}
          {!notEmpty && (
            <ErrorMsgContainer
              message={`Coming soon!\n\n Keep an eye out on this page for updates in the coming week.`}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

export default Schedule;
