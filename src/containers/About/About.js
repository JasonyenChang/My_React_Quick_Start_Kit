import React from 'react';
import { inject } from 'mobx-react';
import jason from 'images/my_photo.jpg';
import Card from 'components/Card/Card';
import * as Styles from './style';

@inject('translateStore')
export default class About extends React.Component {
  getEducation = () => {
    const { translateObj } = this.props.translateStore;
    return <div>
            <p>{translateObj.MASTER}</p>
            <p>{translateObj.BACHELOR}</p>
           </div>;
  }

  render() {
    const { translateObj } = this.props.translateStore;
    return (
      <div>
        <Styles.HeaderContainer>
          <Styles.Photo src={jason} />
          <Styles.Description>
            {translateObj.DESCRIPTION}
          </Styles.Description>
        </Styles.HeaderContainer>
        <Styles.BottomContainer>
          <Card content={this.getEducation()} />
        </Styles.BottomContainer>
      </div>
    );
  }
}
