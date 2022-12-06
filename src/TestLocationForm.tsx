import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faLocationDot,
  faTrashCan,
  faLeaf,
  faQuestion,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { Locations, Envs, Servers } from "types";
import { formatData } from "utils";

type Props = {
  locations: Locations;
  envs: Envs;
  servers: Servers;
};

const TestLocationForm: FC<Props> = ({ locations, envs, servers }) => {
  return (
    <div>
      <div>
        <h2>
          <FontAwesomeIcon icon={faFlask} /> Тестовая локация
        </h2>
        <button>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>

      <div>
        {/* <FontAwesomeIcon icon={faLocationDot} /> */}
        <select name="locations">
          <option value="">locations</option>
        </select>
        {/* <FontAwesomeIcon icon={faLeaf} /> */}
        <select name="environments">
          <option value="">environments</option>
        </select>
        <p>
          Серверы <FontAwesomeIcon icon={faServer} /> {formatData(servers)}
        </p>
      </div>

      <label>
        <FontAwesomeIcon icon={faQuestion} />
        <input type="text" placeholder="Комментарий по локации" />
      </label>
    </div>
  );
};

export default TestLocationForm;
