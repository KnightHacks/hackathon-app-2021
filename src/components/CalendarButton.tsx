import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import * as Calendar from 'expo-calendar';
import { APIEventData } from '@knighthacks/hackathon';
import { useTheme, DarkTheme } from '@react-navigation/native';

export interface CalendarButtonProps {
  event: APIEventData;
}

async function onPress(event: APIEventData) {
  const defaultCalender = await Calendar.getDefaultCalendarAsync();
  await Calendar.createEventAsync(defaultCalender.id, {
    title: event.name,
    startDate: new Date(event.date_time),
    endDate: new Date(event.end_date_time),
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
