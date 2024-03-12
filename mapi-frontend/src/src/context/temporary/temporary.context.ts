import { createContext } from "react";
import {
  Component,
  Model,
  Operation,
  Team,
  TemporaryState,
} from "src/interfaces";

export type TemporaryContextProps = {
  temporaryState: TemporaryState;
  setTeams: (teams: Team[]) => void;
  setTeamActive: (team: Team | null) => void;
  setModelActive: (model: Model | null) => void;
  setTeamSave: (team: Team | null) => void;
  addTeam: (team: Team) => void;
  setOperations: (operations: Operation[]) => void;
  removeOperation: (id_operation: number) => void;
  setTotalPagesOperation: (total_pages: number) => void;
  setComponentActive: (component: Component | null) => void;
  setOrderBy: (orderBy: string) => void;
  setSearch: (code: string) => void;
};

export const TemporaryContext = createContext<TemporaryContextProps>(
  {} as TemporaryContextProps
);
