import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import app from "../Firebase/Config/Firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const gitProvaider = new GithubAuthProvider();
const UseContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [post, setPost] = useState([]);
  const [loder, setLoder] = useState(true);
  const RegesterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoder(true);
    return signOut(auth);
  };
  const loginWithGoogle = () => {
    setLoder(true);
    return signInWithPopup(auth, Provider);
  };
  const loginWithGithub = () => {
    setLoder(true);
    return signInWithPopup(auth, gitProvaider);
  };
  const loginWithGit = () => {
    setLoder(true);
    return getRedirectResult(auth, gitProvaider);
  };
  useEffect(() => {
    const objerver = onAuthStateChanged(auth, (newuser) => {
      setLoder(false);
      setUser(newuser);
    });
    return () => objerver;
  }, []);
  // catagory fetch in my post=5000
  useEffect(() => {
    fetch("http://localhost:5000/news-cataroris")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);
  // post details in my port-5000
  useEffect(() => {
    fetch("http://localhost:5000/post-of-details")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  const userInfo = {
    user,
    catagory,
    post,
    loder,
    RegesterUser,
    Login,
    logout,
    loginWithGoogle,
    loginWithGithub,
    loginWithGit,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UseContext;
