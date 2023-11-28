
import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router";

const SignUpSchema = Yup.object({
  name: Yup.string().min(3).required("Please enter a name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  number: Yup.string().min(5).required("Please enter a number"),
  password: Yup.string().min(10).max(15).required("Please enter a password"),
  cpassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
});

const initialValue = {
  email: "",
  password: "",
};


const SignUp = () => {
  const navigate = useNavigate();

  // const Sign = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       SignEmail,
  //       setNumber,
  //       SignPassword,
  //       setcpassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  
  const signss = async (values) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    navigate(`/login`);
  };
  return (
    <div className="w-full max-w-sm m-auto mt-8">
      <div className="bg-blue-100 rounded p-4 mb-4">
        <h2 className="text-2xl text-center mb-4 font-semibold">Signup</h2>
        <Formik initialValues={initialValue} validationSchema={SignUpSchema} onSubmit={signss}>
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
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
                  htmlFor="number"
                >
                  Number
                </label>
                <Field
                  type="number" 
                  name="number"
                  className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.number && touched.number ? (
                  <p className="text-red-500 text-xs italic">{errors.number}</p>
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
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cpassword"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="cpassword"
                  className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.cpassword && touched.cpassword ? (
                  <p className="text-red-500 text-xs italic">
                    {errors.cpassword}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit" 
                  className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                  onClick={() => navigate("/login")}
                >
                  Already Registered?
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { SignUp, SignUpSchema };

