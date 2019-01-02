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
    const data = [
      {
        country: "Europe",
        year: "1750",
        value: 163,
        cost: 95,
      },
      {
        country: "Europe",
        year: "1800",
        value: 203,
        cost: 90,
      },
      {
        country: "Europe",
        year: "1850",
        value: 276,
        cost: 80,
      },
      {
        country: "Europe",
        year: "1900",
        value: 408,
        cost: 70,
      },
      {
        country: "Europe",
        year: "1950",
        value: 547,
        cost: 60,
      },
      {
        country: "Europe",
        year: "1999",
        value: 729,
        cost: 50,
      },
      {
        country: "Europe",
        year: "2050",
        value: 628,
        cost: 40,
      },
      {
        country: "Europe",
        year: "2100",
        value: 828,
        cost: 10,
      },
      {
        country: "Asia",
        year: "1750",
        value: 95,
        cost: 95
      },
      {
        country: "Asia",
        year: "1800",
        value: 635,
        cost: 90,
      },
      {
        country: "Asia",
        year: "1850",
        value: 809,
        cost: 80,
      },
      {
        country: "Asia",
        year: "1900",
        value: 947,
        cost: 70,
      },
      {
        country: "Asia",
        year: "1950",
        value: 1402,
        cost: 60,
      },
      {
        country: "Asia",
        year: "1999",
        value: 3634,
        cost: 50,
      },
      {
        country: "Asia",
        year: "2050",
        value: 5268,
        cost: 40,
      },
      {
        country: "Asia",
        year: "2100",
        value: 7268,
        cost: 10,
      },
    ];
    const ds = new DataSet();
    const dv = ds
      .createView()
      .source(data)
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
    const cols = {
      percent: {
        min: 0,

        formatter(val) {
          return (val * 100).toFixed(2) + "%";
        }
      }
    };
    return (
      <div>
        <Chart height={400} data={data} padding={[10, 40, 70, 50]} forceFit>
          <Legend />
          <Axis name="year" />
          <Axis name="value" />
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
