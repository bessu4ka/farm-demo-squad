import { ButtonProps } from './index.props';

import styled from './styled.module.scss';

export const Button = ({ children, handlerClick }: ButtonProps): JSX.Element => {
	return (
		<button className={styled.container} onClick={handlerClick}>
			{children}
		</button>
	);
};
