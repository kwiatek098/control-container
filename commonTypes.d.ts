declare interface Class<T> {
  new(...prams: any[]): T
}

declare interface Action<K extends string, P = {}> {
  type: K;
  payload?: P;
}

declare module '*.scss' {
  const out: {
    [key: string]: string
  };

  export = out;
}

declare interface AppConfig {
  oAuthClientId: string
  oAuthDomain: string
  loggingApiUri: string
}

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
}
