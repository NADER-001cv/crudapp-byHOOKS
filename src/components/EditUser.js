import React ,  {useState, useEffect}  from 'react'

function EditUser({updateUser,...props}) {
    console.log(props,"edit props")
   const [user,setUser] =useState(props.currentUser)

    useEffect(()=> {
             console.log(user,"")
       setUser(props.currentUser)

    },[props])

    const handleInputChange = event => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
      }



    return (
        <form 
           onSubmit={(e) => {
               e.preventDefault()
               updateUser(user.id,user)
           }}
        >
            
            <div class="mb-3">
                <label for="exampleFormControlInput1"   class="form-label">Name</label>
                <input 
                name="name"
                 value={user.name}
                 onChange={handleInputChange}
                 type="text" class="form-control" placeholder="name" />
            </div>
            {/* <input  value='llll' type="text" id="fname" name="fname"/> */}
            <div class="mb-3">
                <label for="exampleFormControlInput1"  class="form-label"> User name </label>
                <input
                name="username"
                 value={user.username}
                 onChange={handleInputChange}
                
                type="text" class="form-control" placeholder="user name" />
            </div>


            <button type="button" class="btn btn-success mx-3">Edit User</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
        </form>
    )
}

export default EditUser
