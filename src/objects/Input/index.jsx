import Label from "../Label";
import "./styles.css";

const Input = () => {
  return (
    <form className="input">
      <input type="checkbox" id="show" value="show"/>
      <Label htmlFor="show" content="Mostrar eventos"/>
    </form>
  );
};

export default Input;
