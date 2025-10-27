export interface Appointment {
  id: number;
  professionalId: number;
  clientName: string;
  date: string; // ISO
  time: string; // e.g. "14:00"
  notes?: string;
}
