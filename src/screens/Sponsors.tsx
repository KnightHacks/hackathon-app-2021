import { Sponsor } from '@knighthacks/hackathon';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SponsorCard from '../components/cards/SponsorCard';

const testJSON: Sponsor[] = [
  {
    sponsorName: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1010px-Apple_logo_black.svg.png',
    email: 'apple@apple.com',
    subscriptionTier: 'diamond',
    username: 'sponsor_name',
  },
  {
    sponsorName: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
    email: 'microsoft@outlook.com',
    subscriptionTier: 'silver',
    username: 'sponsor_name2',
  },
  {
    sponsorName: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png',
    email: 'google@gmail.com',
    subscriptionTier: 'gold',
    username: 'sponsor_name3',
  },
];

/**
 * The Sponsors page for knight hacks.
 */
function Sponsors(): JSX.Element {
  return (
    <ScrollView contentInset={{ bottom: 30 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        {testJSON.map((sponsor) => (
          <SponsorCard sponsor={sponsor} key={sponsor.username} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Sponsors;
