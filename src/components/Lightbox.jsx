import { useState } from "react";

const Lightbox = (props) => {
  const [linkImage, setLinkImage] = useState("");
  return (
    <div className=" z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center">
      <div className="relative">
        <button
          className="absolute top-5 right-5 text-white text-sm px-3 py-1 rounded bg-gray-800"
          onClick={() => props.desactive()}
        >
          Close
        </button>
        <img
          className=" h-[90vh]"
          src={props.url}
          alt="Lightbox Image"
        />
      </div>
    </div>
  );
};

export default Lightbox;
