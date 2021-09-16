import React from 'react';
import { View, Text, Image } from 'react-native';
import { Sponsor } from '@knighthacks/hackathon';
import CardStyles from '../../styles/cardStyles';
import { useTheme, DarkTheme } from '@react-navigation/native';

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
  let thisCardStyle =
    useTheme() == DarkTheme ? CardStyles.cardDark : CardStyles.cardLight;
  let thisHeadingStyle =
    useTheme() == DarkTheme ? CardStyles.headingDark : CardStyles.headingLight;
  let thisPrimaryTextStyle =
    useTheme() == DarkTheme
      ? CardStyles.textPrimaryDark
      : CardStyles.textPrimaryLight;
  let thisHeaderImageContainerStyle =
    useTheme() == DarkTheme
      ? CardStyles.headerImageContainerDark
      : CardStyles.headerImageContainerLight;

  return (
    <View style={thisCardStyle}>
      <View style={CardStyles.header}>
        <View style={thisHeaderImageContainerStyle}>
          <Image
            style={CardStyles.headerImage}
            source={{ uri: sponsor.logo }}
          />
        </View>
        <View style={CardStyles.headerTitle}>
          <Text style={thisHeadingStyle}>{sponsor.sponsorName}</Text>
          <Text style={thisPrimaryTextStyle}>{sponsor.email}</Text>
        </View>
      </View>
      <View
        style={[
          CardStyles.tierBadge,
          { backgroundColor: tierColor(sponsor.subscriptionTier) },
        ]}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}>
          {sponsor.subscriptionTier.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
