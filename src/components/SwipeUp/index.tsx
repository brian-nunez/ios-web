import React, { FormHTMLAttributes, useState } from "react";
import Camera from "./camera";
import TopBar from "./top-bar";

const initialValues = {
  username: '',
  password: '',
};

function SwipeUp() {
  const [values, setValues] = useState(initialValues);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setValues(initialValues);
  };

  const onChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
    setValues(vals => ({ ...vals, [name]: value }));
  };

  return (
    <div className="relative bg-[url(/ios-bg.jpeg)] bg-no-repeat bg-cover bg-center h-screen  overflow-hidden">
      <TopBar />
      <Camera />
      <div className="container mx-auto px-6 py-20 flex flex-col justify-start items-center w-full h-full">
        <h1 className="text-white text-3xl font-bold">
          Login
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mt-6">
            <div className="relative w-56 px-4 py-4">
              <input
                id="username"
                name="username"
                className="w-full h-full px-4 py-2 text-center bg-zinc-800/80 text-white rounded text-lg"
                placeholder="Username"
                type="text"
                onChange={onChange}
              />
            </div>
            <div className="relative w-56 px-4 py-4">
              <input
                id="password"
                name="password"
                className="w-full h-full px-4 py-2 text-center bg-zinc-800/80 text-white rounded text-lg"
                placeholder="Password"
                type="password"
                onChange={onChange}
              />
            </div>
            <div className="relative w-56 px-4 py-4">
              <button
                type="submit"
                className="w-full h-full px-4 py-2 text-center bg-[#007AFF] hover:bg-[#007AFF]/80 active:bg-[#007AFF]/80 text-white rounded text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SwipeUp;
