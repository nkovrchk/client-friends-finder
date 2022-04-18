export interface IAuthApi {
  checkToken: () => Promise<{ isAuthed: boolean }>;
}
