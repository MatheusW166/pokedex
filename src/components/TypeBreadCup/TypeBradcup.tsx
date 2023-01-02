import { Categories } from "../../models/Categories";
import "../../helpers/string.extensions";
import clsx from "clsx";

interface TypeBreadCupProps {
  type: Categories;
  className?: string;
}

export function TypeBreadCup({ type, className }: TypeBreadCupProps) {
  return (
    <p className={clsx("type-breadcup", type, className)}>
      {type.initCap()}
    </p>
  );
}
