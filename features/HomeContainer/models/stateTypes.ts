export enum HomeStatus {
  WELCOME,
  LOADING,
  MAIN,
  ERROR,
}

export type HomeState = {
  status: HomeStatus;
  data: any[];
};
