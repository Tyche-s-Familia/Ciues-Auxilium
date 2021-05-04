import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';

export default function SignUp() {

	const history = useHistory();
	const [customerSignUp, setCustomerSignUp] = useState({
		email: '',
		password: '',
	});

	const handleNewChange = (event) => {
		setCustomerSignUp({
			...customerSignUp,
			[event.target.name]: event.target.value,
		});
	};

	const handleNewSubmit = (event) => {
		event.preventDefault();
		console.log(event);

		axios
			.post(`${APIurl}/users/signup`, customerSignUp, {
				headers: { Accept: 'application/json' },
			})
			.then(function (response) {
				console.log(response);
			})
			.then(() => history.push('/feed'))
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
				<form onSubmit={handleNewSubmit} className='form' noValidate>
					<HeaderOne>Sign Up</HeaderOne>
					<TertiaryButton>
						<Icon src={alert} alt='alert'></Icon>Password must be 6 characters
						or more
					</TertiaryButton>
					<Required>
						<Asterisk>*</Asterisk> indicates a required field
					</Required>

					<div className='signup-group'>
						<Label>
							<Asterisk>*</Asterisk> Email
						</Label>
						<InputStyle
							type='text'
							name='email'
							value={customerSignUp.email}
							onChange={handleNewChange}
							className='signup-control'
							placeholder='Required'
						/>
					</div>

					<div className='signup-group'>
						<Label>
							<Asterisk>*</Asterisk> Password
						</Label>
						<InputStyle
							type='password'
							name='password'
							value={customerSignUp.password}
							onChange={handleNewChange}
							className='signup-control'
							placeholder='Required'
						/>
					</div>

					<div className='signup-group'>
						<Label>
							<Asterisk>*</Asterisk> Confirm Password
						</Label>
						<InputStyle
							type='password'
							name='passconfirm'
							onChange={handleNewChange}
							value={customerSignUp.passconfirm}
							className='signup-control'
							placeholder='Required'
						/>
					</div>

					<div className='signup-group'>
						<div className='checkbox'>
							<input
								type='checkbox'
								className='control-input'
								id='customCheck'
							/>
							<label className='control-label' htmlFor='customCheck'>
								I accept our Terms of Service and Privacy Policy
							</label>
						</div>
					</div>

					<PrimaryButton type='submit' className='btn'>
						Sign Up
					</PrimaryButton>

					<div className='new-member'>
						Already have an account <Link to='/signin'>Sign In</Link>
					</div>
				</form>
			</SignUpContainer>
		</>
	);
};
