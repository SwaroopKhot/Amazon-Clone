import React, { useState } from 'react'
import './Login.css'

import { Link, useHistory } from 'react-router-dom'
import { auth } from "./Firebase";

function Login() {
	const history = useHistory();

	const [ email, setEmail] = useState('');
	const [ password, setPassword ] = useState('');
	const [ username, setUsername ] = useState('');

	const signin = e => {
		e.preventDefault()

		// Firebase login:
		auth.signInWithEmailAndPassword(email, password)
			.then(auth => {
				history.push('/')
			})
		.catch(error => alert(error.message))
	}


	const register = e => {
		e.preventDefault()

		// firebase Register :
		auth.createUserWithEmailAndPassword(email, password).then((auth) => {
			// sucessfully logged in :
			//console.log(auth)
			alert('Account Created')
			if (auth) {
				history.push('/')
			}
		})
		.catch(error => alert(error.message))
	}

	return (
		<div className='login'>
			<Link to='/'>
				<img className='login_logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_sogo.svg.png'
					alt=''
				/>
			</Link>

			<div className='login_container'>
				<h1>Sign In</h1>
				<form>

					<h5>Your Name</h5>
					<input 
						type='text' 
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					
					<h5>E-Mail</h5>
					<input 
						type='text' 
						value = {email}
						onChange = {e => setEmail(e.target.value)}
						
					/>
					
					<h5>Password</h5>
					<input 
						type='password'
						value={password}
						onChange= {e => setPassword(e.target.value)}
					/>

					<button type='submit' className='login_signin_button' onClick={signin}>Sign-in</button>
				</form>

				<p>
					<small><b>
						By signing-in you agree to use Amazon(clone) Conditions
						of Use & Sale.Please see privacy Notice, our Cookies Notice, etc
					</b></small>
				</p> 

				<button className='login_register_button' onClick={register} >Create your Amazon Account</button>
			</div>
		</div>
	)
}

export default Login