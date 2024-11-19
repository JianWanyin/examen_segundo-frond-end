import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Head() {
  return (
    <div className="header">
      <span>lunes-viernes: 9:00 - 15:00</span>
      <span>2022 EXAMEN DE INF 636</span>
      <div className="icon_container">
        <a className="text-white" href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="text-white" href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="text-white" href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Head;
