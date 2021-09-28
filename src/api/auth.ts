import firebase from 'firebase/app';
import 'firebase/auth';

export const signUp = (email: string, password: string): Promise<any> => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const login = (email: string, password: string): Promise<any> => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
