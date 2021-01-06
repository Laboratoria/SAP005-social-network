export const createProfile = (email, password) => {
    userRegister(email, password){
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    }
};
export const createUser = (email, city, date) => {
    userNew(email, city, date) {
    firebase
    }
};

// Não precisa de RETURN nesta função