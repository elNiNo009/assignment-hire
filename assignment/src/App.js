import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import CompanyDashboard from './pages/CompanyDashboard';
import MemberDash from './components/Members/MemberDash';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
       
        <Route path='/companyDashboard'>
          <CompanyDashboard/>
        </Route>

        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
        <Route path='/companyRecords/:id'>
           <MemberDash/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
