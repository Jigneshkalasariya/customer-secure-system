import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {
  customerList:any = [];
  searchText: any;
  constructor(private customerService: CustomerService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.spinner.show();
    this.customerService.getAllReport().subscribe((res:any)=> {
      this.customerList = res;
      this.spinner.hide();
    });
  }


}
