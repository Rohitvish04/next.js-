"use client"

import { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
         

        if(email && password){
            console.log({ email, password})
            setIsLoggedIn(true)

            setEmail('')
            setPassword('')

        }
    }

    return (
        <div>
            <h3>Login Form</h3>
            <form action="" onSubmit={handleSubmit}> 
            <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input 
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e)=> setPassword(e.target.value)}
                 />

                <br /> <br />

                <button type='submit'>Login</button>
                </form>
                {isLoggedIn && (
                    <p style={{color: 'green'}}>Login Successful</p>
                )}
        </div>
    )
}