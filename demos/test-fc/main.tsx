import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState(100);
	return (
		<div onClick={() => setNum((_num) => _num + 1)}>
			<div onClick={() => setNum((_num) => _num + 1)}>{num}</div>
		</div>
	);
};

const Child = () => {
	return <div>react</div>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
