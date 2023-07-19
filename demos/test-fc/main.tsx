import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState(100);
	window.setNum = setNum;
	return <div>{num === 3 ? <Child /> : <span>{num}</span>}</div>;
};

const Child = () => {
	return <div>react</div>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
