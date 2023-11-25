export interface IAuthInputs {
  username: string;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
  type: string;
}
