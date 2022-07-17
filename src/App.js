import './App.css';
import PlanLayout from './pages/layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';


// <Panlayout>
function App() {
  return (
    <Router>
      <PlanLayout>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/invite' component={PhoneConfirmation} />
        <Route exact path='/code_confirm' component={CodeConfirm} />
      </PlanLayout>
    </Router>
    
  );
}

export default App;
