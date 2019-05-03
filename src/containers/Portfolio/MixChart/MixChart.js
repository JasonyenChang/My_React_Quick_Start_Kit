import React from 'react';
import LineBarChart from 'components/LineBarChart/LineBarChart';
import LineStackBarChart from 'components/LineStackBarChart/LineStackBarChart';
import CardTitle from 'components/CardTitle/CardTitle';
import { inject } from 'mobx-react';
import bar from './data';
import stack from './stack_data';
import run from './run_data';

@inject('translateStore')
export default class MixChart extends React.Component {
  render() {
    const { translateObj } = this.props.translateStore;
    console.log('run.data', run.data);
    
    return (
      <div>
        <CardTitle title={translateObj.MIX_CHART} />
        <br />
        <LineBarChart barData={bar.data} />
        <br />
        <LineStackBarChart runData={run.data} />
      </div>
    );
  }
}
