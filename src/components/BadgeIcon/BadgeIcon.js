import React from 'react';
import * as Styles from './style';

export default class BadgeIcon extends React.PureComponent {
  render() {
    const { photo, number } = this.props;
    return (
      <Styles.Container>
        <Styles.Photo src={photo} />
        <Styles.Number className="badgeNumber">{number}</Styles.Number>
      </Styles.Container>
    );
  }
}
