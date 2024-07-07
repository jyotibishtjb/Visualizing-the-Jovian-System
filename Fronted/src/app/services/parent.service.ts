import { Injectable } from '@angular/core';
import { ImageResponse } from '../shared/image-response';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

   list : any;
  // urlToTrust_old = "../../assets/imgs/";
  // urlToTrust_new = "../../assets/processed_imgs/";

  urlToTrust_old = "data:image/png;base64, ";
  urlToTrust_new = "data:image/png;base64, ";


  constructor(private sanitizer: DomSanitizer) { }


  updateUrls(resp_after_processing : ImageResponse | undefined) {
    let trustedLinks : [string | undefined,string,SafeResourceUrl,SafeResourceUrl] ;
   
    let urlToTrust_old_tmp =  this.urlToTrust_old + resp_after_processing?.old + "";
    let urlToTrust_new_tmp =  this.urlToTrust_new + resp_after_processing?.new + "";
    
    let trustedUrl_old =
        this.sanitizer.bypassSecurityTrustResourceUrl(urlToTrust_old_tmp.toString());
   let trustedUrl_new =
        this.sanitizer.bypassSecurityTrustResourceUrl(urlToTrust_new_tmp.toString());  
        trustedLinks= [resp_after_processing?.old,urlToTrust_new_tmp,trustedUrl_old,trustedUrl_new];
    this.updateImagesInComponents(trustedLinks);
     
  }

  updateImagesInComponents(list :  [string | undefined,string,SafeResourceUrl,SafeResourceUrl]) {
      this.list = list;
  } 


  getImagesTrustedLinks() {
    return this.list;
  }
}
