interface IResponse<D, E = null> {
  message?: string;
  data: D;
  extra: E;
}

export { IResponse };
