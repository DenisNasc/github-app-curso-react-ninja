import {Action} from 'redux';

export interface AplicationSchema {
  fetchUserStart: boolean;
  fetchUserSuccess: boolean;
  fetchUserFail: boolean;
}

export interface ActionAplicationSchema extends Action {
  type: string;
  payload?: AplicationSchema;
}
