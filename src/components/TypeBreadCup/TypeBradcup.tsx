import { Categories } from "../../models/Categories";
import "../../helpers/string.extensions";
import clsx from "clsx";
import React from "react";

interface TypeBreadCupProps {
  type: Categories;
  className?: string;
  style?: React.CSSProperties;
}

export function TypeBreadCup({ type, className, style }: TypeBreadCupProps) {
  return (
    <p className={clsx("type-breadcup", type, className)} style={style}>
      {type.initCap()}
    </p>
  );
}
