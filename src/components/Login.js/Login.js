import React, { useState } from 'react'

export default SignUp = () => {

    const [details, setDetails] = useState({
        email: "",
        name: "",
        password: "",
        phone: ""

    })
   
    
    handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:9292/user", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(details)
        })
        setDetails({
            email: "",
            name: "",
            password: "",
            phone: ""
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Email address' required onChange={(e) => setDetails({
                ...details,
                email : e.target.value
            })}/>
            <input type="text" placeholder="Enter name" value = {details.name} onChange={(e) => setDetails({
                ...details,
                name : e.target.value
            })}/>
            <input type="number" placeholder="7345667" value = {details.phone} onChange={(e) => setDetails({
                ...details,
                phone : e.target.value
            })}/>
            <input type="password" name='password' placeholder='Password' required onChange={(e) => setDetails({
                ...details,
                password : e.target.value
            })}/>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}
