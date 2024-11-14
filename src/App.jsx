import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import UserEdit from './Components/UserEdit';
import UserView from './Components/UserView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<UserForm />} />
          <Route path="/edit-user/:id" element={<UserEdit />} />
          <Route path="/view/:id" element={<UserView/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;