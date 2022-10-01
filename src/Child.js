import React from 'react'

const Child = ({ users, isUserLoggedIn }) => {
    console.log(users);
  return (
    <div>
        {isUserLoggedIn ? (
            users.map((user)=>{
                return <h1>{user}</h1>
            })
        ): (
            <h1>You are not authorized</h1>
        )}
        
    </div>
  )
}

export default Child
