import React from 'react';
import BadgeIcon from 'components/BadgeIcon/BadgeIcon';
import man from 'images/man.png';
import woman from 'images/woman.png';
import CardTitle from 'components/CardTitle/CardTitle';
import { Button } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('translateStore')
@observer
export default class Badge extends React.Component {
  state = {
    badgeNumber: 1,
  }

  add = (number) => {
    if (number < 10) {
      number += 1;
    }
    this.setState({ badgeNumber: number });
  }

  minus = (number) => {
    if (number > 1) {
      number -= 1;
    }
    this.setState({ badgeNumber: number });
  }

  render() {
    const { translateObj } = this.props.translateStore;
    const { badgeNumber } = this.state;
    return (
      <div>
        <CardTitle title={translateObj.BADGE} />
        <br />
        <BadgeIcon
          photo={man}
          number={badgeNumber}
        />
        <BadgeIcon
          photo={woman}
          number={badgeNumber}
        />
        <Button type="primary" size="small" onClick={() => this.add(badgeNumber)}>+</Button>{' '}
        <Button type="primary" size="small" onClick={() => this.minus(badgeNumber)}>-</Button>
      </div>
    );
  }
}
