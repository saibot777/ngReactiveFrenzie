import {Component, OnInit} from '@angular/core';

// import { Customer } from './customer';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup;
    // customer: Customer= new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: '',
            lastName: '',
            // in case i need to diasable default
            // lastName: {value: 'Trajkovic', disabled: true},
            email: '',
            sendCatalog: true
        });
    }

    populateTestData(): void {
        this.customerForm.patchValue({
           firstName: 'Stefan',
           lastName: 'Trajkovic',
           email: 'stefanzoran@gmail.com',
           sendCatalog: false
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }
