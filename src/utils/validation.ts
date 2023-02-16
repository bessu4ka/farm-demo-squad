import * as Yup from 'yup';

const phoneRegExpPhoneNumber =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Not correct email').required('Enter email'),
	password: Yup.string()
		.min(8, 'Too Short!')
		.max(30, 'Too Long!')
		.matches(/\d/, 'Enter at least one number')
		.matches(/[a-z]/, 'enter at least one lowercase letter')
		.matches(/[A-Z]/, 'Enter at least one uppercase letter')
		.required('Enter password'),
});

export const registrationSchema = Yup.object().shape({
	nickname: Yup.string()
		.min(4, 'Minimum length 4 characters')
		.max(30, 'Maximum length 30 characters')
		.required('Enter username'),
	email: Yup.string().email('Not correct email').required('Enter email'),
	password: Yup.string()
		.min(8, 'Too Short!')
		.max(30, 'Too Long!')
		.matches(/\d/, 'Enter at least one number')
		.matches(/[a-z]/, 'enter at least one lowercase letter')
		.matches(/[A-Z]/, 'Enter at least one uppercase letter')
		.required('Enter password'),
	confirm_password: Yup.string()
		.required('Confirm the password')
		.oneOf([Yup.ref('password')], 'Your passwords do not match.'),
	phone_number: Yup.string()
		.min(10, 'Number cannot be less than 10 digits')
		.max(12, 'Number cannot have more than 10 digits')
		.matches(phoneRegExpPhoneNumber, 'Phone number is not valid')
		.required('Enter your phone number'),
});
