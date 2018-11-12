import React from 'react';
import LineBarChart from 'components/LineBarChart/LineBarChart';
import CardTitle from 'components/CardTitle/CardTitle';
import { inject } from 'mobx-react';
import bar from './data';

@inject('translateStore')
export default class MixChart extends React.Component {
  render() {
    const { translateObj } = this.props.translateStore;
    return (
      <div>
        <CardTitle title={translateObj.MIX_CHART} />
        <br />
        <LineBarChart barData={bar.data} />
      </div>
    );
  }
}
