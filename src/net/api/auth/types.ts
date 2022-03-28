export interface IAuthApi {
  checkToken: () => Promise<void>;
}
