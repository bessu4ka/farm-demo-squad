import { useEffect, useState } from 'react';

export const useButtonDisable = (timer: number): boolean => {
	const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);

	useEffect(() => {
		if (timer <= 0) {
			setIsDisabledButton(false);
		}
	}, [timer]);
	return isDisabledButton;
};
