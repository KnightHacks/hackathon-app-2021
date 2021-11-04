import CalendarButton from '../../src/components/CalendarButton';
import renderer from 'react-test-renderer';
import React from 'react';
import { APIEvent } from '@knighthacks/hackathon';

const testJSON: APIEvent = {
  name: 'Learn React Native',
  date_time: 'Septemeber 5, 2021 13:00:00',
  end_date_time: 'Septemeber 5, 2021 13:30:00',
  event_status: 'Active',
  event_type: 'Libraries',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png',
  link: 'https://google.com',
  loc: 'Harris Engineering 101',
  sponsors: [],
  user: 'testUser',
  attendees_count: 100,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada rutrum nisi, vel tincidunt risus varius nec. Ut elit sapien, consequat sit amet efficitur eget, faucibus eget metus. Sed tempor consequat arcu. Sed fringilla eros quis magna bibendum, eget congue ipsum interdum.',
};

describe('It renders the calendar button', () => {
  test('renders button', async () => {
    const button = await renderer
      .create(<CalendarButton event={testJSON} />)
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
