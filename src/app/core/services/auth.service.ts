import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<{ name: string; email: string , isPro: boolean} | null>(null);
  user = this._user.asReadonly();

  login(email: string, password: string) {
    // Mock: aceita qualquer credencial por demo
    this._user.set({ name: 'Usuário Demo', email, isPro: true});
    return true;
  }

  register(name: string, email: string, password: string, isPro: boolean) {
    // Mock: registra localmente
    this._user.set({ name, email, isPro });
    return true;
  }

  logout() {
    this._user.set(null);
  }

  isLogged() { return !!this._user(); }
}
