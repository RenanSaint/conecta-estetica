export interface Professional {
  id: number;
  name: string;
  specialty: string;
  bio?: string;
  priceRange?: string;
  rating?: number;
  availableDates?: string[]; // ISO dates for demo
}
