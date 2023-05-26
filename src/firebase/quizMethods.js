import * as fb from './init';
import firebaseCollectionTypes from './constants';

export const sendAddUserReadinessRequest = async () => {
    const user = fb.auth.currentUser;

    let userReadinessDocId = '';

    const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.USERS_READINESS);
    const query = await fireBaseRef
        .where('uid', '==', user.uid)
        .get();
    if (query.docs.length === 0) {
        await fb.firestore.collection(firebaseCollectionTypes.USERS_READINESS).add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
            .then(docRef => userReadinessDocId = docRef.id);
    }

    return { uid: user.uid, userReadinessDocId };
};

export const deleteFromCollectionByDocIdRequest = async ({ type, docId }) => {
    const fireBaseUserRef = fb.firestore.collection(type);

    await fireBaseUserRef.doc(docId).delete();
};
