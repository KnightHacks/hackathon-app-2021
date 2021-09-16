import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import * as Calendar from 'expo-calendar';
import { Event } from '@knighthacks/hackathon';
import { useTheme, DarkTheme } from '@react-navigation/native';

export interface CalendarButtonProps {
  event: Event;
}

async function onPress(event: Event) {
  const defaultCalender = await Calendar.getDefaultCalendarAsync();
  await Calendar.createEventAsync(defaultCalender.id, {
    title: event.name,
    startDate: event.dateTime,
    endDate: event.endDateTime,
    location: event.loc,
    notes: event.description,
    alarms: [
      {
        relativeOffset: -30,
      },
    ],
  });

  Alert.alert('Calendar Event Successfully Added.');
}

/**
 * A button that allows users to add the given date to their calendar app.
 * @returns
 */
export default function CalendarButton({
  event,
}: CalendarButtonProps): JSX.Element {
  let buttonColor = useTheme() == DarkTheme ? 'white' : 'black';

  return (
    <TouchableOpacity onPress={() => onPress(event)}>
      <Feather name="calendar" size={24} color={buttonColor} />
    </TouchableOpacity>
  );
}
