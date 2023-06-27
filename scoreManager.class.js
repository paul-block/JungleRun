class ScoreManager {

    score = {
        username: '',
        score: 
    };

    scoresArr = [];

    constructor() {
        this.firebaseConfig = {
            apiKey: "",
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: ""
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
