import React from 'react';
import {
  Chart, Geom, Axis, Legend, Label
} from 'bizcharts';
import { CHART_COLOR, CHART_COLOR_LIST } from 'utils/common';
import PropTypes from 'prop-types';
import * as Style from './style';
import './LineBarChart.less';

export default class LineBarChart extends React.PureComponent {
  scale = () => ({
    item: {
      alias: '',
    },
    count: {
      min: 0,
      tickCount: 7,
      alias: '',
    },
    percentage: {
      min: 0,
      tickCount: 7,
      alias: '',
    },
  });

  geomLabel = () => {
    let colorIndex = 1;
    return {
      count: {
        labelLine: {
          lineWidth: 1,
          // 线的粗细
          stroke: '#ffffff',
          // 线的颜色
          lineDash: [2, 2], // 虚线样式
          offset: 0,
        },
        content: ['item*count', (item, count) => `${count}`],
        textStyle: () => {
          const style = { textAlign: 'center' };
          if (colorIndex <= 10) style.fill = CHART_COLOR[colorIndex];
          colorIndex += 1;
          if (colorIndex > 10) colorIndex = 1;
          return style;
        },
      },
      percentage: {
        labelLine: {
          lineWidth: 1,
          // 线的粗细
          stroke: '#ffffff',
          // 线的颜色
          lineDash: [2, 2], // 虚线样式
          offset: 0,
        },
        content: ['item*percentage', (item, percentage) => `${percentage.toFixed(2)}%`],
      },
    };
  };

  label = () => ({
    item: {
      formatter: val => `${val}`,
      // 格式化坐标轴显示
      textStyle: {
        fill: '#000000',
        rotate: 7,
        textAlign: 'start',
      },
      autoRotate: false,
    },
    count: {
      formatter: val => `${val}`,
      // 格式化坐标轴显示
      textStyle: {
        fill: '#000000',
        rotate: 0,
      },
      autoRotate: false,
    },
    percentage: {
      formatter: val => `${val}%`,
      // 格式化坐标轴显示
      textStyle: {
        fill: '#A6A6A6',
        rotate: 0,
      },
      autoRotate: false,
    },
  });

  render() {
    const { barData } = this.props;
    const totalCount = barData.reduce((total, item) => { return total + item.count; }, 0);
    const newBarData = barData;
    let tempCount = 0;
    newBarData.map(data => {
      tempCount += data.count;
      data.percentage = (tempCount / totalCount) * 100;
      return data;
    });
    return (
      <Style.Container>
        <Chart className="barChart" height={500} width={barData.length * 120} data={newBarData} scale={this.scale()} padding={[60, 70, 160, 60]}>
          <Axis name="item" label={this.label().item} />
          <Axis name="count" label={this.label().count} />
          <Axis name="percentage" label={this.label().percentage} />
          <Legend position="bottom" visible={false} />
          {/* <Tooltip crosshairs={crosshairs} shared={false} position="top" /> */}
          <Geom type="interval" position="item*count" color={['item', CHART_COLOR_LIST]}>
            <Label content={this.geomLabel().count.content} labelLine={this.geomLabel().count.labelLine} textStyle={this.geomLabel().count.textStyle} offset={10} />
          </Geom>
          <Geom type="line" position="item*percentage" color="#000000" shape="smooth" size={2} label={this.label().percentage} />
          <Geom type="point" position="item*percentage" color="#000000" shape="circle" size={4}>
            <Label content={this.geomLabel().percentage.content} labelLine={this.geomLabel().percentage.labelLine} offset={20} />
          </Geom>
        </Chart>
      </Style.Container>
    )
  }
}
