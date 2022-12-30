/* eslint-disable quotes */
import { Categories } from "../../models/Categories";
import "../../helpers/string.extensions";

interface TypeBreadCupProps {
  type: Categories;
}

export function TypeBreadCup({ type }: TypeBreadCupProps) {
  return (
    <p className={`type-breadcup ${type}`}>
      {type.initCap()}
    </p>
  );
}
