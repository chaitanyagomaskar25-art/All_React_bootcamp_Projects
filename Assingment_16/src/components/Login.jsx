import React from "react";
import { useIsAuth, useSetIsAuth } from "../context/AuthContext";
import Movie from "./Movie";
import { Navigate } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandle = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuth(true);
  };

  const isAuth = useIsAuth();
  const setIsAuth = useSetIsAuth();

  if (isAuth) {
    return <Navigate to="/movie" replace />;
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl shadow-slate-100 ring-1 ring-slate-200">
    
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
      <p className="mt-2 text-sm text-slate-500">Please enter your details to sign in</p>
    </div>

    <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitHandle)}>
      
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-slate-700 block">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Chaitanya"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition duration-200 ease-in-out focus:ring-2
            ${errors.name 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
              : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'}`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-xs font-medium text-red-600 flex items-center gap-1">
            ⚠️ {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-slate-700 block">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="chiatanya@example.com"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition duration-200 ease-in-out focus:ring-2
            ${errors.email 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
              : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs font-medium text-red-600 flex items-center gap-1">
            ⚠️ {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium text-slate-700 block">Password</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition duration-200 ease-in-out focus:ring-2
            ${errors.password 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
              : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'}`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
              message: "Password must contain uppercase, lowercase, number and special character",
            },
          })}
        />
        {errors.password && (
          <p className="mt-1 text-xs font-medium text-red-600 max-w-sm leading-relaxed">
            ⚠️ {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-100 transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
      >
        Sign In
      </button>
      
    </form>
  </div>
</div>
  );
};
export default Login;
