import './App.css';
import PlanLayout from './pages/layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';


// <Panlayout>
function App() {
  return (
    <Router>
      <Route exact path={[
        "/",
        "/get_username",
        "/code_confirm",
        "/allow_notification"
      ]}>
      <PlanLayout>
        <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/invite' component={PhoneConfirmation} />
        <Route exact path='/code_confirm' component={CodeConfirm} />
        <Route exact path='/allow_notification' component={AllowNotification} />
        </Switch>
      </PlanLayout>
      </Route>
    </Router>
    
  );
}

export default App;
