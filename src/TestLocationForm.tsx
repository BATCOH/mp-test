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
  id: number;
  locations: Locations;
  envs: Envs;
  servers: Servers;
  onDelete: VoidFunction;
};

const TestLocationForm: FC<Props> = ({
  id,
  locations,
  envs,
  servers,
  onDelete,
}) => {
  return (
    <div className="test-location-form">
      <div className="test-location-form__row">
        <h2 className="title">
          <FontAwesomeIcon icon={faFlask} /> Тестовая локация {id + 1}
        </h2>
        <button className="button-delete" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashCan} color="var(--color-error)" />
        </button>
      </div>

      <div className="test-location-form__row">
        <div>
          Локация <FontAwesomeIcon icon={faLocationDot} />
          <select name="locations">
            <option value="">locations</option>
          </select>
        </div>
        <div>
          Среда <FontAwesomeIcon icon={faLeaf} />
        </div>
        <select name="environments">
          <option value="">environments</option>
        </select>
        <p>
          Серверы <FontAwesomeIcon icon={faServer} /> {formatData(servers)}
        </p>
      </div>

      <div className="test-location-form__row">
        Подсказка
        <label>
          <FontAwesomeIcon icon={faQuestion} />
          <input type="text" placeholder="Комментарий по локации" />
        </label>
      </div>
    </div>
  );
};

export default TestLocationForm;
