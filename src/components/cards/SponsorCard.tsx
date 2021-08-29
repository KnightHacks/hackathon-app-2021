import React from 'react';
import { View, Text, Image } from 'react-native';
import { Sponsor } from '../../types';
import CardStyles from '../../styles/cardStyles';

export interface SponsorCardProps {
  sponsor: Sponsor;
}

const tierColor = (tier: string) => {
  switch (tier) {
    case 'silver':
      return '#c0c0c0';
    case 'gold':
      return '#FFD700';
    case 'diamond':
      return '#add8e6';
    default:
      return 'red';
  }
};

/**
 * Represents a singular card for a given sponsor.
 */
export default function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <View style={CardStyles.card}>
      <View style={CardStyles.header}>
        <View style={CardStyles.headerImageContainer}>
          <Image
            style={CardStyles.headerImage}
            source={{ uri: sponsor.logo }}
          />
        </View>
        <View style={CardStyles.headerTitle}>
          <Text style={CardStyles.heading}>{sponsor.sponsor_name}</Text>
          <Text>{sponsor.email}</Text>
        </View>
      </View>
      <View
        style={[
          CardStyles.tierBadge,
          { backgroundColor: tierColor(sponsor.subscription_tier) },
        ]}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}>
          {sponsor.subscription_tier.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
