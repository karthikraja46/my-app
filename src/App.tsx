import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
function App() {
  const personName = {
    first: 'John',
    last: 'Doe'
  };

  const nameList = [
    {
      first: 'Karthik',
      last: 'Raja'
    },
    {
      first: 'John',
      last: 'Doe'
    },
    {
      first: 'Jane',
      last: 'Smith'
    }
  ];

  return (
    <div className='App'>
      <Greet name="John" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
