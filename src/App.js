import Form from "./components/Form";
import ResultedItems from "./components/ResultedItem";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [empty, setEmpty] = useState(true);
  const [valid, setValid] = useState(true);
  const [data, setData] = useState([]);

  const dataValidation = (data) => {
    if (data.name.trim().length === 0 || data.age.trim().length === 0) setEmpty(false);
    else if (data.name.trim().length > 0 && +data.age < 0) setValid(false);
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
    setEmpty(close);
    setValid(close);
  };

  return (
    <div>
      {!empty && <Modal text={"please fill the required data !!!"} onCloseModal={handleClose} />}
      {!valid && <Modal text={"Age must be geater than {0} !!!"} onCloseModal={handleClose} />}
      <div className="px-4 container mt-14 mx-auto space-y-7">
        <Form onSubmitData={dataValidation} />
        <div className="max-w-[600px] mx-auto space-y-3">
          {(empty && valid) &&
            data.map((e, i) => <ResultedItems name={e.name} age={e.age} key={i} />)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
