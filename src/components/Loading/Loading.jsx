import { FcAdvance } from "react-icons/fc";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="load">
      <h3>Cargando...</h3>
      <div className="load-icon">
        <FcAdvance />
      </div>
    </div>
  );
};
