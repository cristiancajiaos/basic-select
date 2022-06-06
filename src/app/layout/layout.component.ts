import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  foo: any[] = [
    {name: 'One', value: 1},
    {name: 'Two', value: 2},
    {name: 'Three', value: 3}
  ];

  bar: any;

  constructor() { }

  ngOnInit(): void {
    this.bar = this.foo[0].value;
  }

}
