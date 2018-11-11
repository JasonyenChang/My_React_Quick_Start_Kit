import React from 'react';
import RingChart from 'components/RingChart/RingChart';
import data from './data';

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
    return (
      <div>
        <RingChart chartId="Demo" chartData={ringData.pic} onPieClick={this.onPieClick} onLegendClick={this.onLegendClick} />
      </div>
    );
  }
}
