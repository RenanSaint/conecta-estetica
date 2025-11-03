import { Injectable, signal } from '@angular/core';
import { Resource } from '../models/resource.model';

@Injectable({ providedIn: 'root' })
export class ProfessionalResources {
    private _resources = signal<Resource[]>([
        { 
            name: "Corte de Cabelo",
            description: "Corte de cabelo",
            imageUrl: null, 
            price: 20.00, 
            professionalId: 1
        }
    ]);
}