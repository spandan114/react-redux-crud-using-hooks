import React from 'react';
import './styles/App.scss'
import Navbar from './components/layout/Navbar';
import Contacts from './components/Contacts';
import {Provider} from 'react-redux';
import store from "./store";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import AddContacts from './components/AddContacts';
import EditContacts from './components/Editcontact';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Navbar/>
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContacts} />
                <Route exact path="/contacts/edit/:id" component={EditContacts} />
              </Switch>
            </div>
          </div>
        </Router>
        </Provider>
        
  );
}

export default App;
