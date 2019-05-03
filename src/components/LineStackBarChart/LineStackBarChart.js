import React from 'react';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import DataSet from '@antv/data-set';

export default class LineStackBarChart extends React.PureComponent {
  label = () => ({
    percentage: {
      formatter: val => `${val}%`,
      // 格式化坐标轴显示
      textStyle: {
        fill: '#A6A6A6',
        rotate: 0
      },
      autoRotate: false
    }
  });

  render() {
    const { runData } = this.props;
    const ds = new DataSet();
    const dv = ds
      .createView()
      .source(runData)
      .transform({
        type: "percent",
        field: "value",
        // 统计销量
        dimension: "country",
        // 每年的占比
        groupBy: ["year"],
        // 以不同产品类别为分组
        as: "percent"
      });
    // const cols = {
    //   percent: {
    //     min: 0,

    //     formatter(val) {
    //       return (val * 100).toFixed(2) + "%";
    //     }
    //   }
    // };
    const scale = {
      value: {
        type: 'linear',
        min: 0,
        tickCount: 6,
        formatter: (value) => `${value.toLocaleString('en-US')}`,
      },
      cost: {
        type: 'linear',
        min: 0,
        tickCount: 6,
      },
    };
    const itemTpl = '<li data-index={index}>'
      + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
      + '{name}: {value}'
      + '</li>';
    return (
      <div>
        <Chart height={400} data={runData} padding={[10, 40, 70, 50]} scale={scale} forceFit>
        <Legend />
          <Axis name="year" />
          <Axis name="value" />
          <Tooltip
            containerTpl='<div class="g2-tooltip"><p class="g2-tooltip-title"></p><table class="g2-tooltip-list"></table></div>'
            itemTpl={itemTpl}
            offset={50}
            showTitle={false}
            shared={false}
            g2-tooltip={{
              position: 'absolute',
              visibility: 'hidden',
              border: '1px solid #efefef',
              backgroundColor: 'white',
              color: '#000',
              opacity: '0.8',
              padding: '5px 15px',
              width: '180px'
            }}
            g2-tooltip-list={{
              margin: '10px'
            }}
          />
          <Geom
            type="intervalStack"
            position="year*value"
            color={"country"}
          />
          <Geom
            type="line"
            position="year*cost"
            color="#fdae6b"
            size={3}
            shape="smooth"
          />
          <Geom
            type="point"
            position="year*cost"
            color="#fdae6b"
            size={3}
            shape="circle"
          >
            <Label content="cost" />
          </Geom>
        </Chart>
      </div>
    );
  }
}
