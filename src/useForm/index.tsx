// @ts-nocheck
import { useRef, useState } from 'react';

class FormStore {
  constructor(forceUpdate) {
    // 存储 form 值
    this.store = {}
    // form组件的一些api存储对象
    this.callbacks = {}
    // 强制刷新组件
    this.forceUpdate = forceUpdate

    // 注册的表单的集合
    this.fieldEntities = []
  }
  // 注册表单
  registerField = (entity) => {
    this.fieldEntities.push(entity)
  }
  // 获取表单的值
  getFieldValue = (key) => {
    return this.store[key]
  }
  // 设置组件的值
  setFieldValue = (key, value) => {
    this.store[key] = value
    this.fieldEntities.forEach(item => item.onStoreChange())
  }

  setCallbacks = (callbacks) => {
    this.callbacks = callbacks
  }

  // submit
  submit = () => {
    this.callbacks.onFinish(this.store)
  }

  getForm() {
    return {
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
      forceUpdate: this.forceUpdate,
    }
  }
}

const useForm: (form?: any) => any = (form) => {
  const formRef = useRef<any>()
  const [,forceUpdate] = useState({})
  if(form) {
    formRef.current = form
  } else {
    formRef.current = new FormStore(forceUpdate).getForm()
  }
  return [formRef.current]
}

export default useForm