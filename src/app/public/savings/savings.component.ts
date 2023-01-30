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
    let selector = 'openAccount';
    this.scrollToElement(`#${selector}`)
  }

  scrollToElement(element_ref: any, offset = 10) {
    setTimeout(() => {
      let is_selector = (typeof element_ref) == "string";
      let element = (is_selector) ? document.querySelector(element_ref) : element_ref;
      let scroll_extent = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo(0, scroll_extent);
    }, 200);
  }

}
