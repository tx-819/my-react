import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState(100);

	const arr =
		num % 2 === 0
			? [<li key="1">1</li>, <li key="2">2</li>, <li key="3">3</li>]
			: [<li key="3">3</li>, <li key="2">2</li>, <li key="1">1</li>];

	return (
		<div onClick={() => setNum((_num) => _num + 1)}>
			<>
				<li>4</li>
				<li>5</li>
			</>
			{arr}
		</div>
	);
};

const Child = () => {
	return <div>react</div>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
