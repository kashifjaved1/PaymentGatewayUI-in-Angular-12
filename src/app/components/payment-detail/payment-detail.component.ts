import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  paymentForm!: FormGroup;

  constructor(
    private apiService: ApiService
  ) {  }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      creditCardNumber: new FormControl(null),
      cardHolder: new FormControl(null),
      expiry: new FormControl(null),
      cvv: new FormControl(null),
      amount: new FormControl(null)
    });
  }

  processPayment(): void {
    this.apiService.processPayment('/payment', this.paymentForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
