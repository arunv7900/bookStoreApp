/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Signup() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add signup logic here
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box relative">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button and Login Link */}
              <div className="flex justify-around mt-4 items-center">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <p className="text-xl">
                  Have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setLoginModalOpen(true)}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <dialog
          id="login_modal"
          className="modal"
          open
          onClose={() => setLoginModalOpen(false)}
        >
          <Login />
        </dialog>
      )}
    </>
  );
}

export default Signup;
