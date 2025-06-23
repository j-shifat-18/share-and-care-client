import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { createUser, updateUserProfile, setUser , googleLogin } = use(AuthContext);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (passwordRegEx.test(password) === false) {
      setError(
        "Password must have one Uppercase , one lowercase and minimum 6 characters or longer"
      );
      return;
    }

    createUser(email, password).then((result) => {
      const newUser = result.user;
      updateUserProfile({ displayName: name, photoURL: photoURL })
        .then(() => {
          setUser({ ...newUser, displayName: name, photoURL: photoURL });
          navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error) => {
          console.log(error);
          setUser(newUser);
        });
    });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FaEye size={20} />}
              </div>
            </div>
            {error && <p className="text-red-700 text-xs">{error}</p>}
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-secondary mt-6"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="link link-hover text-primary">
            Login
          </a>
        </p>
        <div className="flex w-full flex-col mt-3">
          <div className="divider">OR</div>
        </div>
        <button
            type="button"
            className="btn btn-outline w-full flex items-center justify-center gap-2"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google icon"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
      </div>
    </div>
  );
};

export default SignUp;
