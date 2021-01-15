import { onNavigate } from "../utils/history.js";
import { imageUser } from '../pages/register/photo.js'


export const loadUserProfile = async(userId) => {
    return await db.collection('users').doc(userId).get()
};

export const loadPosts = async() => {
    return await db.collection("post").get()
}

export const createPost = async(newPost, idPost) => {
    return await db.collection("post").doc(idPost).set({
        ...newPost,
        data: (new Date()).toLocaleString(),
        id: idPost,
    })
}

export const logout = async() => {
    localStorage.removeItem("uid");
    firebase.auth().signOut().then(() => {
        onNavigate("/")
    })
}

export const uploadPhoto = async(userId, photo) => {
    return await db.collection("users").doc(userId).set({
        image: photo,
    }, { merge: true })
}

export const updatePost = async(newData, idPost) => {
    return await db.collection("post").doc(idPost).set({
        text: newData,
    }, { merge: true })
}

export const likePost = async(userId, idPost) => {
    return await db.collection("post").doc(idPost).update({
        like: firebase.firestore.FieldValue.arrayUnion(userId)
    })
}

export const deletePost = async(idPost) => {
    return await db.collection("post").doc(idPost).delete()
}

export const login = async(email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    const userId = await firebase.auth().currentUser.uid
    localStorage.setItem("uid", userId);
    return
}

export const loginGoogle = async() => {
    let provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider).then(function(result) {
        const userId = firebase.auth().currentUser.uid
        localStorage.setItem("uid", userId);
        if (firebase.auth().currentUser.email != db.collection("users").doc(userId).email) {
            onNavigate("/home")
            return db.collection("users").doc(userId).set({
                email: `${firebase.auth().currentUser.email}`,
                name: `${firebase.auth().currentUser.displayName}`,
                image: imageUser
            })
        } else {
            onNavigate("/home")
        }

    })
}
export const register = async(emailUser, passwordFirst) => {
    return await firebase.auth().createUserWithEmailAndPassword(emailUser, passwordFirst)
}
export const firebaseData = async(userId, userName, emailUser) => {
    return await db.collection("users").doc(userId).set({
        name: userName[0].toUpperCase() + userName.slice(1),
        email: emailUser,
        image: imageUser
    })
}