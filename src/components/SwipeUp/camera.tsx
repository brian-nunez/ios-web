import React from "react";
import { CameraIcon } from "../icons";

function Camera() {
  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files?.[0]);
  };

  return (
    <div className="absolute bottom-8 right-8 w-12 h-12 cursor-pointer bg-zinc-800 rounded-full">
      <label htmlFor="camera" className="cursor-pointer w-full h-full flex justify-center items-center hover:opacity-90">
        <CameraIcon className="w-8 h-8 fill-white" />
      </label>
      <input
        onChange={onUpload}
        className="w-4 h-4 hidden"
        type="file"
        id="camera"
        name="camera"
        multiple={false}
        accept=".jpg, .jpeg, .png"
      />
    </div>
  );
}

export default Camera;
