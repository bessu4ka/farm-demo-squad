import { ButtonProps } from './index.props';

import styled from './styled.module.scss';

export const Button = ({
	children,
	handlerClick,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button className={styled.container} onClick={handlerClick} {...props}>
			{children}
		</button>
	);
};
