import React from "react";
import { Formik, Field, Form } from "formik";

const CommentForm = () => {
  console.log("happening!");
  return (
    <div>
      <h1>Test Form</h1>
      <Formik
        initialValues={{
          name: "",
          comment: "",
        }}
        onSubmit={() => console.log("hello there")}
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <Field id="name" name="name" placeholder="name here" />

          <label htmlFor="comment">Comment:</label>
          <Field id="comment" name="comment" placeholder="comment here" />

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CommentForm;
