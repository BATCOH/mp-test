import { FC, useContext, useEffect } from "react";
import { storeContext } from "store";

const Bootstrap: FC = () => {
  const store = useContext(storeContext);

  useEffect(() => {
    try {
      store.fetchData();
    } catch (error) {
      console.error("Error on data loading", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Bootstrap;
