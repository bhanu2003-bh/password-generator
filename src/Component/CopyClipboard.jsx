import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function CopyClipboard({ password }) {
  const reference = useRef(null);

 async function onClick() {
    if (reference.current) {
      reference.current.select(); 
       reference.current.setSelectionRange(0,20);
     await navigator.clipboard.writeText(reference.current.value)
    }
  }

  return (
    <div style={{ margin: '40px' }}>
      <input
        type="text"
        className='text-3xl text-center text-black bg-white rounded'
        style={{ margin: '20px' , width:'50%'}}
        ref={reference}
        value={password}
        readOnly  
      />
      <button
        className="text-3xl bg-blue-500 text-white rounded w-1/6"
        onClick={onClick}
      >
        Copy
      </button>
    </div>
  );
}
