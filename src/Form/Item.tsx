import React, { Component } from 'react';

import { FormContext } from './formContext';

class Item extends Component {
  static contextType = FormContext;

  componentDidMount() {
    this.context.registerField(this)
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = (childProps) => {
    const { name } = this.props
    return {
      value: this.context.getFieldValue(name),
      onChange: (e) => {
        this.context.setFieldValue(name, e.target.value)
      },
      ...childProps,
    }
  }

  render() {
    const { children } = this.props
    return React.cloneElement(children, this.getControlled(children.props))
  }
}

export default Item;
