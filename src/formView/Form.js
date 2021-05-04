import React, { useState, Fragment } from 'react';
import SignUp from './SignUp';
import Login from './Login';

export default function Form() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitSignUp() {
		setIsSubmitted(true);
	}

	return (
		<Fragment>
			<div>
				{!isSubmitted ? (
					<SignUp handleNewSubmit={submitSignUp} />
				) : (
					<Login />
				)}
			</div>
		</Fragment>
	);
}
