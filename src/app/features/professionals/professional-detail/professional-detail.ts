import { CommonModule, formatDate } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProfessionalService } from '../../../core/services/professional.service';

@Component({
  selector: 'app-professional-detail',
  imports: [CommonModule, RouterModule, MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './professional-detail.html',
  styleUrl: './professional-detail.css',
})
export class ProfessionalDetail {
  private route = inject(ActivatedRoute);
  private svc = inject(ProfessionalService);
  id = Number(this.route.snapshot.paramMap.get('id'));
  professional = this.svc.getById(this.id)();
}
