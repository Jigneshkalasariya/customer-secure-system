import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList:any = [];
  constructor(private customerService: CustomerService,   private router: Router) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.customerService.getAll().subscribe((res:any)=> {
      this.customerList = res;
    });
  }

  generateLink(item:any){
    if (item && item.id) {
      this.customerService.getToken(item.id).subscribe((data:any) => {
        const url = this.router.serializeUrl(
          this.router.createUrlTree([`/customer/${data.data}`])
        );
        window.open(url, '_blank');
      });
      
    }
  }

}
