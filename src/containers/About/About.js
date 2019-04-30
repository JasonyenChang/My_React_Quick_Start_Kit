import React from 'react';
import { inject } from 'mobx-react';
import jason from 'images/blackman.png';
import Card from 'components/Card/Card';
import CardTitle from 'components/CardTitle/CardTitle';
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

  experience = () => {
    const { translateObj } = this.props.translateStore;
    return <div>
            <p>{translateObj.EXPERIENCE_3}</p>
            <p>{translateObj.EXPERIENCE_2}</p>
            <p>{translateObj.EXPERIENCE_1}</p>
           </div>;
  }

  skills = () => {
    const { translateObj } = this.props.translateStore;
    return <div>
            <p>{translateObj.SKILLS_1}</p>
            <p>{translateObj.SKILLS_2}</p>
           </div>;
  }

  motto = () => {
    const { translateObj } = this.props.translateStore;
    return <div>
            <p>{translateObj.MOTTO_1}</p>
           </div>;
  }

  contact = () => {
    const { translateObj } = this.props.translateStore;
    return <div>
            <p>{translateObj.CONTACT_1}</p>
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
          <CardTitle title={translateObj.EDUCATION} />
          <Styles.Margin />
          <Card content={this.getEducation()} />
          <Styles.Margin /><Styles.Margin /><Styles.Margin />
          <CardTitle title={translateObj.EXPERIENCE} />
          <Styles.Margin />
          <Card content={this.experience()} />
          <Styles.Margin /><Styles.Margin /><Styles.Margin />
          <CardTitle title={translateObj.SKILLS} />
          <Styles.Margin />
          <Card content={this.skills()} />
          <Styles.Margin /><Styles.Margin /><Styles.Margin />
          <CardTitle title={translateObj.MOTTO} />
          <Styles.Margin />
          <Card content={this.motto()} />
          <Styles.Margin /><Styles.Margin /><Styles.Margin />
          <CardTitle title={translateObj.CONTACT} />
          <Styles.Margin />
          <Card content={this.contact()} />
        </Styles.BottomContainer>
      </div>
    );
  }
}
