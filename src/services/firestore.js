import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";
import "firebase/auth";
 
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
 
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
 
const db = firebase.firestore();
 
export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};
 
export const getProjectList = () => {
    return db.collection('project').get()
};

export const createProject = (newProject) => {
    return db.collection('project')
    .add({
        name: newProject,
    });
};

export const getTasksByProject = (projectId) => {
    return db.collection('task').where("project", "==", projectId)
    .get();
};

export const createTask = (taskName, projectId) => {
    return db.collection('task')
    .add({
        name: taskName,
        project: projectId
    });
};
 
export default firebase;
