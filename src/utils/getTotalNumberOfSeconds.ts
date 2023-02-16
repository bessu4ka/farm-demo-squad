export function getTotalNumberOfSeconds(timeBeforeSpin: number): number {
	const currentDate = new Date().getTime();
	const timeLeft = timeBeforeSpin - currentDate;
	return Math.ceil(timeLeft / 1000);
}
