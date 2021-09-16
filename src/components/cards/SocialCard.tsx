import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import CardStyles from '../../styles/cardStyles';
import { useTheme, DarkTheme } from '@react-navigation/native';

export enum SocialTypes {
  Discord,
  Website,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
}

export interface Social {
  type: SocialTypes;
  text: string;
  url: string;
  logo: JSX.Element;
}

export interface SocialCardProps {
  social: Social;
}

export default function SocialCard({ social }: SocialCardProps) {
  let thisSocialCardStyle =
    useTheme() == DarkTheme
      ? CardStyles.socialCardDark
      : CardStyles.socialCardLight;
  let thisTextQuaternaryStyle =
    useTheme() == DarkTheme
      ? CardStyles.textQuaternaryDark
      : CardStyles.textQuaternaryLight;

  return (
    <Pressable
      onPress={() => {
        Linking.openURL(social.url);
      }}
    >
      <View style={thisSocialCardStyle}>
        <View
          style={{ width: '14%', alignContent: 'center', alignItems: 'center' }}
        >
          {social.logo}
        </View>
        <Text style={thisTextQuaternaryStyle}>{social.text}</Text>
      </View>
    </Pressable>
  );
}
