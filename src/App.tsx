import { useContext } from "react";
import { storeContext } from "store";
import TestLocationsList from "./TestLocationsList";

export default function App() {
  const store = useContext(storeContext);

  return (
    <div className="app">
      <TestLocationsList store={store} />
    </div>
  );
}
