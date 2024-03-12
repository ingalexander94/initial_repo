import { useReducer } from "react";
import { TemporaryContext, temporaryReducer } from ".";
import {
  Component,
  Model,
  Operation,
  Team,
  TemporaryState,
} from "src/interfaces";

const INITIAL_STATE: TemporaryState = {
  teams: [],
  operations: [],
  orderBy: "ASC",
  search: "",
  teamActive: null,
  modelActive: null,
  teamSave: null,
  componentActive: null,
  totalPagesOperations: 1,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TemporaryProvider = ({ children }: Props) => {
  const [temporaryState, dispatch] = useReducer(
    temporaryReducer,
    INITIAL_STATE
  );

  const setTeams = (teams: Team[]) => {
    dispatch({ type: "setTeams", payload: teams });
  };

  const setTeamActive = (team: Team | null) => {
    dispatch({ type: "setTeamActive", payload: team });
  };

  const setComponentActive = (component: Component | null) => {
    dispatch({ type: "setComponentActive", payload: component });
  };

  const setModelActive = (model: Model | null) => {
    dispatch({ type: "setModelActive", payload: model });
  };

  const setTeamSave = (team: Team | null) => {
    dispatch({ type: "setTeamSave", payload: team });
  };

  const addTeam = (team: Team) => {
    dispatch({ type: "addTeam", payload: team });
  };

  const setOperations = (operations: Operation[]) => {
    dispatch({ type: "setOperations", payload: operations });
  };

  const removeOperation = (id_operation: number) => {
    dispatch({ type: "removeOperation", payload: id_operation });
  };

  const setTotalPagesOperation = (total_pages: number) => {
    dispatch({ type: "setTotalPagesOperation", payload: total_pages });
  };

  const setOrderBy = (orderBy: string) => {
    dispatch({ type: "setOrderBy", payload: orderBy });
  };

  const setSearch = (code: string) => {
    dispatch({ type: "setSearch", payload: code });
  };

  return (
    <TemporaryContext.Provider
      value={{
        temporaryState,
        setTeams,
        setTeamActive,
        setModelActive,
        setTeamSave,
        addTeam,
        setOperations,
        removeOperation,
        setTotalPagesOperation,
        setComponentActive,
        setOrderBy,
        setSearch,
      }}
    >
      {children}
    </TemporaryContext.Provider>
  );
};
