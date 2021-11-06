import 'react-native';
import React from 'react';
import SponsorCard from '../../../src/components/cards/SponsorCard';
import renderer from 'react-test-renderer';
import { APISponsorData } from '@knighthacks/hackathon';

const testSponsor: APISponsorData = {
  sponsor_name: 'Name',
  logo: 'URL',
  email: 'Email',
  subscription_tier: 'Subscription tier',
  sponsor_website: 'www.google.com',
  description: 'Description',
  socials: undefined,
};

it('renders the sponsor card', async () => {
  const sponsorCard = renderer.create(<SponsorCard sponsor={testSponsor} />);
  const testInstance = sponsorCard.root;
  expect(sponsorCard).toBeDefined();
  expect(testInstance.findByType(SponsorCard).props.sponsor.sponsor_name).toBe(
    'Name'
  );
  expect(testInstance.findByType(SponsorCard).props.sponsor.logo).toBe('URL');
  expect(testInstance.findByType(SponsorCard).props.sponsor.email).toBe(
    'Email'
  );
  expect(
    testInstance.findByType(SponsorCard).props.sponsor.sponsor_website
  ).toBe('www.google.com');
  expect(
    testInstance.findByType(SponsorCard).props.sponsor.subscription_tier
  ).toBe('Subscription tier');
});
