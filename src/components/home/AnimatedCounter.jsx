import { useEffect, useState } from "react";

export default function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = end / (duration / 16);

		const timer = setInterval(() => {
			start += increment;

			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.floor(start));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [end, duration]);

	return (
		<>
			{count}
			{suffix}
		</>
	);
}
