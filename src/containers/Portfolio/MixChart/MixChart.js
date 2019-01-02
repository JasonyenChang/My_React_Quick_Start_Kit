import React from 'react';
import LineBarChart from 'components/LineBarChart/LineBarChart';
import LineStackBarChart from 'components/LineStackBarChart/LineStackBarChart';
import CardTitle from 'components/CardTitle/CardTitle';
import { inject } from 'mobx-react';
import bar from './data';
import stack from './stack_data';

@inject('translateStore')
export default class MixChart extends React.Component {
  render() {
    const { translateObj } = this.props.translateStore;
    return (
      <div>
        <CardTitle title={translateObj.MIX_CHART} />
        <br />
        <LineBarChart barData={bar.data} />
        <br />
        <LineStackBarChart dataSource={stack.data} />
      </div>
    );
  }
}
