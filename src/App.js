import Form from "./components/Form";
import ResultedItems from "./components/ResultedItem";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [valid, setValid] = useState(false);
  const [data, setData] = useState([]);

  const dataValidation = (data) => {
    if (data.name.trim().length === 0 || data.age.trim().length === 0) setValid("please fill the required data !!!");
    else if (data.name.trim().length > 0 && +data.age < 0) setValid("Age must be geater than {0} !!!");
    else {
      setData(
        prevstat => {
          return [
            ...prevstat,
            data
          ]
        }
      );
    };
  };

  const handleClose = (close) => {
    setValid(close);
  };

  return (
    <>
      {valid && <Modal text={valid} onCloseModal={handleClose} />}
      <div className="px-4 container mt-14 mx-auto space-y-7">
        <Form onSubmitData={dataValidation} />
        <div className="max-w-[600px] mx-auto space-y-3">
          {
            data.map((e, i) => <ResultedItems name={e.name} age={e.age} key={i} />)
          }
        </div>
      </div>
    </>
  );
};

export default App;
