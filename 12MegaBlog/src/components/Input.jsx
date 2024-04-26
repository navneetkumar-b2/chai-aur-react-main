import React, {useId} from 'react'
//child component
const Input = React.forwardRef( function Input({
    //forwardRef ke ander callback function hai ,jo return kr raha hai
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input

// example
// import React, { forwardRef } from 'react';

// const InputWithRef = forwardRef((props, ref) => {
//   return <input type="text" ref={ref} {...props} />;
// });

// function MyComponent() {
//   const inputRef = useRef(null); // Create a ref in the parent component

//   return (
//     <div>
//       <InputWithRef ref={inputRef} // Pass the ref to the child component
//       />
//     </div>
//   );
// }
// https://g.co/gemini/share/62b438fc3937
