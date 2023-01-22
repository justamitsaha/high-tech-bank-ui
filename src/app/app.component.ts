import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showSidebar: boolean = false;

  ngOnInit(): void {
    this.showSidebar = (window.location.href).includes("secure");
  }

}
