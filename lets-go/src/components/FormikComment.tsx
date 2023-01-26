import React from "react";
import { Formik } from "formik";

const CommentForm = () => {
  <div>
    <Formik
      initialValues={{
        name: "",
        comment: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 300));
        alert(JSON.stringify(values,null,2));
      }}
    >

      <Form>
        
      </Form>
    </Formik>
  </div>;
};

export default CommentForm;
