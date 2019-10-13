import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import MeetupDetails from '~/pages/Meetup/Details';
import MeetupRegister from '~/pages/Meetup/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route
        path="/meetup/register"
        exact
        component={MeetupRegister}
        isPrivate
      />
      <Route path="/meetup/details" exact component={MeetupDetails} isPrivate />
    </Switch>
  );
}
