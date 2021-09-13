import React from 'react'

function DisplayUsers({editFormUser,HandleDelete,...props}) {
    return (
        <div>
            all users
            <table>
                <thead>
                   <tr>
                       <th>name</th>
                       <th> user name</th>
                       <th>action</th>
                   </tr>
                </thead>
                <tbody>
                     {props.users.length > 0 ? (
                         props.users.map((user,id) => 
                         (
                             <tr key={user.id}  >
                                  <td>
                                    {user.name}
                                  </td>
                                  <td>
                                      {user.username}
                                  </td>
                                  <td>
                                  <button 
                                  onClick={()  =>{
                                    editFormUser(user)
                                  }}
                                  type="button" 
                                  class="btn btn-light"

                                  >
                                      Edit
                                  </button>
                                  <button
                                  onClick={(e) => HandleDelete(e,id)}
                                   type="button"

                                    class="btn btn-light">Delete</button>
                                  </td>
                             </tr>
                         ))
                     ) :(
                         <tr>
                             <td colSpan={3}>
                                 no users now !!
                             </td>
                         </tr>
                     )

                     }
                </tbody>

            </table>
        </div>
    )
}

export default DisplayUsers
