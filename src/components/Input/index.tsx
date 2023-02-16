import cn from 'classnames';
import { Field } from 'formik';

import { InputProps } from './index.props';

import styled from './styled.module.scss';

export const Input = ({ placeholder, size, name, type }: InputProps): JSX.Element => {
	return (
		<Field
			className={cn(styled.container, {
				[styled.large]: size === 'large',
			})}
			placeholder={placeholder}
			type={type}
			name={name}
		/>
	);
};
