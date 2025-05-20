import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, user, singInWithGoogle, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const updateUserInfo = {
      displayName: name,
      photoURL: photo,
    };
    console.log({ name, photo, email, password });

    // Password Validation
    const lowercase = /(?=.*[a-z])/;
    const uppercase = /(?=.*[A-Z])/;
    const digit = /(?=.*\d)/;
    const length = /.{6,}/;
    if (!lowercase.test(password)) {
      setErrorMessage("Must have a Lowercase letter in the password ");
      return;
    } else if (!uppercase.test(password)) {
      setErrorMessage("Must have a Uppercase letter in the password ");
      return;
    } else if (!digit.test(password)) {
      setErrorMessage("Must have a Digit in the password ");
      return;
    } else if (!length.test(password)) {
      setErrorMessage("Length must be at least 6 character");
      return;
    } else {
      setErrorMessage("");
    }

    // Create User
    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : '/'}`)
        Swal.fire({
          icon: "success",
          title: "Register Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        // Update user Profile
        updateUserProfile(updateUserInfo)
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
                Swal.fire({
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
                });
      });
  };

      // Handle Sing in with google 
      const handleSingInWithGoogle = () => {
          singInWithGoogle()
               .then(result => {
                  setUser(result.user)
                  navigate(`${location.state ? location.state : '/'}`)
                      Swal.fire({
                      icon: "success",
                      title: "Sing in Successful!",
                      showConfirmButton: false,
                      timer: 1500,
                      });
               })
               .catch((error) => {
                  console.log(error);
                  
                      Swal.fire({
                      icon: "error",
                      title: `${error.message}`,
                      showConfirmButton: false,
                      timer: 1500,
                      });
               })
      }

  return (
    <div className="flex items-center justify-center min-h-[90vh] my-10 md:my-0">
      <div
        className="w-full max-w-2xl p-8 space-y-3 rounded-xl dark:bg-gray-50 shadow-2xl dark:text-gray-800 border-5 border-primary"
        bis_skin_checked="1"
      >
        <h1 className="text-6xl text-primary font-bold text-center">
          Register Now!
        </h1>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name */}
          <div className="space-y-1 text-sm" bis_skin_checked="1">
            <label htmlFor="name" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-2 border-gray-300"
            />
          </div>
          {/* Photo */}
          <div className="space-y-1 text-sm" bis_skin_checked="1">
            <label htmlFor="Photo" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo Url"
              className="w-full px-4 py-3 rounded-md dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-2 border-gray-300"
            />
          </div>
          {/* Email */}
          <div className="space-y-1 text-sm" bis_skin_checked="1">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-2 border-gray-300"
            />
          </div>
          {/* Password */}
          <div className="space-y-1 text-sm" bis_skin_checked="1">
            <label htmlFor="password" className="block dark:text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-2 border-gray-300"
            />
            <p className="text-sm text-red-600">{errorMessage}</p>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-primary text-2xl "
          >
            Register
          </button>
        </form>

        {/* Social */}
        <div className="flex items-center pt-4 space-x-1" bis_skin_checked="1">
          <div
            className="flex-1 h-px sm:w-16 dark:bg-gray-300"
            bis_skin_checked="1"
          ></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Register with social accounts
          </p>
          <div
            className="flex-1 h-px sm:w-16 dark:bg-gray-300"
            bis_skin_checked="1"
          ></div>
        </div>
        <div className="flex justify-center space-x-4" bis_skin_checked="1">
          <button onClick={handleSingInWithGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
            <FcGoogle size={25}></FcGoogle>
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="underline text-primary ml-1 font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
