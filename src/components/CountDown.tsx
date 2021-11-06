import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import CountStyles from '../styles/countStyles';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { useTheme, DarkTheme } from '@react-navigation/native';

dayjs.extend(duration);
dayjs.extend(isSameOrBefore);

const start = dayjs(new Date(2021, 10, 14, 21, 0, 0)),
  end = dayjs(new Date(2021, 10, 14, 12, 0, 0)),
  clock = require('../../assets/clock.png');

/* Countdown for end of hacking */
export default function CountDown(): JSX.Element {
  const [now, setNow] = useState(dayjs());

  let cardStyle =
    useTheme() == DarkTheme ? CountStyles.cardDark : CountStyles.cardLight;
  let imageStyle =
    useTheme() == DarkTheme ? CountStyles.imageDark : CountStyles.imageLight;

  /* Update the countdown */
  useEffect(() => {
    setTimeout(() => {
      setNow(dayjs());
    }, 1000);
  });

  return (
    <View style={CountStyles.container}>
      <View style={cardStyle}>
        <Image style={imageStyle} source={clock} />
        <Text style={CountStyles.contents}>
          {(() => {
            if (now.isSameOrBefore(start))
              return `Hacking Starts In:\n${diffHourMinSec(now, start)}`;
            else if (now.isSameOrBefore(end))
              return `Hacking Ends In:\n${diffHourMinSec(now, end)}`;
            else return 'Hacking Has Ended';
          })()}
        </Text>
      </View>
    </View>
  );
}

/* Renders the "time" part of the countdown */
export function diffHourMinSec(time1: dayjs.Dayjs, time2: dayjs.Dayjs) {
  const duration = dayjs.duration(time2.diff(time1));
  if (duration.days() > 0 || duration.months() > 0 || duration.years() > 0)
    return `${
      duration.hours() + 24 * time2.diff(time1, 'days')
    }:${duration.format('mm:ss')}`;
  return duration.format('HH:mm:ss');
}
