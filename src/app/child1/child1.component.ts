import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() dataSource: any;
  @Input() displayedColumns: any;
  @Input() footer: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simple: SimpleChange) {
  }
}
