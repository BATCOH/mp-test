import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { Store, Locations, Envs, Servers } from "types";
import { sleep } from "utils";
import sample from "./data.json";

class AppStore implements Store {
  isLoaded: boolean = false;
  locations: Locations = [];
  envs: Envs = [];
  servers: Servers = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = async () => {
    await sleep(1_000);

    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoaded = true;
    });
  };

  createNewLocation(id: number, name: string) {
    this.locations.push({
      locationID: id,
      name,
    });
  }
}

export const store = new AppStore();
export const storeContext = createContext(store);
