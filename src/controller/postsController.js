/* DATABASE */
const db = require('../database/index');
const { collection, getDocs } = require('firebase/firestore/lite');

module.exports = {
    getPosts: async () => {
        const postsCol = collection(db, 'posts');
        const postSnapshot = await getDocs(postsCol);
        const postsList = postSnapshot.docs.map(doc => doc.data());
        return postsList;
    }
};