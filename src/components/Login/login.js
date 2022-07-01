// import React, { useState } from 'react'

// function Login({ setLogIn }){

//     const [db_res, setDbRes] = useState("")

//     const [details, setDetails] = useState({
//         password: "",
//         phone: ""
//     })
//     const [loading, setLoading] = useState(true)
   
    
//     function handleSubmit(e){
//         e.preventDefault()
//         setLoading(true)
//         fetch(`http://localhost:4300/login/${details.phone}/${details.password}`)
//         .then(res=> res.json())
//         .then(res => {
//             setDbRes(res)
//             console.log(res)
//             setLoading(false)
//         }
        
//         )

//         if(!loading){
//             if(db_res == null){
//                 alert("Wrong password or phone")
//             }
//             else{
//                 alert(`Successfully logged in as ${db_res.name}` )
//                 setLogIn({
//                     name: db_res.name,
//                     phone: db_res.phone,
//                     email: db_res.email
//                 })
//                 setDbRes(" ")
//             }
//         }

//         setDetails({

//             password: "",
//             phone: ""
//         })
//     }
//     return (
//       <div>
//           <form onSubmit={handleSubmit}>
             
//               <input type="number" placeholder="Enter Phone" value = {details.phone} onChange={(e) => setDetails({
//                   ...details,
//                   phone : e.target.value
//               })}/>
//               <input type="password" name='password' placeholder='Enter Password' value={details.password} required onChange={(e) => setDetails({
//                   ...details,
//                   password : e.target.value
//               })}/>
//               <input value="Submit" type='submit' />
//           </form>
//       </div>
//     )
// }

// export default Login


