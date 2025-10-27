import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ProfessionalService } from '../../../core/services/professional.service';

@Component({
  selector: 'app-professionals-list',
  imports: [CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './professionals-list.html',
  styleUrl: './professionals-list.css',
})
export class ProfessionalsList {
  private svc = inject(ProfessionalService);
  searchControl = new FormControl('');
  filtered = computed(() => {
    const term = (this.searchControl.value ?? '').toString().trim();
    if (!term) return this.svc.professionals();
    return this.svc.professionals().filter(p =>
      p.name.toLowerCase().includes(term.toLowerCase()) ||
      p.specialty.toLowerCase().includes(term.toLowerCase())
    );
  });
}
