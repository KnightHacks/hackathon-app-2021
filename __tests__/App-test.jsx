import 'react-native';
import React from 'react';
import App from '../App.jsx';
import renderer from 'react-test-renderer';

it('renders the home screen', async () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});