// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_X);
// let poop = import.meta.env.VITE_FIREBASECONFIG.replaceAll('\\"', '"')
// console.log(poop);
let firebaseConfig
if( import.meta.env.DEV ) {
	firebaseConfig = (await import('../secrets.js')).firebaseConfig
	console.log(firebaseConfig);
} else {
	firebaseConfig = import.meta.env.VITE_FIREBASECONFIG
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function getFruits() {
	const fruitsCol = collection(db, 'fruits')
	const fruitSnapshot = await getDocs(fruitsCol)
	const fruitList = fruitSnapshot.docs.map(doc => withId(doc))
	// failMiserably()
	return fruitList
}
// async function failMiserably() {
// 	try {
// 		const snap = await getDocs(collection(db, 'secrets'))
// 		const xs = snap.docs.map(doc => withId(doc))
// 		console.log('xs', xs);
// 		return xs

// 	} catch(error) {
// 		console.log('Error:', error.message);
// 	}
// }
function withId(doc) {
	let id = doc.id
	console.log('Doc id:', id);
	let o = doc.data()
	o.id = id
	return o
}

export { getFruits }
