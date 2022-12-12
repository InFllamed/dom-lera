import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() length: number;

  data: number[];

  constructor() {
  }

  ngOnInit(): void {
    let idx = 1;
  }
}
