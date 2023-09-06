export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  username: string;
  email: string;
  password: string;
}

export interface IAuthToken {
  access_token: string;
  refresh_token: string;
}
