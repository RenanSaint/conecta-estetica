import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessionalService } from '../../core/services/professional.service';
import type { Appointment } from '../../core/models/appointment.model';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: 'appointments.html'
})
export class Appointments {
  private profSvc = inject(ProfessionalService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  professionals = this.profSvc.professionals();
  last: Appointment | null = null;

  form = new FormGroup({
    clientName: new FormControl(''),
    professionalId: new FormControl(this.professionIdFromQuery()),
    date: new FormControl<Date>(this.dateFromQuery() ? new Date(this.dateFromQuery()!) : new Date()),
    time: new FormControl<Date>(new Date()),
    notes: new FormControl('')
  });

  submit() {
    const v = this.form.value;
    const appt: Appointment = {
      id: Math.floor(Math.random() * 100000),
      professionalId: Number(v.professionalId),
      clientName: v.clientName!,
      date: v.date ? new Date(v.date).toISOString().slice(0,10) : '',
      time: v.time ? new Date(v.time).toTimeString() : '',
      notes: v.notes!
    };
    // aqui poderíamos chamar um service — por demo guardamos localmente
    this.last = appt;
    // redirecionar ou limpar
    this.form.reset();
  }

  private professionIdFromQuery() {
    const q = this.route.snapshot.queryParamMap.get('professionalId');
    return q ? Number(q) : null;
  }

  private dateFromQuery() {
    return this.route.snapshot.queryParamMap.get('date');
  }
}
