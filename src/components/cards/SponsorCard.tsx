import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Sponsor } from '@knighthacks/hackathon';

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

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderRadius: 25,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  headerImageContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  headerImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  headerTitle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  tierBadge: {
    height: 25,
    borderRadius: 10,
    right: 15,
    top: 15,
    position: 'absolute',
    padding: 5,
  },
});

/**
 * Represents a singular card for a given sponsor.
 */
export default function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerImageContainer}>
          <Image style={styles.headerImage} source={{ uri: sponsor.logo }} />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.heading}>{sponsor.sponsorName}</Text>
          <Text>{sponsor.email}</Text>
        </View>
      </View>
      <View
        style={[
          styles.tierBadge,
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
