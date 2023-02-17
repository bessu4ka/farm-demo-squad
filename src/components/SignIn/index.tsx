import { Formik, Form } from 'formik';

import { Button, Input, TextError } from 'components';
import { LoginSchema } from 'utils';
import { SignInUserFieldsTypes } from 'types';
import data from 'mock/login.json';

import styled from './styled.module.scss';

const initialValues: SignInUserFieldsTypes = {
	email: '',
	password: '',
};

function loggedFieldsData(values: SignInUserFieldsTypes): void {
	console.log(values);
}

export const SignIn = () => {
	return (
		<section className={styled.container}>
			<Formik
				initialValues={initialValues}
				validationSchema={LoginSchema}
				onSubmit={(values) => loggedFieldsData(values)}
			>
				{({ errors, touched }) => (
					<Form className={styled.inputs}>
						{data.map(({ placeholder, name, type }) => {
							return (
								<div key={name}>
									<Input placeholder={placeholder} size="large" type={type} name={name} />
									{errors[name as keyof SignInUserFieldsTypes] &&
									touched[name as keyof SignInUserFieldsTypes] ? (
										<TextError>{errors[name as keyof SignInUserFieldsTypes]}</TextError>
									) : null}
								</div>
							);
						})}

						<Button type="submit">Sign in</Button>
					</Form>
				)}
			</Formik>
		</section>
	);
};
