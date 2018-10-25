import React from 'react';
import * as Styles from './style';

export default class Card extends React.PureComponent {
  render() {
    const { content } = this.props;
    return (
      <Styles.Container>
        <Styles.Card>
          {content}
        </Styles.Card>
      </Styles.Container>
    );
  }
}
