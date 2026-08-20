import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";


// ==============================
// REGISTER USER
// ==============================

export async function registerUser({ name, email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name,
    });

    return {
      success: true,
      user: user,
    };

  } catch (error) {
    console.error("Registration Error:", error);

    let message = "Registration failed. Please try again.";

    if (error.code === "auth/email-already-in-use") {
      message = "An account with this email already exists.";
    }
    else if (error.code === "auth/invalid-email") {
      message = "Please enter a valid email address.";
    }
    else if (error.code === "auth/weak-password") {
      message = "Password is too weak.";
    }
    else if (error.code === "auth/network-request-failed") {
      message = "Network error. Please check your internet connection.";
    }

    return {
      success: false,
      error: message,
    };
  }
}


// ==============================
// LOGIN USER
// ==============================

export async function loginUser({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return {
      success: true,
      user: user,
    };

  } catch (error) {
    console.error("Login Error:", error);

    let message = "Login failed. Please try again.";

    if (
      error.code === "auth/invalid-credential" ||
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password"
    ) {
      message = "Invalid email or password.";
    }
    else if (error.code === "auth/invalid-email") {
      message = "Please enter a valid email address.";
    }
    else if (error.code === "auth/too-many-requests") {
      message = "Too many login attempts. Please try again later.";
    }
    else if (error.code === "auth/network-request-failed") {
      message = "Network error. Please check your internet connection.";
    }

    return {
      success: false,
      error: message,
    };
  }
}


// ==============================
// LOGOUT USER
// ==============================

export async function logoutUser() {
  try {
    await signOut(auth);

    return {
      success: true,
    };

  } catch (error) {
    console.error("Logout Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}


// ==============================
// CURRENT USER
// ==============================

export function getCurrentUser() {
  return auth.currentUser;
}