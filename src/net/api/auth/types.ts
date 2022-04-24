export interface IAuthApi {
  checkToken: () => Promise<{ isAuthed: boolean }>;
  logout: () => Promise<void>;
}
