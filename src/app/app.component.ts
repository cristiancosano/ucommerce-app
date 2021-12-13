import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private nfc: NFC, private ndef: Ndef) {
    this.scanNfcTag()

  }
  scanNfcTag(){
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.nfc.readerMode(flags).subscribe(
     tag => {
       console.log(
         this.nfc.bytesToString(tag.ndefMessage[0].payload).substring(3)
        )
        //this.nfc.close()
        //this.nfc.addNdefListener(success => console.log(success))

      },
     err => console.log('Error reading tag', err)
 );
 

  }


}
