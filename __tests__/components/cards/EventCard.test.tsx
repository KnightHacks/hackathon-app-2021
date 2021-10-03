import 'react-native';
import React from 'react';
import { Event } from '@knighthacks/hackathon';
import renderer from 'react-test-renderer';
import EventCard from '../../../src/components/cards/EventCard';

jest.useFakeTimers();

const testEvent: Event = {
  name: 'Name',
  dateTime: new Date('October 3, 2021 05:54:00'),
  endDateTime: new Date('October 3, 2021 05:54:00'),
  eventStatus: 'Event Status',
  eventType: 'Event Type',
  image: 'URL',
  link: 'URL',
  loc: 'Location',
  sponsors: [],
  user: 'User',
  attendeesCount: 999,
  description: 'Description',
};

it('renders the event card', async () => {
  const eventCard = renderer.create(<EventCard event={testEvent} />);
  const testInstance = eventCard.root;
  expect(eventCard).toBeDefined();
  expect(testInstance.findByType(EventCard).props.event.name).toBe('Name');
  expect(testInstance.findByType(EventCard).props.event.eventStatus).toBe(
    'Event Status'
  );
  expect(testInstance.findByType(EventCard).props.event.eventType).toBe(
    'Event Type'
  );
  expect(testInstance.findByType(EventCard).props.event.image).toBe('URL');
  expect(testInstance.findByType(EventCard).props.event.link).toBe('URL');
  expect(testInstance.findByType(EventCard).props.event.loc).toBe('Location');
  expect(testInstance.findByType(EventCard).props.event.user).toBe('User');
  expect(testInstance.findByType(EventCard).props.event.attendeesCount).toBe(
    999
  );
  expect(testInstance.findByType(EventCard).props.event.description).toBe(
    'Description'
  );
});
