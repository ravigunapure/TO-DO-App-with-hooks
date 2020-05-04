import React, { useState } from 'react'

const AddUserForm = props => {
const initialState= {id:null,user:'',username:''}
    const [user,setUser] = useState(initialState)

    const handleInputChange = event => {
        const { name, value } = event.target
      
        setUser({ ...user, [name]: value })
      }
      const submitForm =event => {
        event.preventDefault()
        if (!user.name || !user.username) return
    
        props.addUser(user)
        setUser(initialState)
      }
  return (
    <form onSubmit={submitForm}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm