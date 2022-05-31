export interface User {
  user_id?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  avatar?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  terms?: boolean;
  birthday?: string;
  country_code?: number;
  gender?: number;
  i_follow?: boolean;
}

export interface LoginProps {
  token: string;
  createdAt: number;
  user: User;
}
