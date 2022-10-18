import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((previous) => [...previous, 
      {id: Math.random().toString(), name: uName, age: uAge}
    ])
  }

  const onItemAction = (itemId) => {
    console.info(itemId)
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onActionPerform={onItemAction} />
    </Fragment>
  );
}

export default App;
