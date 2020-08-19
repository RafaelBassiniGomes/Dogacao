import React from 'react';
import InputMask from 'react-input-mask';

class DateInput extends React.Component {
  state = {
    value: ''
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return <InputMask {...this.props}
    mask="99/99/9999"
    maskChar={null}
    value={this.state.value ? this.state.value : this.props.dado}
    onChange={this.onChange} />;
  }
}
export default DateInput;
