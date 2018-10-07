import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

export default class Selector extends React.PureComponent {
  render() {
    const {
      selectorWidth, defaultValue, onSelectChange, optionList
    } = this.props;
    return (
      <Select className="listSelector" defaultValue={defaultValue} style={{ width: selectorWidth }} onChange={onSelectChange}>
        {
          optionList.map(op => (
            <Option key={op.value} value={op.value}>{op.text}</Option>
          ))
        }
      </Select>
    );
  }
}

Selector.defaultProps = {
  onSelectChange: () => {},
  defaultValue: '',
  selectorWidth: 120,
  optionList: []
};

Selector.propTypes = {
  onSelectChange: PropTypes.func,
  defaultValue: PropTypes.string,
  selectorWidth: PropTypes.number,
  optionList: PropTypes.instanceOf(Array)
};
