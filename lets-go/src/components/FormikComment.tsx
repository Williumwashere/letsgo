import React from "react";
import { Formik,Field,Form } from "formik";

const CommentForm = () => {
  <div>
    <Formik
      initialValues={{
        name: '',
        comment: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values,null,2));
      }}
    >

      <Form>
        <label htmlFor="name">Name:</label>
        <Field id="name" name="name" placeholder=""/>

        <label htmlFor="comment">Comment:</label>
        <Field></Field>
      </Form>
    </Formik>
  </div>;
};

export default CommentForm;
