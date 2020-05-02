import * as React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Your password is not safe enough"
    ),
  keepConnected: Yup.bool(),
});

const SignInForm = () => {
  const initialValues = {
    email: "",
    password: "",
    keepConnected: false,
  };

  return (
    <div>
      <div>logo</div>
      <p>Enter your Serverphobia Account</p>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values: any, { setSubmitting }: any) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" />
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" />
          <Field type="checkbox" />
          <label htmlFor="keepConnected">
            Keep me connected to Ilium Client
          </label>
          <button type="submit">Submit</button>

          <p>Don't have an account? Sign up!</p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
