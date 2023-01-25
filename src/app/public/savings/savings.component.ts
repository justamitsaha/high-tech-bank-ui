import { Component } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent {

  showForm: boolean = false;

  showAccForm() {
    this.showForm = !this.showForm;
  }

}
