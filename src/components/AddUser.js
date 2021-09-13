import React , {useState,useEffect} from 'react'

function AddUser(props) {

    const  [user,SetUser]  = useState({id:null,name:'',username:''})
    
    const HandleInputUser = (e) => {
        const {name,value} = e.target
       // SetUser((prevstate) => ((...prevstate,[name]:value)))
       SetUser({...user,[name]:value})
      
    }



    return (
<form   
              onSubmit={e => {
                  e.preventDefault()
              
             
                  if (!user.name || !user.username) return
                   props.addUser(user)
                  SetUser(user)
              }

              }
              
              >
 <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input 
                value={user.name}
                name="name"
                onChange={HandleInputUser}
                type="text" 
                className="form-control" 
                placeholder="name" />
            </div>


            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> User name </label>
                <input 
                value={user.username}
                name="username"
                  onChange={HandleInputUser}
                type="text" 
                className="form-control" 
                placeholder="user name" />
            </div>

            <button
             
             className="btn btn-primary">
                 Add User</button>







              </form>


    )


   }

export default AddUser
