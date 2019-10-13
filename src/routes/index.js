import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />

      <Route path="/meetup/register" exact component={MeetupRegister} />
      <Route path="/meetup/details" exact component={MeetupDetails} />
    </Switch>
  );
}
