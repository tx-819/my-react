import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState(0);
	return (
		<div
			onClick={() => {
				setNum((_num) => _num + 1);
				setNum((_num) => _num + 1);
				setNum((_num) => _num + 1);
			}}
		>
			<span>{num}</span>
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
