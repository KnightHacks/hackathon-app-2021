jest.useFakeTimers();
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Home';

describe('it renders the app', () => {
  it('renders the home screen', async () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
