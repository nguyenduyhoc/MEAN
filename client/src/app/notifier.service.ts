import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier/notifier.component';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(dispplayMessage: string, buttonText: string, messageType : 'error' | 'success') {
    this.snackBar.openFromComponent(NotifierComponent, {
      data:{
        message :dispplayMessage,
        buttonText: buttonText,
        type: messageType
      },
      duration: 5000, //5s
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass: messageType
    });
  }
}
