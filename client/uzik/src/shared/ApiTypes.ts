export type SignUpType = {
  email: string;
  password: string;
  name: string;
};

export type SignInType = {
  email: string;
  password: string;
};

export type AddPostType = {
  writer: string,
  job: string,
  title: string,
  contents: string,
  name: string,
}