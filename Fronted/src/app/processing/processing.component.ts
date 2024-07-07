import { Component, Input, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ParentService } from '../services/parent.service';
import { ProcessFormService } from '../services/process-form.service';
import { EnhanceParams } from '../shared/enhance-params';
import { ImageResponse } from '../shared/image-response';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {


  
  enhanceParams : EnhanceParams | undefined ;
  
  

   resp_after_processing : ImageResponse | undefined;
   list : any;
   process_old : SafeResourceUrl | undefined ;
   process_new : SafeResourceUrl | undefined;

   loadingProcess: boolean = false; // Flag variable

  constructor(private sharedService : ParentService, private processingService : ProcessFormService) { 
  }


  
  ngOnInit(): void {
    this.enhanceParams = {

        "enhance_small_scale_clouds": false, 
        "enhance_large_scale_clouds":  false,
        "denoising" : false ,
        "enhance_brightness" : false ,
        "gamma_correction" : false ,
        "gray_scale" : false

    };
    this.setProcessImgProperties();
  }

  setProcessImgProperties() {

    this.list = this.sharedService.getImagesTrustedLinks();
    this.process_old = this.list[2];
    this.process_new = this.list[3];
  }

  onSubmit() {
    this.loadingProcess = !this.loadingProcess;
    let processingOptions: Array<any> = [
      {"url" : this.list[0]},
      {"params": this.enhanceParams}
    ];
     this.processingService.regenerate(processingOptions).subscribe(data => { 
     if (typeof (data) === 'object') {
     this.resp_after_processing = data;
     this.sharedService.updateUrls(this.resp_after_processing);
     this.loadingProcess = false; 
     this.setProcessImgProperties();
   }});
  }


   
}
