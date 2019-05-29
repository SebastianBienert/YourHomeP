import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure-dialog',
  templateUrl: './failure-dialog.component.html',
  styleUrls: ['./failure-dialog.component.css']
})
export class FailureDialogComponent implements OnInit {
  errorMessage: String;
  constructor() { }

  ngOnInit(): void {
    this.errorMessage = "Something went wrong. Please try later.";
  }
}
