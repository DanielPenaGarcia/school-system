import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private readonly http: HttpClient) { }

  getSchoolSettings(schoolId: string) {
    return this.http.get(`${environment.apiUrl}/settings/school/${schoolId}`);
  }
}
