import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Store from './Store'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="app">
			<Store />
		</div>
	)
}

export default App
