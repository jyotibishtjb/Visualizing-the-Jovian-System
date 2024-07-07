import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileUploadService } from '../services/file-upload.service';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
import { ImageResponse } from '../shared/image-response';
import { ParentService } from '../services/parent.service';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {ImageId} from '../shared/image-id';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  btn1 : any ;
  btn2 : any ;
  //variables to store API response
  resp_after_processing : ImageResponse | undefined ;
  trustedUrl_old:any;
  trustedUrl_new:any;
  // urlToTrust_old = "../../assets/imgs/";
  // urlToTrust_new = "../../assets/processed_imgs/";

  urlToTrust_old = "data:image/png;base64, ";
  urlToTrust_new = "data:image/png;base64, ";


	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file : any;// Variable to store file

  isHidden = false;
  isHidden2 = true;

  
  constructor(private sharedService:ParentService,private router:Router ,private sanitizer: DomSanitizer,private fileUploadService: FileUploadService, private sendImageIdService: SearchService) { }

  ngOnInit(): void {
    
    this.btn1 =  document.querySelector('.btn1');
    this.btn2  =  document.querySelector('.btn2');
  }


  // updateUrl() {
  //   // Appending an ID to a YouTube URL is safe.
  //   // Always make sure to construct SafeValue objects as
  //   // close as possible to the input data so
  //   // that it's easier to check if the value is safe.
  //   let list : [SafeResourceUrl,SafeResourceUrl] ;
    
  //   this.urlToTrust_old =  this.urlToTrust_old + this.resp_after_processing?.old + "";
  //   this.urlToTrust_new =  this.urlToTrust_new + this.resp_after_processing?.new + "";
  //   this.trustedUrl_old =
  //       this.sanitizer.bypassSecurityTrustResourceUrl(this.urlToTrust_old.toString());
  //   this.trustedUrl_new =
  //       this.sanitizer.bypassSecurityTrustResourceUrl(this.urlToTrust_new.toString());  
  //   list = [this.trustedUrl_old,this.trustedUrl_new];
     
  //   this.sharedService.updateImagesInComponents(list);
    
  // }
  // On file Select
	onChange(event : any) {
		this.file = event.target.files[0];
	}

  getLink() {
    return this.urlToTrust_old.toString();
  }

  myFunction(e:any) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el:any) {
      el.classList.remove("active");
    });
    e.target.className = "active";
  }

  // OnClick of button Upload
	onUpload() {
		this.loading = !this.loading;
		console.log(this.file);
		this.fileUploadService.upload(this.file).subscribe(
			(event: any) => {
				if (typeof (event) === 'object') {

					// Short link via api response
					this.shortLink = event.link;
          this.resp_after_processing = event;
          this.sharedService.updateUrls(this.resp_after_processing);
          this.router.navigateByUrl('/processing');
          this.loading = false; 
          
				}
			}
		);
	}

  
  onSubmit(f: NgForm ) {

    this.loading = !this.loading;
   let imageId : ImageId | undefined;
   imageId = {
    img : f.form.value.image_name
   }
    this.sendImageIdService.sendId(imageId).subscribe(data => { 
    if (typeof (data) === 'object') {
    this.resp_after_processing = data;
    this.sharedService.updateUrls(this.resp_after_processing);
    this.router.navigateByUrl('/processing');
    this.loading = false; 
    
  
  }});

  // this.resp_after_processing = this.sendImageIdService.sendTest();
   
  //   this.sharedService.updateUrls(this.resp_after_processing);
  //   this.router.navigateByUrl('/processing');
  //   this.loading = false; 
    
  

     

  }
  

  onSubmit2(f: NgForm ) {
    

  }

  makeHide(a : number,evt:any){
    if(a === 1) {
      this.isHidden = true;
      this.isHidden2 = false;
    
      this.btn1.classList.remove('active');
      evt.target.classList.add('active');
    } else {
      this.isHidden = false;
      this.isHidden2 = true;
      this.btn2.classList.remove('active');
      evt.target.classList.add('active');
    }
  }
}



