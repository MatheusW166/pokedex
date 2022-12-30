import { Categories } from "../../models/Categories";
import "../../helpers/string.extensions";
import clsx from "clsx";

interface TypeBreadCupProps {
  type: Categories;
}

export function TypeBreadCup({ type }: TypeBreadCupProps) {
  return (
    <p className={clsx("type-breadcup", type)}>
      {type.initCap()}
    </p>
  );
}
