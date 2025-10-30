export interface Professional {
  id: number;
  name: string;
  specialty: string;
  bio?: string;
  priceRange?: string;
  rating?: number;
  availableDates?: Date[]; // ISO dates for demo
}
