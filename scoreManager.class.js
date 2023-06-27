class ScoreManager {

    score = {
        username: 'cuise',
        score: 100
    };

    scoresArr = [];

    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyAGFV3qKnFcPBYRnSmRT3Wx4GJftIX-ssY",
            authDomain: "galaxy-odyssey.firebaseapp.com",
            projectId: "galaxy-odyssey",
            storageBucket: "galaxy-odyssey.appspot.com",
            messagingSenderId: "800835863499",
            appId: "1:800835863499:web:62332dba8cf8edc091ac4e"
        };
        this.app = firebase.initializeApp(this.firebaseConfig);
        this.db = firebase.firestore(this.app);
    }

    async loadCollection(collectionName) {
        const querySnapshot = await this.db.collection(collectionName).get();
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, data: doc.data() });
        });
        return data;
    }

    async loadAndSortScores(collectionName) {
        let scoresObj = await this.loadCollection(collectionName);
        scoresObj = scoresObj[0].data; // Consider only the first document's data

        // Convert the object to an array
        this.scoresArr = Object.entries(scoresObj).map(([name, score]) => ({ name, score }));

        // Sort the array
        this.scoresArr.sort((a, b) => b.score - a.score);

        console.log(this.scoresArr);
        return this.scoresArr;
    }

    async updateScore(collectionName, docId, score) {
        const docRef = this.db.collection(collectionName).doc(docId);
        const updateResult = await docRef.update(score);
        return docRef.id;
    }
}
