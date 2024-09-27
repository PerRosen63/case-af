export interface IOccupation {
  preferred_label: string;
  id: string;
  narrower: {
    id: string;
    preferred_label: string;
  }[];
}
