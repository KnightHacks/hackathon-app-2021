import 'react-native';
import React from 'react';
import SponsorCard from '../../../src/components/cards/SponsorCard';
import renderer from 'react-test-renderer';
import { Sponsor } from '@knighthacks/hackathon';

const testSponsor: Sponsor = {
  sponsorName: 'Name',
  logo: 'URL',
  email: 'Email',
  subscriptionTier: 'Subscription tier',
  username: 'Username',
};

it('renders the sponsor card', async () => {
  const sponsorCard = renderer.create(<SponsorCard sponsor={testSponsor} />);
  const testInstance = sponsorCard.root;
  expect(sponsorCard).toBeDefined();
  expect(testInstance.findByType(SponsorCard).props.sponsor.sponsorName).toBe(
    'Name'
  );
  expect(testInstance.findByType(SponsorCard).props.sponsor.logo).toBe('URL');
  expect(testInstance.findByType(SponsorCard).props.sponsor.email).toBe(
    'Email'
  );
  expect(
    testInstance.findByType(SponsorCard).props.sponsor.subscriptionTier
  ).toBe('Subscription tier');
  expect(testInstance.findByType(SponsorCard).props.sponsor.username).toBe(
    'Username'
  );
});
