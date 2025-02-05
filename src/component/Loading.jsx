import Onload from "../assets/img/Spin@1x-1.0s-200px-200px.gif";
import HandwritingWithPen from "./HandwritingText";

const Loading = () => (
  <div className="loading-container bg-light m-auto">
    <div className="m-auto">
      <HandwritingWithPen text="Hello World!" />
      <img src={Onload} alt="..." className="img-fluid" width={"50px"} />
    </div>
  </div>
);

export default Loading;
