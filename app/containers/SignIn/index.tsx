import * as React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Submit from '../../components/Button/Submit';
import { Input, Label } from './Input';

const SignInSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Your password is not safe enough'
    ),
  keepConnected: Yup.bool(),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

const StyledParagraph = styled.p`
  margin: 0;
  margin-top: 5rem;
  font-size: 0.9rem;
  font-weight: 500;
`;

const StyledParagraphList = styled.div`
  font-weight: 700;
  margin-bottom: 2.5rem;
  user-select: none;
`;

const StyledLogo = styled.div`
  background-image: url('../public/icon.png');
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 3.5em;
  min-width: 3.5em;
  margin-bottom: 3.5rem;
`;

const StyledSpan = styled.span`
  color: #c50300;
`;

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
    keepConnected: false,
  };

  return (
    <div
      style={{
        width: '100%',
        fontFamily: 'Montserrat',
        display: 'flex',
        flexDirection: 'column',
        margin: '3.5rem',
      }}
    >
      <StyledLogo />
      <StyledParagraphList>
        <StyledHeader>Enter your</StyledHeader>
        <StyledHeader>Serverphobia Account</StyledHeader>
      </StyledParagraphList>
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
        <StyledForm>
          {/* <label htmlFor="email">Email</label> */}
          <Field name="email" type="email" placeholder="Email" as={Input} autoFocus />
          {/* <label htmlFor="password">Password</label> */}
          <Field name="password" type="password" placeholder="Password" as={Input} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <Field type="checkbox" />
            <Label htmlFor="keepConnected">Keep me connected to Serverphobia Client</Label>
          </div>
          <Submit />
          <StyledParagraph>
            Don't have an account?
            <StyledSpan> Sign up!</StyledSpan>
          </StyledParagraph>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default SignInForm;
