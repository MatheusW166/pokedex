import { IonIcon } from "@ionic/react";
import clsx from "clsx";
import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";

interface PaginatorProps {
  className?: string;
  pageNumber: number;
  totalPages: number;
  onNavigateNext(): void;
  onNavigateBack(): void;
}

export function Paginator({
  pageNumber,
  totalPages,
  className,
  onNavigateBack,
  onNavigateNext
}: PaginatorProps) {
  return (
    <div className={clsx("paginator", className)}>
      <div onClick={onNavigateBack}>
        <IonIcon icon={chevronBackOutline}></IonIcon>
      </div>
      <p>
        Page <span>{pageNumber}</span> of <span>{totalPages}</span>
      </p>
      <div onClick={onNavigateNext}>
        <IonIcon icon={chevronForwardOutline}></IonIcon>
      </div>
    </div>
  );
}
