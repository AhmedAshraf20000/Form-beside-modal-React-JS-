import { createPortal } from "react-dom";

const ErrorModal = (props) => {
    return (
        <div className="px-4 w-full h-screen bg-black bg-opacity-50 absolute top-0">
            <div className="max-w-[600px] mx-auto rounded-lg bg-white pb-2 translate-y-[130%]">
                <header className="text-white bg-cyan-600 py-3 px-3 text-xl font-semibold rounded-t-lg">invalid input</header>
                <p className="capitalize px-4 py-7 text-lg ">{props.text}</p>
                <button onClick={props.handleCloseModal} className="ml-auto block mr-2 capitalize px-3 py-1 text-white border border-cyan-600 bg-cyan-600 hover:text-cyan-600 hover:bg-white rounded-md">okay</button>
            </div>
        </div>
    );
}

const Modal = (props) => {
    const handleCloseModal = () => {
        props.onCloseModal(null);
    };

    return (
        <>
            {
                createPortal(<ErrorModal handleCloseModal={handleCloseModal} text={props.text}/>, document.getElementById("modal-root"))
            }
        </>
    );
};

export default Modal;