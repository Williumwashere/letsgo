import React from "react";
import { Formik, Field, Form } from "formik";

const CommentForm = () => {
  return (
    <div>
      <h1>Test Form</h1>
      <Formik
        initialValues={{
          name: "",
          comment: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <form>
          <label htmlFor="name">Name:</label>
          <Field id="name" name="name" placeholder="name here" />

          <label htmlFor="comment">Comment:</label>
          <Field id="comment" name="comment" placeholder="comment here" />
        </form>
      </Formik>
    </div>
  );
}

export default CommentForm;
