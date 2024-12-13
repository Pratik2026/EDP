import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebaseconfig";

const SignUp = () => {
  const [formval, setFormval] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormval({ ...formval, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formval.email,
          formval.password
        );
        console.log("User signed up:", userCredential.user);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, email } = formval;

    if (password !== confirmPassword) {
      return false;
    }
    if (
      password === "" ||
      confirmPassword === "" ||
      email === ""
    ) {
      return false;
    }
    if (password.length < 6) {
      return false;
    }
    return true;
  };

  return (
    <div className="bg-[#f9fafb] flex gap-8 flex-col justify-center items-center min-h-screen min-w-screen">
      <div className="text-3xl font-semibold">Register Your Account</div>
      <div className="p-8 bg-slate-100 shadow-md rounded-md flex flex-col items-cneter">
        <form
          action=""
          method="post"
          className="w-96 flex flex-col gap-4 items-start"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="email" className="font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="px-2 w-full border-2 rounded-md outline-2 py-1.5 focus:outline-indigo-600"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="px-2 w-full border-2 rounded-md outline-2 py-1.5 focus:outline-indigo-600"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="confirmPassword" className="font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="px-2 w-full border-2 rounded-md outline-2 py-1.5 focus:outline-indigo-600"
            onChange={(e) => handleChange(e)}
          />

          <button
            type="submit"
            className="w-full mt-4 bg-[#4f46e5] text-white font-medium rounded-md outline-2 py-1.5 hover:bg-indigo-500"
          >
            Register
          </button>

          <div className="flex gap-4 justify-center">
            <span className=" text-gray-700">Already have an account?</span>
            <a
              href="/login"
              className=" text-violet-700 font-semibold cursor-pointer"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
