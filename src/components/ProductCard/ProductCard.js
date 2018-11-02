import React from 'react';
import { getShortTest } from 'utils/common';
import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
import * as Styles from './style';

@inject('translateStore')
@observer
export default class ProductCard extends React.PureComponent {
  render() {
    const { translateObj } = this.props.translateStore;
    const { title, prize, image, recommand, name } = this.props;
    return (
      <Styles.Container>
        {recommand ? <Styles.Recommand>{translateObj.RECOMMAND}</Styles.Recommand> : <Styles.NoRecommand />}
        <Styles.Image src={image} />
        <Styles.Title>{getShortTest(title)}</Styles.Title>
        <Styles.Prize>{prize}</Styles.Prize>
        <Styles.PurchaseButton>
          <Button type="primary" size="small" onClick={() => { alert(title) }}>{translateObj.BUY}</Button>
        </Styles.PurchaseButton>
      </Styles.Container>
    );
  }
}
