import { useState } from 'react';

import { Registration, SignIn } from 'components';

import styled from './styled.module.scss';

export const Login = () => {
	const [isSignInPage, setIsSignInPage] = useState(true);

	function chooseAnAuthorizationMethod() {
		setIsSignInPage((prev) => !prev);
	}

	return (
		<section className={styled.container}>
			{isSignInPage && (
				<span onClick={chooseAnAuthorizationMethod} className={styled.changeMethod}>
					create account
				</span>
			)}
			{!isSignInPage && (
				<span onClick={chooseAnAuthorizationMethod} className={styled.changeMethod}>
					sign in
				</span>
			)}
			{isSignInPage && <SignIn />}
			{!isSignInPage && <Registration />}
		</section>
	);
};
