import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
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
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your mail address" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">SignIn</button>
        <Link to="/">Already registered</Link>
      </Form>
    </>
  );
}
