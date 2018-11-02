import React from 'react';
import ProductCard from 'components/ProductCard/ProductCard';
import CardTitle from 'components/CardTitle/CardTitle';
import n1784 from 'images/n1784.jpg';
import bicycle from 'images/bicycle.jpg';
import { inject, observer } from 'mobx-react';

const product = [
  {
    key: '1',
    title: 'TOMIX 小火車驚爆價!!',
    prize: 'NT 2200',
    image: n1784,
    recommand: true,
  },
  {
    key: '2',
    title: '捷安特腳踏車大出清!! 錯過這次再等100年年年!!',
    prize: 'NT 5900',
    image: bicycle,
    recommand: true,
  }
];

@inject('translateStore')
@observer
export default class Card extends React.Component {
  state = {

  }

  render() {
    const { translateObj } = this.props.translateStore;
    return (
      <div>
        <CardTitle title={translateObj.CARD} />
        <br />
        <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>
          {
            product.map(prd => (
              <div key={prd.key} style={{ paddingRight: '20px' }}>
                <ProductCard title={prd.title} prize={prd.prize} image={prd.image} recommand={prd.recommand} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
