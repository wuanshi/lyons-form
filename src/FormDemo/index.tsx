import Form from 'lyons-form/Form';
import useForm from 'lyons-form/useForm';
import React from 'react';
function Demo() {
  const [form] = useForm();
  console.log('form', form);

  return (
    <div>
      <Form form={form}>
        <Form.Item name="test">
          <input />
        </Form.Item>
      </Form>
      <button
        onClick={() => {
          console.log(form.getFieldValue('test'));
        }}
      >
        getField
      </button>
    </div>
  );
}

export default Demo;
