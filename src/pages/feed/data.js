export const likePosts = (postID) => {
    firebase
      .firestore()
      .collection('posts')
      .doc(postID)
      .update({ likes: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid) });
  };
  
  export const commentPosts = (postID, textContent) => {
    firebase
      .firestore()
      .collection('posts')
      .doc(postID)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          uid: firebase.auth().currentUser.uid,
          name: firebase.auth().currentUser.displayName,
          text: textContent,
        }),
      });
  };