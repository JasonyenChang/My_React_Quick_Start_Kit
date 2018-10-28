import React from 'react';
import * as Styles from './style';

export default class Card extends React.PureComponent {
  render() {
    const { content } = this.props;
    return (
      <Styles.Card>
        {content}
      </Styles.Card>
    );
  }
}
