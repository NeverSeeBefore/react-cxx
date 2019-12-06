import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Provider } from "./formContext.js";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  state = {
    formData: {},
    changeFormData: (name, value) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value
        }
      });
    },
    submit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formData);
    }
  };
  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}
Form.Input = FormInput;
Form.Button = FormButton;

export default Form;
