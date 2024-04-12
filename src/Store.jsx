import { useState } from "react"
import { getFruits } from "./fire.js"

const Store = () => {
	const [fruits, setFruits] = useState([])

	const handleGet = async () => {
		const fs = await getFruits()
		console.log(fs);
		setFruits(fs)
	}
	return (
		<div>
			<button onClick={handleGet}> Om nom nom </button>
			{fruits.map(f => (
				<section key={f.id}>
					{f.name}: {f.points}
				</section>
			))}
		</div>
	)
}
export default Store
