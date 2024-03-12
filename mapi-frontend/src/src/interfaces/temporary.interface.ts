import { Component, Model, Operation } from ".";

export interface TemporaryState {
  teams: Team[];
  orderBy: string;
  search: string;
  operations: Operation[];
  teamActive: Team | null;
  modelActive: Model | null;
  componentActive: Component | null;
  teamSave: Team | null;
  totalPagesOperations: number;
}

export interface Team {
  id_team: number;
  team_name: string;
}
