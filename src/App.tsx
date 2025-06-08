import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';

function App() {
  return (
    <div className = 'App'>
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar><Heading>Oscar goes to leonardo Dicaprio!</Heading></Oscar>
      <Greet name="Viswas" isLoggedIn={false} />
      <Button handleClick={(event,id) => {
        console.log('Button Clicked', id);
      }} />
    </div>
  );

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
