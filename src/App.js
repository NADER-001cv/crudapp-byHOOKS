import { computeHeadingLevel } from '@testing-library/dom'
import React  , {Fragment, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import DisplayUsers from './UI/DisplayUsers'
function App() {

    // all data  for manupulate 
    const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]
    
    const [users,setUsers]  =    useState(usersData)
     const [Editing,setEditing] =    useState(false)
     // add
     const addUser = (user) => {
        
             user.id  = users.length + 1
            
        setUsers([...users,user])
     }
   // delete 
   const HandleDelete = (e,index)  => {
    //    const removeuser = users.filter((el,id) => id  !== index)
    //    setUsers(removeuser)
       setUsers((prevstate)  => {
              return prevstate.filter((el,id)  => id !== index            ) 
       })
     //  console.log(e.target.value,index)
   }
   // edit  show 
   const user = { id: null, name: '', username: '' }
   const [ currentUser, setCurrentUser ] = useState(user)
   const  editFormUser = (user)  => {
           setEditing(!Editing)

           setCurrentUser({ id: user.id, name: user.name, username: user.username })
   }
   //
   const updateUser = (id, updatedUser) => {
    // in updat not work the form of edit
    setEditing(Editing)
      // call the  data old  and  do  compare for new data
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
}
    return (
        <div  className="container">
            <h1 className="display-2">
                hi   hooks !
            </h1>
            <div className="row">
                <div className="col-md-4">
                {Editing ? ( 
                    <Fragment>
                        <h3> edit user  </h3>
                       <EditUser
                       setEditing={setEditing}
                         currentUser={currentUser}
                         updateUser={updateUser}
                       /> 
                    </Fragment>
                  
                  
                  ):(
                        <Fragment>
                            <h3> add user  </h3>
                            <AddUser  addUser={addUser}  />
                        </Fragment>
                  )
                  
                }
                </div>   
                <div  className="col-md-4" >
                      <h3>
                          all users
                      </h3>
                      <DisplayUsers  users={users}    HandleDelete={HandleDelete}     editFormUser={editFormUser}  />
                </div>
            </div>
        </div>
    )
}

export default App
