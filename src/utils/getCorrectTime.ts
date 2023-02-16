export function getCorrectTime(time: number) {
	const hoursLeft = Math.floor(time / 3600);
	const hoursInSeconds = hoursLeft * 3600;
	const restOfSeconds = time - hoursInSeconds;
	const minutesLeft = Math.floor(restOfSeconds / 60);
	const minutesInSeconds = minutesLeft * 60;
	const secondsLeft = time - (hoursInSeconds + minutesInSeconds);
	return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
}
