import React from 'react';
import { View, Text, Image } from 'react-native';
import CardStyles from '../../styles/cardStyles';
import { Event } from '@knighthacks/hackathon';
import dayjs from 'dayjs';
import { toHourMinute } from '../../util/date';

export interface EventCardProps {
  event: Event;
}

/**
 * Represents a singular card for a given sponsor.
 */
export default function EventCard({ event }: EventCardProps) {
  return (
    <View style={CardStyles.card}>
      <View style={CardStyles.header}>
        <View style={CardStyles.headerImageContainer}>
          <Image style={CardStyles.headerImage} source={{ uri: event.image }} />
        </View>
        <View style={CardStyles.headerTitle}>
          <Text style={CardStyles.heading}>{event.name}</Text>
          <Text style={{ color: 'gray' }}>
            {dayjs(event.dateTime).fromNow()}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: '700' }}>{event.loc}</Text>
        <Text style={{ fontWeight: '500', color: 'gray' }}>
          {`${toHourMinute(event.dateTime)} - ${toHourMinute(
            event.endDateTime
          )}`}
        </Text>
      </View>

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
  );
}
