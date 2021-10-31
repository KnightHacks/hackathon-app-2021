import { APISponsor } from '@knighthacks/hackathon';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SponsorCard from '../components/cards/SponsorCard';
import api from '../api/api';

/**
 * The Sponsors page for knight hacks.
 */
function Sponsors(): JSX.Element {
  const [sponsors, setSponsors] = useState<APISponsor[]>([]);

  useEffect(() => {
    async function getSponsors() {
      const res = await api.getSponsors();
      setSponsors(res);
    }
    getSponsors();
  }, []);

  return (
    <ScrollView contentInset={{ bottom: 30 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        {sponsors.map((sponsor) => (
          <SponsorCard sponsor={sponsor} key={sponsor.username} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Sponsors;
