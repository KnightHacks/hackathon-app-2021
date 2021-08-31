import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import EventCard from '../components/cards/EventCard';
import { Event } from '@knighthacks/hackathon';

const testJSON: Event[] = [
  {
    name: 'Learn React Native',
    dateTime: new Date('Septemeber 5, 2021 13:00:00'),
    endDateTime: new Date('Septemeber 5, 2021 13:30:00'),
    eventStatus: 'Active',
    eventType: 'Libraries',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png',
    link: 'https://google.com',
    loc: 'Harris Engineering 101',
    sponsors: [],
    user: 'testUser',
    attendeesCount: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada rutrum nisi, vel tincidunt risus varius nec. Ut elit sapien, consequat sit amet efficitur eget, faucibus eget metus. Sed tempor consequat arcu. Sed fringilla eros quis magna bibendum, eget congue ipsum interdum.',
  },
  {
    name: 'Learn TypeScript',
    dateTime: new Date('Septemeber 17, 2021 15:00:00'),
    endDateTime: new Date('Septemeber 17, 2021 16:30:00'),
    eventStatus: 'Active',
    eventType: 'Programming Languages',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png',
    link: 'https://google.com',
    loc: 'Harris Engineering 105',
    sponsors: [],
    user: 'testUser',
    attendeesCount: 100,
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
