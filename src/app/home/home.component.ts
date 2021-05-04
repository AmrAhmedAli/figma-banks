import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filter: string;
  selectedBanks: Array<string> = [null, null, null];
  len: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.filter = '1';
  }
  submit(value: string): void {
    if (this.selectedBanks.includes(value)) {
      this.len -= 1;
      let idx = this.selectedBanks.indexOf(value);
      this.selectedBanks[idx] = null;
      document.getElementById(value + '-bank').style.removeProperty('border');
      document.getElementById(value + '-polygon').hidden = true;
      for (let i = idx + 1; i < 3; i++) {
        if (this.selectedBanks[i] != null) {
          this.selectedBanks[i - 1] = this.selectedBanks[i];

          document.getElementById(this.selectedBanks[i] + '-text').innerHTML =
            ' ' + i;
          this.selectedBanks[i] = null;
        } else {
          break;
        }
      }
    } else {
      if (this.selectedBanks.includes(null)) {
        this.len += 1;
        this.selectedBanks[this.selectedBanks.indexOf(null)] = value;
        document.getElementById(value + '-bank').style.border = '1px solid';
        document.getElementById(value + '-polygon').hidden = false;
        document.getElementById(value + '-text').innerHTML = ' ' + this.len;
      }
    }
  }
}
