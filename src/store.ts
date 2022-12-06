import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { Store, Locations, Envs, Servers, UserForms } from "types";
import { sleep } from "utils";
import sample from "./data.json";

class AppStore implements Store {
  isLoaded: boolean = false;
  locations: Locations = [];
  envs: Envs = [];
  servers: Servers = [];
  userForms: UserForms = [];

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

  createNewForm({
    locationID,
    envID,
    hint = "",
  }: {
    locationID: number;
    envID: number;
    hint: string;
  }) {
    this.userForms.push({
      locationID,
      envID,
      hint,
    });
  }

  deleteForm(id: number) {
    //
  }

  updateForm({
    id,
    locationID,
    envID,
    hint,
  }: {
    id: number;
    locationID: number;
    envID: number;
    hint: string;
  }) {
    if (id < 0 || !this.userForms.length) return;

    const currentForm = this.userForms[id];

    if (typeof locationID === "number") currentForm.locationID = locationID;
    if (typeof envID === "number") currentForm.envID = envID;
    if (typeof hint === "string") currentForm.hint = hint;
  }
}

export const store = new AppStore();
export const storeContext = createContext(store);
