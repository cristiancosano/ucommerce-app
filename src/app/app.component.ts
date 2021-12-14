import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private nfc: NFC, private ndef: Ndef, private router: Router) {
    this.scanNfcTag()

  }
  scanNfcTag(){
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.nfc.readerMode(flags).subscribe(
     tag => {
       const text = this.nfc.bytesToString(tag.ndefMessage[0].payload).substring(3)
       this.router.navigate(['products', text])
      },
     err => console.log('Error reading tag', err)
 );
 

  }


}
