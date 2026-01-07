import { useRef } from "react";

function AlertButton({ text, message }) {
  // inisiasi Ref
  const counter = useRef(0);

  function handleOnClick(e) {
    console.info(e);
    alert(`${message} ${counter.current++}`);
  }

  return (
    <button className="btn btn-primary position-absolute bottom-4 right-4" onClick={handleOnClick}>
      {text}
    </button>
  );
}

export { AlertButton };
