export interface RequestError extends Error {
  name: string;
  message: string;
  data?: object;
  statusCode?: number;
  statusText?: string;
}

export function isRequestError(res: object): res is RequestError {
  return (res as RequestError).message !== undefined;
}
