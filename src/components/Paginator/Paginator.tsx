import { IonIcon } from "@ionic/react";
import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";

interface PaginatorProps {
  pageNumber: number;
  totalPages: number;
  onNavigateNext(): void;
  onNavigateBack(): void;
}

export function Paginator({
  pageNumber,
  totalPages,
  onNavigateBack,
  onNavigateNext
}: PaginatorProps) {
  return (
    <div className="paginator">
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
