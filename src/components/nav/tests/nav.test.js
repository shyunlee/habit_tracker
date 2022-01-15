import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../Nav';

describe('Nav', () => {
  it('renders', () => {
    const component = renderer.create(<Nav totalCount={4} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
