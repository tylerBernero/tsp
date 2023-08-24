import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budget = 60000;

  constructor() { }

  ngOnInit(): void {
  }

  public displayDollars(value: number) {
    return '$' + value.toLocaleString();
  }

}
