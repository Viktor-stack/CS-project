// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {OwnerEntity} from "./OwnerEntity";
import {CarEntity} from "./CarEntity";

export interface ICarOwnersService {
  getOwners(): Observable<OwnerEntity[]>;

  getOwnerById(aId: number | undefined): Observable<OwnerEntity>;

  createOwner(
    aLastName: string,
    aFirstName: string,
    aMiddleName: string,
    aCars: CarEntity[]
  ): Observable<OwnerEntity>;

  editOwner(aOwner: OwnerEntity, id: number): Observable<OwnerEntity>;

  deleteOwner(aOwnerId: number): Observable<OwnerEntity[]>;
}

