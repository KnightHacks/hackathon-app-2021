import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';

export type Social = {
  type: string;
  text: string;
  url: string;
  logo: any;
};

export interface SocialCardProps {
  social: Social;
}

export default function SocialCard({ social }: SocialCardProps) {
  return (
    <Pressable
      onPress={() => {
        Linking.openURL(social.url);
      }}
    >
      <View
        style={{
          alignContent: 'flex-start',
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 15,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
          borderRadius: 25,
          overflow: 'hidden',
        }}
      >
        <View
          style={{ width: '14%', alignContent: 'center', alignItems: 'center' }}
        >
          {social.logo}
        </View>
        <Text
          style={{
            fontSize: 22,
            width: '86%',
            paddingLeft: 5,
          }}
        >
          {social.text}
        </Text>
      </View>
    </Pressable>
  );
}
