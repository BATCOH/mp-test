export interface Location {
  locationID: number;
  name: string;
}

export type Locations = Location[];

export interface Env {
  envID: number;
  name: string;
}

export type Envs = Env[];

export interface Server {
  serverID: number;
  name: string;
  locationID: number;
  envID: number;
}

export type Servers = Server[];

export interface Store {
  isLoaded: boolean;
  locations: Location[];
  envs: Env[];
  servers: Server[];
  fetchData: VoidFunction;
  createNewLocation: (id: number, name: string) => void;
}
