import { createContext } from "react";

interface LoadingContextProps {
  onLoad?(): undefined;
}

export const LoadingContext = createContext<LoadingContextProps | null>(null);
