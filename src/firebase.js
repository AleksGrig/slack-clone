import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBde_JCPAbZK4WfOYwv6p1i2p1UK9ivFeY",
    authDomain: "slack-clone-4d3bf.firebaseapp.com",
    databaseURL: "https://slack-clone-4d3bf.firebaseio.com",
    projectId: "slack-clone-4d3bf",
    storageBucket: "slack-clone-4d3bf.appspot.com",
    messagingSenderId: "515403948378",
    appId: "1:515403948378:web:f006838d18b09e49689363"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db