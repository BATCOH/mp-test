import { FC } from "react";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Store } from "types";
import { logInfo } from "utils";
import TestLocationForm from "./TestLocationForm";

type Props = {
  store: Store;
};

const TestLocationsList: FC<Props> = ({ store }) => {
  const addNewForm = action(() => {
    const location = store.locations[0];
    const env = store.envs[0];

    store.createNewForm({
      locationID: location?.locationID,
      envID: env?.envID,
      hint: "",
    });
  });

  const deleteForm = action((id: number) => {
    //
  });

  const log = () => {
    // logInfo();
  };

  return (
    <>
      {store.isLoaded ? (
        store.userForms.map((form, id: number) => (
          <TestLocationForm
            id={id}
            locations={store.locations}
            envs={store.envs}
            servers={store.servers} // @todo filter
            onDelete={() => deleteForm(id)}
            key={`location-${id}`}
          />
        ))
      ) : (
        <h3>Данные загружаются...</h3>
      )}

      <div>
        <button onClick={addNewForm} className="button-action">
          <FontAwesomeIcon icon={faPlus} /> Добавить тестовую локацию
        </button>
        <button onClick={log} className="button-action">
          <FontAwesomeIcon icon={faCircleInfo} /> Вывести результат в консоль
        </button>
      </div>
    </>
  );
};

export default observer(TestLocationsList);
