import { Component }        from '@angular/core';
import { NgModule }         from "@angular/core";
import { CommonModule }     from "@angular/common";
import { Dropdown }         from "./Dropdown.directive";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css','ciprs.css','bootstrap.css']
})

export class AppComponent {
  title = 'HR SMS Mockup';

  pages: string[] = ["one", "two", "three", "four"];
  refData = [
      {name:'select', value: 'none'},
      {name:'First', value: 'one'},
      {name:'Second', value: 'two'}
      ];

    printOpening() {
        console.log("opened!");
    }

    printClosing() {
        console.log("closed!");
    }

    select() {
        console.log("selected ");
    }
}