import React from 'react';
import { View } from 'react-native';
import SocialCard from '../components/cards/SocialCard';
import { Social, SocialTypes } from '../components/cards/SocialCard';
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Foundation,
} from '@expo/vector-icons';

const socials: Social[] = [
  {
    type: SocialTypes.Discord,
    text: 'Join the conversation',
    url: 'https://discord.gg/Kv5g9vf',
    logo: <FontAwesome5 name="discord" size={28} color="#5865F2" />,
  },
  {
    type: SocialTypes.Website,
    text: 'Check out our Team',
    url: 'https://club.knighthacks.org/',
    logo: <Foundation name="web" size={28} color="black" />,
  },
  {
    type: SocialTypes.Facebook,
    text: 'Like us on Facebook',
    url: 'https://www.facebook.com/KnightHacks/',
    logo: <FontAwesome name="facebook" size={28} color="#3b5998" />,
  },
  {
    type: SocialTypes.Instagram,
    text: 'Follow us on Instagram',
    url: 'https://www.instagram.com/knighthacks/',
    logo: <AntDesign name="instagram" size={28} color="#e1306c" />,
  },
  {
    type: SocialTypes.Twitter,
    text: 'Follow us on Twitter',
    url: 'https://twitter.com/KnightHacks',
    logo: <AntDesign name="twitter" size={28} color="#1DA1F2" />,
  },
  {
    type: SocialTypes.Youtube,
    text: 'Subscribe to our Youtube',
    url: 'https://www.youtube.com/channel/UC_i6HblrGGeNdmKd1QbKlKg/',
    logo: <AntDesign name="youtube" size={28} color="#FF0000" />,
  },
];

/**
 * The about page for knight hacks.
 */
function About(): JSX.Element {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
        }}
      >
        {socials.map((social) => (
          <SocialCard social={social} key={SocialTypes[social.type]} />
        ))}
      </View>
    </View>
  );
}

export default About;
