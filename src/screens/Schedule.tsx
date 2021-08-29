import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import EventCard from '../components/cards/EventCard';
import { Event } from '../types';

const testJSON: Event[] = [
  {
    name: 'Learn React Native',
    date_time: 'December 1st @ 3pm',
    end_date_time: '[test]',
    event_status: 'Active',
    event_type: 'Libraries',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    link: 'https://google.com',
    loc: 'Harris Engineering 101',
    sponsors: [],
    user: 'testUser',
    attendees_count: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada rutrum nisi, vel tincidunt risus varius nec. Ut elit sapien, consequat sit amet efficitur eget, faucibus eget metus. Sed tempor consequat arcu. Sed fringilla eros quis magna bibendum, eget congue ipsum interdum.',
  },
  {
    name: 'Learn TypeScript',
    date_time: 'December 21nd @ 3pm',
    end_date_time: '[test]',
    event_status: 'Active',
    event_type: 'Programming Languages',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    link: 'https://google.com',
    loc: 'Harris Engineering 105',
    sponsors: [],
    user: 'testUser',
    attendees_count: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada rutrum nisi, vel tincidunt risus varius nec. Ut elit sapien, consequat sit amet efficitur eget, faucibus eget metus. Sed tempor consequat arcu. Sed fringilla eros quis magna bibendum, eget congue ipsum interdum.',
  },
];

/**
 * The Schedule page for knight hacks.
 *
 * @returns {JSX.Element}
 */
function Schedule(): JSX.Element {
  return (
    <ScrollView contentInset={{ bottom: 30 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        {testJSON.map((event) => (
          <EventCard event={event} key={event.name} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Schedule;
