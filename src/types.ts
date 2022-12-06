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

export interface UserForm {
  locationID: number;
  envID: number;
  hint: string;
}

export type UserForms = UserForm[];

export interface Store {
  isLoaded: boolean;
  locations: Location[];
  envs: Env[];
  servers: Server[];
  userForms: UserForms;

  fetchData: VoidFunction;
  createNewForm: (params: {
    locationID: number;
    envID: number;
    hint: string;
  }) => void;
  deleteForm: (id: number) => void;
  updateForm: (params: {
    id: number;
    locationID: number;
    envID: number;
    hint: string;
  }) => void;
}
