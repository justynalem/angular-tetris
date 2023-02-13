import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() public formCompleted = new EventEmitter<string>();

  public onSubmit(playerName: string) {
    this.formCompleted.emit(playerName);
  }
}
