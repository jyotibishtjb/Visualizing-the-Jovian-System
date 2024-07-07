import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ImageId } from '../shared/image-id';
import { ImageResponse } from '../shared/image-response';

@Injectable({
  providedIn: 'root'
})
export class ProcessFormService {

  constructor(private http : HttpClient) { }


  baseApiUrl = "http://localhost:8000/enhance"



  regenerate(payload:any) : Observable<ImageResponse> {

    return this.http.post<ImageResponse>(this.baseApiUrl,payload).pipe(
      tap(e => console.log(e))
    );
  }

}
