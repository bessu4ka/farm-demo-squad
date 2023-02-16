import { Fragment } from 'react';
import { Formik, Form } from 'formik';

import { Button, Input } from 'components';
import { LoginSchema } from 'utils';
import data from 'mock/login.json';

import styled from './styled.module.scss';

const initialValues = {
	email: '',
	password: '',
};

function loggedFieldsData(values: any): void {
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
								<Fragment key={name}>
									<Input placeholder={placeholder} size="large" type={type} name={name} />
								</Fragment>
							);
						})}

						<Button type="submit">Sign in</Button>
					</Form>
				)}
			</Formik>
		</section>
	);
};
