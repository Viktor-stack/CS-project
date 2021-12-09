import {Injectable} from '@angular/core';
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {HttpClient} from "@angular/common/http";
import {OwnerEntity} from "../interface/OwnerEntity";
import {CarEntity} from "../interface/CarEntity";
import {ICarOwnersService} from "../interface/ICarOwnersService";


@Injectable({
  providedIn: 'root'
})
export class OwnerService implements ICarOwnersService {

  private ownersUrl = '/api/owners'

  constructor(private http: HttpClient) {
  }

  createOwner(aLastName: string, aFirstName: string, aMiddleName: string, aCars: CarEntity[]): Observable<OwnerEntity> {
    let owner = {
      aLastName, aFirstName, aMiddleName, aCars
    }
    return this.http.post<OwnerEntity>(this.ownersUrl, owner);
  }

  deleteOwner(aOwnerId: number): Observable<OwnerEntity[]> {
    const url = `${this.ownersUrl}/${aOwnerId}`
    return this.http.delete(url);
  }

  editOwner(aOwner: OwnerEntity): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}`
    return this.http.put(url, aOwner);
  }

  getOwnerById(aId: number | undefined): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}/${aId}`;
    return this.http.get<OwnerEntity>(url)
  }


  getOwners(): Observable<OwnerEntity[]> {
    return this.http.get<OwnerEntity[]>(this.ownersUrl);
  }

}
