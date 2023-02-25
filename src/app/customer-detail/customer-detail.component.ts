import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  token:string = '';
  customerData: any = {};
  customerForm: FormGroup;
  constructor(  private route: ActivatedRoute, private customerService: CustomerService,private formBuilder: FormBuilder, private router: Router) { 
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('id') || '';
    });
    this.customerForm = this.formBuilder.group({
      new_name: new FormControl(''),
      new_phone: new FormControl(''),
      new_address: new FormControl('')
    });
  }

  ngOnInit(): void {
    if(this.token){
      this.customerService.getById(this.token).pipe().subscribe((data:any) => {
        this.customerData = data;
        this.customerForm.controls['new_name'].setValue(data.new_name?data.new_name: data.old_name);
        this.customerForm.controls['new_phone'].setValue(data.new_phone?data.new_phone: data.old_phone);
        this.customerForm.controls['new_address'].setValue(data.new_address?data.new_address: data.old_address);
      }, (err:any)=>{
        this.router.navigateByUrl(`/401`);
      });
    }
  }

  submit() {
    const body = this.customerForm.value;
    this.customerService.update(this.customerData?.id,body).subscribe(() => {
      alert('Data updated successfully');
      this.router.navigateByUrl(`/report`);
    });
  }

  cancel(){

  }

}
