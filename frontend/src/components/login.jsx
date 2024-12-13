import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebaseconfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    if (handleValidation()) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User signed in:", userCredential.user);
        navigate("/");
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  };

  const handleValidation = () => {
    const { email, password } = values;

    if (email === "" || password === "") {
      // toast.error("Please fill out all fields!", toastOptions);
      return false;
    }
    if (email.length < 3) {
      // toast.error("email must be at least 3 characters long!", toastOptions);
      return false;
    }
    if (password.length < 6) {
      // toast.error("Password must be at least 6 characters long!", toastOptions);
      return false;
    }
    return true;
  };
  return (
    <div className="bg-[#f9fafb] flex gap-8 flex-col justify-center items-center min-h-screen min-w-screen">
      <div className="text-3xl font-semibold">Please Login Here</div>
      <div className="p-8 bg-slate-100 shadow-md rounded-md flex flex-col items-center">
        <form
          method="post"
          className="w-96 flex flex-col gap-4 items-start"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="px-2 w-full border-2 rounded-md outline-2 py-1.5 focus:outline-indigo-600"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="password" className="font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="px-2 w-full border-2 rounded-md outline-2 py-1.5 focus:outline-indigo-600"
            onChange={(e) => handleChange(e)}
          />

          <button
            type="submit"
            className="w-full mt-4 bg-[#4f46e5] text-white font-medium text-lg  rounded-md outline-2 py-1.5 hover:bg-indigo-500"
          >
            Login
          </button>

          <div className="flex w-full gap-2 justify-between">
            <div className="text-violet-700 font-semibold cursor-pointer">
              Forgot Password?
            </div>
            <div>
              <span className=" text-gray-700 mr-2">Not sign up?</span>
              <a
                href="/register"
                className=" text-violet-700 font-semibold cursor-pointer"
              >
                Register
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <hr className=" w-28 "></hr>
            <span className="text-gray-700 font-medium mb-1.5">
              continue with
            </span>
            <hr className=" w-28"></hr>
          </div>

          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-gray-800 text-white font-medium rounded-md outline-2 py-1.5 hover:bg-gray-700 flex justify-center items-center gap-2 p-2"
            >
              <img src="./google.svg" alt="google-icon" className="w-6" />
              <span>Login With Google</span>
            </button>
          </div>
        </form>
      </div>
      {/* <Toaster position="top-center" /> */}
    </div>
  );
};

export default Login;
