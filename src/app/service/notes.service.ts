import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NotesService {
  
  baseUri:string = 'http://localhost:4000/notes';
  baseUri1:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  
  
   // Create
  createNotes(data): Observable<any> {
	  console.log(data);
    let url = `${this.baseUri}/createNotes`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

// Get all employees
  getEmployees() {
    return this.http.get(`${this.baseUri1}`);
  }

  // Get all Hobbis
  getNotes() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get employee
  getNote(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }


  updateNote(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
 // Delete employee
 deleteNotes(id): Observable<any> {
  let url = `${this.baseUri}/delete/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}