"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { Customer } from './customer';
var forms_1 = require("@angular/forms");
var CustomerComponent = (function () {
    function CustomerComponent() {
    }
    // customer: Customer= new Customer();
    CustomerComponent.prototype.ngOnInit = function () {
        this.customerForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            sendCatalog: new forms_1.FormControl(true)
        });
    };
    CustomerComponent.prototype.save = function () {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: 'my-signup',
        templateUrl: './app/customers/customer.component.html'
    })
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map