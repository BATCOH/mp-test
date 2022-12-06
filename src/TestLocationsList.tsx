import { FC } from "react";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { Store } from "types";
import TestLocationForm from "./TestLocationForm";

type Props = {
  store: Store;
};

const TestLocationsList: FC<Props> = ({ store }) => {
  const addNewLocation = action(() => {
    // store.createNewLocation({})
  });

  const log = () => {
    //
  };

  return (
    <>
      {store.isLoaded ? (
        store.locations.map((location, index: number) => (
          <TestLocationForm
            locations={store.locations}
            envs={store.envs}
            servers={store.servers} // @todo filter
            key={`location-${index}`}
          />
        ))
      ) : (
        <div>Данные загружаются</div>
      )}

      <button onClick={addNewLocation}>Добавить тестовую локацию</button>
      <button onClick={log}>Вывести результат в консоль</button>
    </>
  );
};

export default observer(TestLocationsList);
