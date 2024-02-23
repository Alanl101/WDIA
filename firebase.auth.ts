import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, AuthError } from "firebase/auth";
import { app } from '@/firebase.config';

const auth = getAuth(app);

// Sign in function
export const signIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        const e = error as AuthError;
        console.error("Error signing in:", e.message);
        throw e;
    }
};

// Sign out function
export const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        const e = error as AuthError;
        console.error("Error signing out:", e.message);
        throw e;
    }
};

export { auth };
