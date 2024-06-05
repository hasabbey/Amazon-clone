
import React, { useState, useContext } from 'react';
import classes from '../../Pages/Auth/SignUp.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate
import { auth } from '../../Utility/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ClipLoader } from 'react-spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/ActionType';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({ signIn: false, signUp: false }); // Initialize loading state properly
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const navStateData = useLocation();

  const authHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    if (e.target.name === 'signin') {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.reditect || '/'); // Navigate to home page after successful sign-in
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...loading, signUp: false });
          navigate('/'); // Navigate to home page after successful sign-up
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img src="https://vectorseek.com/wp-content/uploads/2021/01/Amazon-Logo-Vector-730x730.jpg" alt="amazon logo" />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg &&(
          <small 
          style={{color: 'red',
          padding:'5px',
          textAlign: 'center',
          fontWeight: 'bold',

          }}
          >
            {navStateData?.state?.msg}
          </small>
        )
         
        }
       
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
          </div>
          {error && <p className="error">{error}</p>}
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signInBut}
          >
            {loading.signIn ? <ClipLoader color="white" size={15} /> : "Sign In"} {/* Correct prop name */}
          </button>
        </form>

        {/* agreement */}
        <p>
          By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and sale. Please see our Privacy Notice,
          our Cookies Notice, and our Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_registerBut}
        >
          {loading.signUp ? <ClipLoader color="white" size={15} /> : "Create your Amazon Account"} {/* Correct prop name */}
        </button>
        {error && <small style={{ color: "red" }}>{error}</small>}
      </div>
    </section>
  );
};

export default Auth;
