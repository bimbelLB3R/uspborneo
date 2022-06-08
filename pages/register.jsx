import React from 'react';
import { Layout } from '../components';
import Link from 'next/link';

const register = () => {
  return (
    <div className="h-screen bg-slate-50 flex justify-center items-center w-full">
      <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <Link href="/">
          <img
            className="h-14 mb-4 mx-auto cursor-pointer"
            src="/usp-logo.png"
            alt=""
          />
        </Link>
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Register
          </h1>
          <div>
            <label
              for="email"
              className="block mb-1 text-gray-600 font-semibold">
              Username
            </label>
            <input
              type="text"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-1 text-gray-600 font-semibold">
              Email
            </label>
            <input
              type="text"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-1 text-gray-600 font-semibold">
              Password
            </label>
            <input
              type="text"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-1 text-gray-600 font-semibold">
              Confirm Password
            </label>
            <input
              type="text"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
            />
          </div>
        </div>
        <button className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">
          Register
        </button>
      </div>
    </div>
  );
};

export default register;
