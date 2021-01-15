global.firebase = {
    auth: jest.fn(() => ({
        createUserWhithEmailAndPassword: jest.fn(),
        signInWithEmailAndPassword: jest.fn(),
        signInWithPopup: jest.fn(),
        signOut: jest.fn(),
})),
firestore: jest.fn(),
};