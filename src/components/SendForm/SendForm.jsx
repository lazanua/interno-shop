import { useState } from "react";
import "./index.scss";
const SendForm = ({ hasCheckbox, inputsNames, buttonClasses }) => {
  const [dataUsers, setDataUsers] = useState({});
  const [isCorrectForm, setIsCorrectForm] = useState(true);
  const [notFilledInputs, setNotFilledInputs] = useState([]);
  const sendData = () => {
    let isFormFilled = true;
    inputsNames.forEach((input) => {
      const name = input.name;
      if (
        !dataUsers.hasOwnProperty(name) ||
        Object.values(dataUsers).some((value) => value === "")
      ) {
        isFormFilled = false;
        setNotFilledInputs((prev) => [...prev, name]);
        setIsCorrectForm(false);
      }
    });
    if (isFormFilled) {
      setIsCorrectForm(true);
      setDataUsers(
        (prevState) =>
          Object.keys(prevState).reduce((acc, key) => {
            acc[key] = "";
            return acc;
          }, {}) //очищаємо всі інпути
      );
      setNotFilledInputs([]);
    }
  };
  return (
    <div className="form text">
      <div className="flex flex-col flex-nowrap lg:flex-row lg:flex-wrap gap-x-[40px] gap-y-[50px] justify-center xl:items-center">
        {inputsNames.map((input, index) => (
          <div className="">
            <input
              type={input.type}
              className={`${
                notFilledInputs.includes(input.name)
                  ? "form__input--warning"
                  : ""
              }
              ${
                index === inputsNames.length - 1
                  ? "xl:w-[800px] w-[100%] h-[183px]"
                  : "xl:w-[380px] w-[100%] h-[45px]"
              }`}
              placeholder={input.name}
              onChange={(e) =>
                setDataUsers((prevState) => ({
                  ...prevState,
                  [input.name]: e.target.value,
                }))
              }
              value={dataUsers?.[input.name]}
            />
          </div>
        ))}
      </div>
      {hasCheckbox && (
        <div className="form__checkbox-wrapper flex gap-[10px] mt-[36px]">
          <input type="checkbox" id="customCheckbox" class="form__checkbox " />
          <label for="customCheckbox">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      )}
      <div
        className={`text mt-[12px]  ${
          isCorrectForm ? "text-white" : "form__warning"
        }`}
      >
        Please enter the fields
      </div>
      <div
        className={`form__button-wrapper flex lg:justify-center md:justify-center sm:justify-center  ${buttonClasses}`}
      >
        <button
          type="submit"
          className="form__button button w-[220px] mt-[30px]"
          onClick={sendData}
        >
          <span className="--after-arow">Send Now</span>
        </button>
      </div>
    </div>
  );
};

export default SendForm;
