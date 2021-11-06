import Ionicons from '@expo/vector-icons/Ionicons';
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
  let buttonColor = useTheme() == DarkTheme ? 'white' : 'grey';

  return (
    <TouchableOpacity onPress={() => onPress(event)}>
      <Ionicons name="calendar" size={24} color={buttonColor} />
    </TouchableOpacity>
  );
  // return (
  //   <TouchableOpacity
  //     onPress={() => onPress(event)}
  //     style={{
  //       height: 40,
  //       width: 40,
  //       borderRadius: 40,
  //       backgroundColor: '#E8E8E9',
  //     }}
  //   >
  //     <View>
  //       <Text
  //         style={{
  //           fontSize: 24,
  //           alignSelf: 'center',
  //         }}
  //       >
  //         🗓
  //       </Text>
  //     </View>
  //   </TouchableOpacity>
  // );
}
