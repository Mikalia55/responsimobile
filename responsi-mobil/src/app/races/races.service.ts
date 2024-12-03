import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RacesService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRaces(): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=get_races`);
  }

  createRace(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}?action=create_race`, data);
  }

  updateRace(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}?action=update_race`, data);
  }

  deleteRace(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?action=delete_race&id=${id}`);
  }
}
