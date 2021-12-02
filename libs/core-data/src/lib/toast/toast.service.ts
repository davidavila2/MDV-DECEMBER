import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private notify: MatSnackBar) { }

  notification(message: string, action = 'okay') {
    this.notify.open(message, action, {
      duration: 3000
    });
  }
}
