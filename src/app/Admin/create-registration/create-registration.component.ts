import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import 'moment/locale/fr';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  },
]
})
export class CreateRegistrationComponent implements OnInit {
  packages: string[] = ['Monthly', 'Quarterly', 'Yearly'];
  genders: string[] = ['Male', 'Female'];
  importantList: string[] = ['Toxic', 'Energy', 'Building', 'Healthier', 'Sugar', 'Fitness'];

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) {}

  ngOnInit(): void {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }
}
