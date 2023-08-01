import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { TicketsLayout } from '../layouts/TicketsLayout';
import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import Tickets from '../pages/Tickets';
import { TicketDetails } from '../pages/Tickets/Details';
import NewTicket from '../pages/Tickets/New';
import ValidateTicket from '../pages/Tickets/Validate';
import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route element={<AuthLayout />}>
            <Route
              path='/sign-in'
              element={<SignIn />}
            />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route
            path='/'
            element={<Dashboard />}
          />

          <Route element={<TicketsLayout />}>
            <Route
              path='/tickets'
              element={<Tickets />}
            />
            <Route
              path='/tickets/new'
              element={<NewTicket />}
            />
            <Route
              path='/tickets/validate'
              element={<ValidateTicket />}
            />
            <Route
              path='/tickets/:ticketId'
              element={<TicketDetails />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
