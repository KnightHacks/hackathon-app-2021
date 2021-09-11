import React from 'react';
import {
  View,
  Text,
  Image,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import CardStyles from '../../styles/cardStyles';
import { Event } from '@knighthacks/hackathon';
import dayjs from 'dayjs';
import { toHourMinute } from '../../util/date';
import CalendarButton from '../CalendarButton';
import { useState } from 'react';
import { useTheme, DarkTheme } from '@react-navigation/native';

export interface EventCardProps {
  event: Event;
}

/**
 * Represents a singular card for a given sponsor.
 */
export default function EventCard({ event }: EventCardProps) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  let thisCardStyle =
    useTheme() == DarkTheme ? CardStyles.cardDark : CardStyles.cardLight;
  let thisHeadingStyle =
    useTheme() == DarkTheme ? CardStyles.headingDark : CardStyles.headingLight;
  let thisPrimaryTextStyle =
    useTheme() == DarkTheme
      ? CardStyles.textPrimaryDark
      : CardStyles.textPrimaryLight;
  let thisSecondaryTextStyle =
    useTheme() == DarkTheme
      ? CardStyles.textSecondaryDark
      : CardStyles.textSecondaryLight;

  return (
    <TouchableOpacity
      style={thisCardStyle}
      onPress={toggleExpand}
      activeOpacity={1}
    >
      <View style={[CardStyles.header, { justifyContent: 'space-between' }]}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={CardStyles.headerImageContainer}>
            <Image
              style={CardStyles.headerImage}
              source={{ uri: event.image }}
            />
          </View>
          <View style={CardStyles.headerTitle}>
            <Text style={thisHeadingStyle}>{event.name}</Text>
            <Text style={thisPrimaryTextStyle}>
              {`${dayjs(event.dateTime).format('MMMM Do')}, ${dayjs(
                event.dateTime
              ).fromNow()}`}
            </Text>
          </View>
        </View>
        <CalendarButton event={event} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Text style={thisSecondaryTextStyle}>{event.loc}</Text>
        <Text style={thisPrimaryTextStyle}>
          {`${toHourMinute(event.dateTime)} - ${toHourMinute(
            event.endDateTime
          )}`}
        </Text>
      </View>
      {expanded && (
        <View>
          <Text style={{ marginTop: 10 }}>{event.description}</Text>
          <View
            style={{
              marginTop: 10,
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                backgroundColor: '#8e43f6',
                borderRadius: 18,
                height: 36,
                alignContent: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: 8,
                paddingLeft: 15,
                paddingRight: 15,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {event.eventType}
              </Text>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
