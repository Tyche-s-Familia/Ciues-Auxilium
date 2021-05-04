import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import APIurl from '../config'

import {
	SignInNav,
	SignUpContainer,
	HeaderOne,
	PrimaryButton,
	Label,
	InputStyle
} from './FormStyle'

export default function Login() {
	const history = useHistory();

	const [customerSignIn, setCustomerSignIn] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		setCustomerSignIn({
			...customerSignIn,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/users/signin`, customerSignIn, {
				headers: { Accept: 'application/json' },
			})
			.then(function (response) {
				console.log(response);
			})
			.then(() => history.push('/account'))
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<SignInNav>
				<Link className='nav-tag' to='/'>
                    Ciues-Auxilium
				</Link>
			</SignInNav>

			<SignUpContainer>
				<form onSubmit={handleSubmit}>
					<HeaderOne>Welcome Back!</HeaderOne>
					<div className='form-group'>
						<Label>Email</Label>
						<InputStyle
							type='text'
							value={customerSignIn.email}
							name='email'
							className='form-control'
							placeholder='Email'
							onChange={handleChange}
						/>
					</div>

					<div className='form-group'>
						<Label>Password</Label>
						<InputStyle
							type='password'
							name='password'
							value={customerSignIn.password}
							className='form-control'
							placeholder='Password'
							onChange={handleChange}
						/>
					</div>

					<PrimaryButton type='submit' className='btn'>
						Log In
					</PrimaryButton>

					<div className='new-member'>
						Not yet a crew member? <Link to='/signup'>Sign Up</Link>
					</div>
				</form>
			</SignUpContainer>
		</>
	);
}
