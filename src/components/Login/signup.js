// import React, { useState } from 'react'

// function SignUp(){

//     const [details, setDetails] = useState({
//         email: "",
//         name: "",
//         password: "",
//         phone: ""

//     })
   
    
//     function handleSubmit(e){
//         e.preventDefault()

//         fetch("http://localhost:4400/user", {
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(details)
//         })
//         setDetails({
//             email: "",
//             name: "",
//             password: "",
//             phone: ""
//         })
//     }
//     return (
//       <div>
//           <form onSubmit={handleSubmit}>
//               <input type="email" name='email' placeholder='Email address'value={details.email} required onChange={(e) => setDetails({
//                   ...details,
//                   email : e.target.value
//               })}/>
//               <input type="text" placeholder="Enter name" value = {details.name} onChange={(e) => setDetails({
//                   ...details,
//                   name : e.target.value
//               })}/>
//               <input type="number" placeholder="Enter Phone" value = {details.phone} onChange={(e) => setDetails({
//                   ...details,
//                   phone : e.target.value
//               })}/>
//               <input type="password" name='password' placeholder='Password' value={details.password} required onChange={(e) => setDetails({
//                   ...details,
//                   password : e.target.value
//               })}/>
//               <input value="submit" type='submit' />
//           </form>
//       </div>
//     )
// }

// export default SignUp