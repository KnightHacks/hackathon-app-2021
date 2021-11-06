import React from 'react';
import {
  View,
  Text,
  Image,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CardStyles from '../../styles/cardStyles';
import { APIEventData } from '@knighthacks/hackathon';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import { toHourMinute } from '../../util/date';
import CalendarButton from '../CalendarButton';
import { useState } from 'react';
import { useTheme, DarkTheme } from '@react-navigation/native';

dayjs.extend(relativeTime);
dayjs.extend(utc);

export interface EventCardProps {
  event: APIEventData;
}

/**
 * Represents a singular card for a given event.
 */
export default function EventCard({ event }: EventCardProps) {
  const [expanded, setExpanded] = useState(false);
  const tagStyle = StyleSheet.create({
    base: {
      borderRadius: 18,
      height: 36,
      alignContent: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: 8,
      paddingLeft: 15,
      paddingRight: 15,
    },
  });

  function getTagColor(type: string) {
    switch (type.toLowerCase()) {
      case 'general':
        return '#F6BC41';
      case 'social':
        return '#F94E32';
      case 'mini-competition':
        return '#E39BCF';
      case 'non-technical':
        return '#4D8D7C';
      case 'beginner':
        return '#6AACC5';
      default:
        return '#8e43f6';
    }
  }

  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  let cardStyle =
    useTheme() == DarkTheme ? CardStyles.cardDark : CardStyles.cardLight;
  let headingStyle =
    useTheme() == DarkTheme ? CardStyles.headingDark : CardStyles.headingLight;
  let textPrimaryStyle =
    useTheme() == DarkTheme
      ? CardStyles.textPrimaryDark
      : CardStyles.textPrimaryLight;
  let textSecondaryStyle =
    useTheme() == DarkTheme
      ? CardStyles.textSecondaryDark
      : CardStyles.textSecondaryLight;
  let textTertiaryStyle =
    useTheme() == DarkTheme
      ? CardStyles.textTertiaryDark
      : CardStyles.textTertiaryLight;
  let headerImageContainerStyle =
    useTheme() == DarkTheme
      ? CardStyles.headerImageContainerDark
      : CardStyles.headerImageContainerLight;

  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={toggleExpand}
      activeOpacity={1}
    >
      <View style={[CardStyles.header, { justifyContent: 'space-between' }]}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={headerImageContainerStyle}>
            <Image
              style={CardStyles.headerImage}
              source={{ uri: event.image }}
            />
          </View>
          <View style={CardStyles.headerTitle}>
            <Text style={headingStyle}>{event.name}</Text>
            <Text style={textPrimaryStyle}>
              {`${dayjs(event.date_time).utc().format('MMMM Do')}`}
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
        <Text style={textSecondaryStyle}>{'Hopin'}</Text>
        <Text style={textPrimaryStyle}>
          {`${toHourMinute(new Date(event.date_time))} - ${toHourMinute(
            new Date(event.end_date_time)
          )}`}
        </Text>
      </View>
      {expanded && (
        <View>
          <Text style={textTertiaryStyle}>{event.description}</Text>
          <View
            style={{
              marginTop: 10,
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                backgroundColor: getTagColor(event.event_type),
                ...tagStyle.base,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {event.event_type}
              </Text>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
