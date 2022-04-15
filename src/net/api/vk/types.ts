export interface IVKApi {
  getGraph: (formData: IFormDataDto) => Promise<any>;
}

export interface IFormDataDto {
  depth: number;
  width: number;
}
