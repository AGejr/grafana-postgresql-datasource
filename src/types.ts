import { type SQLOptions } from '@grafana/sql';

export enum PostgresTLSModes {
  disable = 'disable',
  require = 'require',
  verifyCA = 'verify-ca',
  verifyFull = 'verify-full',
}

export enum PostgresTLSMethods {
  filePath = 'file-path',
  fileContent = 'file-content',
}
export interface PostgresOptions extends SQLOptions {
  tlsConfigurationMethod?: PostgresTLSMethods;
  sslmode?: PostgresTLSModes;
  sslRootCertFile?: string;
  sslCertFile?: string;
  sslKeyFile?: string;
  postgresVersion?: number;
  timescaledb?: boolean;
  enableSecureSocksProxy?: boolean;
  // Maximum total size, in bytes, of a single query's result set. 0 or unset
  // falls back to the server-wide dataproxy response_limit.
  responseLimitBytes?: number;
}

export interface SecureJsonData {
  password?: string;
}
