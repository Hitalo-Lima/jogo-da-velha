import Label from "../Label";
import "./styles.css";

const Input = ({type = "text"}) => {
  return (
    <form className="input">
      <input type={type} id="show" value="show"/>
      <Label htmlFor="show" content="Mostrar eventos"/>
    </form>
  );
};

export default Input;
