import { ReimbEntries } from './../models/reimbEntries';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private reimbUrl = 'http://localhost:8081/reimbursement';

  constructor(private http: HttpClient) { }

  getReimbursements(): any{
    return this.http.get(`${this.reimbUrl}`).pipe(map((res: any) => res));
  }
  getReimbursementsByStatus(status: String): any{
    return this.http.get(`${this.reimbUrl}?status=${status}`).pipe(map((res: any) => res));
  }

  getReimbursementByAuthorId(authId: number): any{
    return this.http.get(`${this.reimbUrl}?authId=${authId}`).pipe(map((res: any) => res));
  }
  getReimbursementById(reimbId: number): any{
    return this.http.get(`${this.reimbUrl}/${reimbId}`).pipe(map((res: any) => res));
  }
  addReimbursement(reimb: ReimbEntries): Observable<ReimbEntries> {
      return this.http.post<ReimbEntries>(`${this.reimbUrl}`, reimb
      );
  }
  updateReimbursement(reimb: ReimbEntries): Observable<ReimbEntries> {
    return this.http.patch<ReimbEntries>(`${this.reimbUrl}/${reimb.reimbId}`, reimb
    );
  }
}
