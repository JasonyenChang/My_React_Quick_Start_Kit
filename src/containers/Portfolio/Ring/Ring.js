import React from 'react';
import RingChart from 'components/RingChart/RingChart';
import CardTitle from 'components/CardTitle/CardTitle';
import { inject } from 'mobx-react';
import data from './data';

@inject('translateStore')
export default class Ring extends React.Component {
  state = {
    ringData: data
  }

  onPieClick= (chartId, item) => {
    alert('chart: ' + chartId);
    alert('item: ' + item);
  }

  onLegendClick = () => { }

  render() {
    const { ringData } = this.state;
    const { translateObj } = this.props.translateStore;
    return (
      <div>
        <CardTitle title={translateObj.RING_CHART} />
        <br />
        <RingChart chartId="Demo" chartData={ringData.pic} onPieClick={this.onPieClick} onLegendClick={this.onLegendClick} />
      </div>
    );
  }
}
