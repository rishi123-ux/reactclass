import { useState } from "react"
function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    let senddetails=async (e)=>{
      e.preventDefault()
      let jwttoken=localStorage.getItem('token')

    let response=await fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
             "Content-Type": "application/json",
             authorization:`Bearer ${jwttoken}`
        },
        body:JSON.stringify({username,password}) 
      }
    )

    let data=await response.json()
    alert(data.msg)

    }
  return (
    <>
    <section style={{textAlign:"center"}}>
        <h1>Login to your account</h1><br />
     <form onSubmit={senddetails} >
    <input  onChange={(e)=>{setusername(e.target.value)}}    type="text" placeholder="username"  /><br />
    <input  onChange={(e)=>{setpassword(e.target.value)}}     type="text"  placeholder="password" /><br />
    <button type="submit" >Login</button>
     </form>

    </section>
    </>
  )
}

export default Login