import { useRef } from "react";

const Form = (props) => {
    const nameRef = useRef();
    const ageRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const inputData = {
            name: nameRef.current.value,
            age: ageRef.current.value
        };
        props.onSubmitData(inputData);
        nameRef.current.value = '';
        ageRef.current.value = '';
    };

    return (
        <form className="max-w-[600px] p-4 rounded-lg space-y-3 bg-white mx-auto mt-7" onSubmit={submitHandler}>
            <div className="space-y-3">
                <label className="block capitalize font-semibold text-lg" htmlFor="username">username</label>
                <input type="text" id="username" className="w-full border rounded-md px-4 py-1" placeholder="Enter your name..." ref={nameRef} />
            </div>
            <div className="space-y-3">
                <label className="block capitalize font-semibold text-lg" htmlFor="age">age(Years)</label>
                <input type="number" id="age" className="w-full border rounded-md px-4 py-1" placeholder="Enter your age..." ref={ageRef} />
            </div>
            <button type="submit" className="capitalize px-3 py-1 text-white border border-cyan-600 bg-cyan-600 hover:text-cyan-600 hover:bg-white rounded-md">add user</button>
        </form>
    );
};

export default Form;