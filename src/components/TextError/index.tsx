import { TextErrorProps } from './index.props';

import styled from './styled.module.scss';

export const TextError = ({ children }: TextErrorProps) => {
	return <div className={styled.container}>{children}</div>;
};
