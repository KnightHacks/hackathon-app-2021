import 'react-native';
import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

it('renders the home screen', async () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});