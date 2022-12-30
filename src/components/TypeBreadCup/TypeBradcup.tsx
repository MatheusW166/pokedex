/* eslint-disable quotes */
import { Categories } from "../models/Categories";
import { initCap } from "../utils/initCap";

interface TypeBreadCupProps {
  type: Categories;
}

export function TypeBreadCup({ type }: TypeBreadCupProps) {
  return (
    <p className={`type-breadcup ${type}`}>
      {initCap(type)}
    </p>
  );
}
