import React from 'react';
import { shallow } from 'enzyme';
import BadgeIcon from './BadgeIcon';

describe('BadgeIcon Component', () => {
  test('Display badge', () => {
    const component = shallow(<BadgeIcon number={9} />);
    expect(component.render().find('.badgeNumber').text()).toBe('9');
  });
});
