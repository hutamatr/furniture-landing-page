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

export interface ICatalog {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
