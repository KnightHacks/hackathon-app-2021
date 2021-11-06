import { APISponsorData } from '@knighthacks/hackathon';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SponsorCard from '../components/cards/SponsorCard';
import api from '../api/api';

const comparator = (lhs: APISponsorData, rhs: APISponsorData) => {
  if (lhs.subscription_tier === 'Gold') {
    if (
      rhs.subscription_tier === 'Silver' ||
      rhs.subscription_tier === 'Bronze'
    ) {
      return -1;
    }

    return lhs.sponsor_name.localeCompare(rhs.sponsor_name);
  }

  if (lhs.subscription_tier === 'Silver') {
    if (rhs.subscription_tier === 'Gold') {
      return 1;
    }

    if (rhs.subscription_tier === 'Bronze') {
      return -1;
    }

    return lhs.sponsor_name.localeCompare(rhs.sponsor_name);
  }

  if (lhs.subscription_tier === 'Bronze') {
    if (
      rhs.subscription_tier === 'Gold' ||
      rhs.subscription_tier === 'Silver'
    ) {
      return 1;
    }

    return lhs.sponsor_name.localeCompare(rhs.sponsor_name);
  }

  return 0;
};

/**
 * The Sponsors page for knight hacks.
 */
function Sponsors(): JSX.Element {
  const [sponsors, setSponsors] = useState<APISponsorData[]>([]);

  useEffect(() => {
    async function getSponsors() {
      const res = await api.getSponsors();
      setSponsors(res.sort(comparator));
    }
    getSponsors();
  }, []);

  return (
    <ScrollView contentInset={{ bottom: 40 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          paddingBottom: '15%',
        }}
      >
        {sponsors.map((sponsor) => (
          <SponsorCard sponsor={sponsor} key={sponsor.sponsor_name} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Sponsors;
