import { Injectable, signal } from '@angular/core';
import type { Professional } from '../models/professional.model';
import { computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProfessionalService {
  private _professionals = signal<Professional[]>([
    {
      id: 1,
      name: 'Ana Souza',
      specialty: 'Design de Sobrancelhas',
      bio: 'Especialista em micropigmentação e design natural.',
      priceRange: 'R$ 50 - R$ 120',
      rating: 4.8,
      availableDates: [new Date('2025-11-03'), new Date('2025-11-04'), new Date('2025-11-07')]
    },
    {
      id: 2,
      name: 'Carlos Lima',
      specialty: 'Barbeiro e Visagista',
      bio: 'Cortes, modelagem e atendimento masculino completo.',
      priceRange: 'R$ 30 - R$ 80',
      rating: 4.6,
      availableDates: [new Date('2025-11-02'), new Date('2025-11-08'), new Date('2025-11-09')]
    },
    {
      id: 3,
      name: 'Juliana Reis',
      specialty: 'Massoterapia',
      bio: 'Terapias relaxantes e fisioterápicas.',
      priceRange: 'R$ 60 - R$ 150',
      rating: 4.9,
      availableDates: [new Date('2025-11-01'), new Date('2025-11-05'), new Date('2025-11-06')]
    }
  ]);
  professionals = this._professionals;
  list = this._professionals.asReadonly();

  // busca por id
  getById(id: number) {
    return computed(() => this._professionals().find(p => p.id === id));
  }

  // método mock para filtrar por especialidade
  filterBySpecialty(term: string) {
    const t = term?.toLowerCase() ?? '';
    return computed(() => this._professionals().filter(p => p.name.toLowerCase().includes(t) || p.specialty.toLowerCase().includes(t)));
  }
}
