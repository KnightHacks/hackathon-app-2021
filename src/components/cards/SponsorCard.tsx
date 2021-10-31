import React from 'react';
import { View, Text, Image } from 'react-native';
import { APISponsor } from '@knighthacks/hackathon';
import CardStyles from '../../styles/cardStyles';
import { useTheme, DarkTheme } from '@react-navigation/native';

export interface SponsorCardProps {
  sponsor: APISponsor;
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
  let cardStyle =
    useTheme() == DarkTheme ? CardStyles.cardDark : CardStyles.cardLight;
  let headingStyle =
    useTheme() == DarkTheme ? CardStyles.headingDark : CardStyles.headingLight;
  let primaryTextStyle =
    useTheme() == DarkTheme
      ? CardStyles.textPrimaryDark
      : CardStyles.textPrimaryLight;
  let headerImageContainerStyle =
    useTheme() == DarkTheme
      ? CardStyles.headerImageContainerDark
      : CardStyles.headerImageContainerLight;

  return (
    <View style={cardStyle}>
      <View style={CardStyles.header}>
        <View style={headerImageContainerStyle}>
          <Image
            style={CardStyles.headerImage}
            source={{ uri: sponsor.logo }}
          />
        </View>
        <View style={CardStyles.headerTitle}>
          <Text style={headingStyle}>{sponsor.sponsor_name}</Text>
          <Text style={primaryTextStyle}>{sponsor.description}</Text>
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
