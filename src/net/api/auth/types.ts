export interface IAuthApi {
  checkToken: () => Promise<void>;
  login: () => Promise<void>;
}
