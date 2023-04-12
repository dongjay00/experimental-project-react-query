export type UsersItemModel = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UsersAddressModel;
  phone: string;
  website: string;
  company: UsersCompanyModel;
};

export type UsersAddressModel = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UsersAddressGeoModel;
};

export type UsersAddressGeoModel = {
  lat: string;
  lng: string;
};

export type UsersCompanyModel = {
  name: string;
  catchPhrase: string;
  bs: string;
};
