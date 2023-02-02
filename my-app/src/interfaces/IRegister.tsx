export type RegisterRequest = {
  email: string;
  password: string;
  full_name: string;
  address: string;
  city_id: number;
};

export type IRegisterFailed = {
  email?: string;
  password?: string;
  full_name?: string;
  address?: string;
  city_id?: string;
};
