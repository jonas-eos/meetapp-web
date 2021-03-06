import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

/** Field validation */
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email addres!')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters!')
    .required('Password is required!'),
});

export default function SignIn() {
  /**
   * @function
   * @param {object} data
   */
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <picture>
        <img src={logo} alt="Meetapp" />
      </picture>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your mail address" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">SignIn</button>
        <Link to="/register">Create a free account</Link>
      </Form>
    </>
  );
}
