import { GET_USER } from "./consts";
export declare interface UserInfo {
  /**
   * The display name of the user.
   */
  readonly displayName: string | null;
  /**
   * The email of the user.
   */
  readonly email: string | null;
  /**
   * The phone number normalized based on the E.164 standard (e.g. +16505550101) for the
   * user.
   *
   * @remarks
   * This is null if the user has no phone credential linked to the account.
   */
  readonly phoneNumber: string | null;
  /**
   * The profile photo URL of the user.
   */
  readonly photoURL: string | null;
  /**
   * The provider used to authenticate the user.
   */
  readonly providerId: string;
  /**
   * The user's unique ID, scoped to the project.
   */
  readonly uid: string;
}

type UserType = {
  displayName: null | string;
  email: string;
  phoneNumber: null | string;
  photoURL: null | string;
  providerId: string;
  uid: string;
};
export type GetUserActionType = {
  type: typeof GET_USER;
  payload: UserType | UserInfo | null;
};
export type INIT_STATE_TYPE = {
  user: UserType | UserInfo | null;
};

export type AuthReducerType = {
  INIT_STATE: INIT_STATE_TYPE;
  action: GetUserActionType;
};
// export type UseReducerType = {
//   state: INIT_STATE_TYPE;
//   dispatch: ({}: AuthActionType) => AuthActionType;
// };
