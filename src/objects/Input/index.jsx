import Label from "../Label";
import "./styles.css";

const Input = () => {
  return (
    <form className="input">
      <input type="checkbox" id="checkbox" value="show"/>
      <Label content="Mostrar eventos"/>
    </form>
  );
};

export default Input;
