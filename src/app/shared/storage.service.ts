import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public defaultHeaders = new HttpHeaders();
  private httpOptions = { headers: this.defaultHeaders, observe: 'body' as 'body', reportProgress: false };

  constructor(protected httpClient: HttpClient) { }


  getEmployeeData() {
    const URL = `/employee-data`;
    return this.httpClient.get<any>(URL, this.httpOptions);
  }

  deleteEmployeeData(id) {
    const URL = `/employee-data/${id}`;
    return this.httpClient.delete<any>(URL, this.httpOptions);
  }

  saveEmployeeData(emp) {
    const URL = `/employee-data`;
    return this.httpClient.post<any>(URL, emp, this.httpOptions);
  }


  updateEmployeeData(emp, id) {
    const URL = `/employee-data/${id}`;
    return this.httpClient.put<any>(URL, emp, this.httpOptions);
  }


  getPdfFromWeb() {
    const URL = `https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf`;
  }


  getVideoFromWeb() {
    const URL = `https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4`;
  }




}
