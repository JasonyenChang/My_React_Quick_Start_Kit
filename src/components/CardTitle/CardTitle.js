import React from 'react';
import * as Styles from './style';

export default class CardTitle extends React.PureComponent {
  render() {
    return (
      <Styles.Container>
        <Styles.Line />
        <Styles.Title>{this.props.title}</Styles.Title>
      </Styles.Container>
    );
  }
}
