import cn from 'classnames';

import { SpinnerProps } from './index.props';
import data from './data.json';

import styled from './styled.module.scss';

export const Spinner = ({ currentResource }: SpinnerProps): JSX.Element => {
	return (
		<div className={styled.container}>
			{data.map(({ order, style }) => {
				return (
					<div
						key={order}
						className={cn(styled.item, styled[style], {
							[styled.active]: currentResource === order,
						})}
					>
						{order}
					</div>
				);
			})}
		</div>
	);
};
