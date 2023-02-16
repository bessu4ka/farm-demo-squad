function quantityDegrees() {
	const minDegrees = 720;
	const randomDegrees = parseInt((Math.random() * 1000).toFixed(0));
	return minDegrees + randomDegrees;
}

export function spinRoulette(setState: React.Dispatch<React.SetStateAction<number>>) {
	let counter = 0;
	let currentStateElement = 1;
	const speed = 200;
	const randomDegrees = quantityDegrees();
	const step = 45;
	const quantitySteps = Math.floor(randomDegrees / step);

	const timer = setInterval(() => {
		counter++;
		currentStateElement++;
		if (currentStateElement === 9) {
			currentStateElement = 1;
		}
		if (quantitySteps - counter === 5) {
			clearInterval(timer);
		}
		setState(currentStateElement);
	}, speed);

	const overTime = [0, 300, 700, 1500, 2500];

	overTime.forEach((time) => {
		setTimeout(() => {
			counter++;
			currentStateElement++;
			if (currentStateElement === 9) {
				currentStateElement = 1;
			}
			setState(currentStateElement);
		}, speed * (quantitySteps - 4) + time);
	});
}
