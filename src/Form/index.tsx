import React, { createContext } from 'react';
import useForm from '../useForm';
import Item from './Item';

import { FormContext } from './formContext';

function Form({ form, onFinish, children }: any) {
  const [formInstance] = useForm(form)
  formInstance.setCallbacks({
    onFinish
  })
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      formInstance.submit()
    }}>
      <FormContext.Provider value={formInstance}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

Form.useForm = useForm;

Form.Item = Item

export default Form;
