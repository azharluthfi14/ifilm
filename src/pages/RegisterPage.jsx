import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { supabase } from "../supabase";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      toast(error.message);
    } else {
      // Redirect user to Dashboard
      toast("Your account has been successfully created.");
      navigate("/login");
    }
  };

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      toast(error.message);
    }
  };

  return (
    <div className="flex layout items-center justify-center h-screen">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-gray-900 md:bg-gray-800 border border-gray-900 md:border-gray-700 rounded-xl shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 lg:w-6 lg:h-6 mr-1 text-sky-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sky-600 hover:text-sky-500 decoration-2 hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <button
                onClick={handleSignInWithGoogle}
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-medium
                 bg-gray-700 text-gray-200 shadow-sm align-middle hover:bg-gray-600 focus:outline-none focus:ring-2
                  focus:ring-sky-600 transition-all text-sm 
                   "
              >
                <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>

              <div
                className="py-3 flex items-center text-xs text-gray-300 uppercase before:flex-[1_1_0%] 
              before:border-t before:border-gray-700 before:mr-6 after:flex-[1_1_0%] after:border-t 
              after:border-gray-700 after:ml-6"
              >
                Or
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid">
                  {/* <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                      Fullname
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      value={full_name}
                      onChange={(e) => setFullname(e.target.value)}
                      name="fullname"
                      required
                      className="py-3 px-4 block bg-gray-900 md:bg-gray-800 w-full border-gray-700
                      rounded-md text-sm focus:border-sky-600  focus:ring-sky-600"
                    />
                  </div> */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      required
                      className="py-3 px-4 block bg-gray-900 md:bg-gray-800 w-full border-gray-700
                      rounded-md text-sm focus:border-sky-600  focus:ring-sky-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm mb-2 text-gray-300">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="py-3 px-4 block bg-gray-900 md:bg-gray-800 w-full border-gray-600
                      rounded-md text-sm focus:border-sky-600  focus:ring-sky-600 pr-5"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute z-10 bg-gray-800 flex inset-y-3 justify-center p-1 rounded-full items-center right-3.5 bottom-2.5"
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          required
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-700 bg-gray-700 text-sky-600 focus:ring-sky-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                          I accept the{" "}
                          <Link
                            to="#"
                            className="text-sky-600 decoration-2 hover:underline font-medium"
                          >
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border
                     border-transparent font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none 
                     focus:ring-2 focus:ring-sky-400 transition-all text-sm"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
