import React from 'react';

import aboutImage from '../src/assets/images/about-us.png';
import jsonData from '../src/assets/json/demo.json';

import './index.scss';

function App() {
	return (
		<>
			<h1 className="App">Uygulamanın Ana giriş Noktası</h1>
			<img width={100} height={100} src={aboutImage} />
		</>
	);
}

export default App;
