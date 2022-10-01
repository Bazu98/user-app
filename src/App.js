import React, { useState }  from "react";
import List from "./List";
import Validation from "./Validation";



function App(){
  const [users,setUsers] = useState([]);
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => id !== user.id));
  }
  return(
    <div className="App">
    <Validation setUsers={setUsers}/>
    {users.map((user) => {
      return (
        <div key={user.id}>
          <h1>{user.name} {user.surName} {user.age} {user.email} {user.gender}</h1>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      )
    })}
    <List/>
    </div>
  )
}

export default App;