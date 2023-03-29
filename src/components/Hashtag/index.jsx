import Card from "../../objects/Card";
import Player from "../../objects/Player";
import "./styles.css";

const Hashtag = () => {
  return (
    <Card>
      <ul className="hashtag">
        <li><Player player="x" /></li>
        <li><Player player="o" /></li>
        <li><Player player="x" /></li>
        <li><Player player="o" /></li>
        <li><Player player="x" /></li>
        <li><Player player="o" /></li>
        <li><Player player="x" /></li>
        <li><Player player="o" /></li>
        <li><Player player="x" /></li>
      </ul>
      
    </Card>
  );
};

export default Hashtag;
