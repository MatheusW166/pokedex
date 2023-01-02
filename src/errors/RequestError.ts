export interface RequestError extends Error {
  name: string;
  message: string;
  data?: object;
  statusCode?: number;
  statusText?: string;
}
