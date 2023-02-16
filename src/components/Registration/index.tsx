import { Fragment } from 'react';
import { Formik, Form } from 'formik';

import { Button, Input } from 'components';
import { registrationSchema } from 'utils';
import { RegistrationUserFieldsTypes } from 'types';
import data from 'mock/registration.json';

import styled from './styled.module.scss';

const initialValues = {
	nickname: '',
	email: '',
	password: '',
	confirm_password: '',
	phone_number: '',
};

function loggedFieldsData(values: RegistrationUserFieldsTypes): void {
	console.log(values);
}

export const Registration = () => {
	return (
		<section className={styled.container}>
			<Formik
				initialValues={initialValues}
				validationSchema={registrationSchema}
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
