const Input = ({ type = "text", id = "", value = "" }) => {
  return (
    <>
      <input className="input" type={type} id={id} value={value} />
    </>
  );
};

export default Input;
