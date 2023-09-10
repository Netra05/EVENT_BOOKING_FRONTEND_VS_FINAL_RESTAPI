import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Join.css"
const API_URL = 'http://localhost:8080/api/v1/event'; // Replace with your Spring Boot backend URL

function Join() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ eventname:'', eventtype:'' , eventcapacity:'', eventbudget:'' ,eventstatus:'' });
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        // GET operation to fetch data from the backend

        axios.get(API_URL)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
}, []);

    const handleCreate = () => {
        // POST operation to create a new user
        axios.post(API_URL, newUser)
            .then(response => {
              console.error(response.data);
                setUsers([...users, response.data]);
                setNewUser({ eventname:'', eventtype:'' , eventcapacity:'', eventbudget:'' ,eventstatus:'' });
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });
    };


    
    const handleUpdate = () => {
        if (selectedUser) {
            // PUT operation to update the selected user
            axios.put(`${API_URL}/${selectedUser.id}`, newUser)
                .then(response => {
                    const updatedUsers = users.map(user =>
                        user.id === response.data.id ? response.data : user
                    );
                    setUsers(updatedUsers);
                    setSelectedUser(null);
                    setNewUser({ eventname:'', eventtype:'' , eventcapacity:'', eventbudget:'' ,eventstatus:'' })
                })
                .catch(error => {
                    console.error('Error updating user:', error);
                });
        }
    };
    const handleGetUsers = () => {
      // Perform a GET request to fetch all users
      axios.get(API_URL)
          .then(response => {
              setUsers(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  };
  
    const handleDelete = (id) => {
        // DELETE operation to delete the user with the specified ID
        axios.delete(`${API_URL}/${id}`)
            .then(() => {
                const updatedUsers = users.filter(user => user.id !== id);
                setUsers(updatedUsers);
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    const handleSelectUser = (user) => {
        setSelectedUser(user);
        setNewUser({ ...user }); // Pre-fill form fields with user data for editing
    };

    return (
        <div className='container'>
            <h1>EVENT BOOKING</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>eventname</th>
                        <th>eventtype</th>
                        <th>eventcapacity</th>
                        <th>eventbudget</th>
                        <th>eventstatus</th>
                        <th>Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.eventname}</td>
                            <td>{user.eventtype}</td>
                            <td>{user.eventcapacity}</td>
                            <td>{user.eventbudget}</td>
                            <td>{user.eventstatus}</td>
                          
                            <td>
                                <button onClick={() => handleSelectUser(user)} >Edit</button>
                                <button onClick={() => handleDelete(user.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <h2>Create/Update UserDetails</h2>
                <input
                    type="text"
                    placeholder="eventname"
                    value={newUser.eventname}
                    onChange={e => setNewUser({ ...newUser, eventname: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="eventtype"
                    value={newUser.eventtype}
                    onChange={e => setNewUser({ ...newUser, eventtype: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="eventcapacity"
                    value={newUser.eventcapacity}
                    onChange={e => setNewUser({ ...newUser, eventcapacity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="eventbudget"
                    value={newUser.eventbudget}
                    onChange={e => setNewUser({ ...newUser, eventbudget: e.target.value })}
                />
                    <input
                        type="text"
                        placeholder="eventstatus"
                        value={newUser.eventstatus}
                        onChange={e => setNewUser({ ...newUser, eventstatus: e.target.value })}
                    />
               
                <button onClick={handleGetUsers}>Get Users</button>
                <button onClick={selectedUser ? handleUpdate : handleCreate}>
                    {selectedUser ? 'Update' : 'Create'}
                </button>
            </div>
        </div>
    );
}

export default Join;
