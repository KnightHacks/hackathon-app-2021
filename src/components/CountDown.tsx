import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import CountStyles from '../styles/countStyles';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(duration);
dayjs.extend(isSameOrBefore);

const start = dayjs(new Date(2021, 11, 10, 16, 30, 0)), end = dayjs(new Date(2021, 11, 12, 16, 30, 0));

/* Countdown for end of hacking */
export default function CountDown() {
    const [now, setNow] = useState(dayjs());

    useEffect(() => {
        setTimeout(setNow(dayjs()), 1000)
    });

    /* Renders the "time" part of the countdown */
    function calcCountDown(time1, time2) {
        const duration = dayjs.duration(time2.diff(time1));
        if (duration.days() > 0)
            return `${duration.hours() + (24 * duration.days())}:${duration.format("mm:ss")}`;
        return duration.format("HH:mm:ss");
    }

    return (
        <View style={CountStyles.container}>
            <View style={CountStyles.card}>
            <Image style={CountStyles.image} source={require('../../assets/clock.png')} />
                <Text style={CountStyles.contents}>
                    {
                        (() => {
                            if (now.isSameOrBefore(start)) {
                                return `Hacking Starts In:\n${calcCountDown(now, start)}`;
                            } else if (now.isSameOrBefore(end)) {
                                return `Hacking Ends In:\n${calcCountDown(now, end)}`;
                            } else {
                                return "Hacking Has Ended";
                            }
                        })()
                    }
                </Text>
            </View>
        </View>
    );
}