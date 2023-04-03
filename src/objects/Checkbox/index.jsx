import Input from "../Input";
import Label from "../Label";
import "./styles.css"

const Checkbox = ({ id = "", value = "", content = "" }) => {
  return (
    <>
      <Input id={id} value={value} type="checkbox" content={content} />
      <Label htmlFor={id} content={content} />
    </>
  );
};

export default Checkbox;