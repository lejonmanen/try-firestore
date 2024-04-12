// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuIjPLfRSY6SW84FhaE0DPUN-CqynN4Fk",
  authDomain: "try-out-8cfa5.firebaseapp.com",
  projectId: "try-out-8cfa5",
  storageBucket: "try-out-8cfa5.appspot.com",
  messagingSenderId: "747150806854",
  appId: "1:747150806854:web:ce029593307de933891f47"
};

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
