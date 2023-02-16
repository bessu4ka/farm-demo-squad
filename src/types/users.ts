export interface SignInUserFieldsTypes {
	email: string;
	password: string;
}

export interface RegistrationUserFieldsTypes extends SignInUserFieldsTypes {
	nickname: string;
	confirm_password: string;
	phone_number: string;
}
