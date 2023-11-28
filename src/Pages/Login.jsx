
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authContext } from "../Components/Context";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: Yup.string().min(5).required("Please enter a password"),
});

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoged } = useContext(authContext);

  const handleLogin = async (values) => {
    try {
      const user = await signInWithEmailAndPassword(auth, values.email, values.password);
      setIsLoged(true);
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="w-full max-w-sm m-auto mt-8">
        <div className="bg-blue-100 rounded p-4 mb-4">
          <h2 className="text-2xl text-center mb-4 font-semibold">Login</h2>
          <Formik
            initialValues={initialValue}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-500 text-xs italic">{errors.email}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.password && touched.password ? (
                    <p className="text-red-500 text-xs italic">{errors.password}</p>
                  ) : null}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Login
                  </button>
                  <p>
                    Not registered? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
