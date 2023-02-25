import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList:any = [];
  constructor(private customerService: CustomerService,   private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.spinner.show();
    this.customerService.getAll().subscribe((res:any)=> {
      this.customerList = res;
      this.spinner.hide();
    });
  }

  generateLink(item:any){
    if (item && item.id) {
      this.spinner.show();
      this.customerService.getToken(item.id).subscribe((data:any) => {
        this.spinner.hide();
        this.router.navigateByUrl(`/customer/${data.data}`);
      });
      
    }
  }

}
