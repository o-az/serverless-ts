interface EnvironmentVariables {
  readonly DATABASE_URL: string;
}
declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: string;
  }
}
