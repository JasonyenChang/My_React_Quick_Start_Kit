import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend,
  Guide,
} from 'bizcharts';
import DataSet from '@antv/data-set';

export default class RingChart extends React.PureComponent {
  getDataView = () => {
    const { chartData } = this.props;
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(chartData).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    return dv;
  }

  getScale = () => {
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + '%';
          return val;
        },
      },
    };
    return cols;
  }

  render() {
    const { chartId, onPieClick, onLegendClick } = this.props;
    const { Html } = Guide;
    const guide = `<span style="color: #262626; font-size: 0.6em; font-weight: bold;">${chartId}</span>`;
    return (
      <Chart
        className="pieChart"
        width={300}
        height={300}
        data={this.getDataView()}
        scale={this.getScale()}
        padding={[-50, 100, 80, 0]}
        onPlotClick={ev => { onPieClick(chartId, ev.data._origin.item); }}
      >
        <Coord type="theta" radius={0.75} innerRadius={0.6} />
        <Axis name="percent" />
        <Legend
          visible={true}
          title={false}
          hoverable={false}
          useHtml={true}
          position="right-center"
          onClick={onLegendClick}
          containerTpl={'<div class="g2-legend"><table class="g2-legend-list"></table></div>'}
          itemTpl={(value, color, checked, index) => {
            const obj = this.getDataView().rows[index];
            const percent = `${obj.percentage}%`;
            checked = checked ? 'checked' : 'unChecked';
            return '<tr class="g2-legend-list-item item-' + index + ' ' + checked + '" data-value="' + value + '" data-color=' + color + ' >' +
              '<td style="width:150px;"><i class="g2-legend-marker" style="width:16px;height:16px;display:inline-block;margin-right:10px;border: 3px solid ' + color + ';"></i>' + '<span class="g2-legend-text" style="color: #666">' + value + '</span></td>' +
              '<td style="text-align: right">' + percent + '</td>' +
              '<td style="text-align: left;padding-left: 10px;color: #666;width:80px">(#' + obj.count + ')</td>' +
              '</tr>';
          }}
          g2-legend={{
            position: 'absolute',
          }}
          g2-legend-list={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          }}
          g2-legend-list-item={{
            cursor: 'default',
            fontSize: '12px',
          }}
        />
        <Tooltip
          showTitle={false}
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Guide>
          <Html
            position={['50%', '50%']}
            html={guide}
            alignX="middle"
            alignY="middle"
          />
        </Guide>
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            'item*percent',
            (item, percent) => {
              percent = percent * 100 + '%';
              return {
                name: item,
                value: percent,
              };
            },
          ]}
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
        />
      </Chart>
    );
  }
}
