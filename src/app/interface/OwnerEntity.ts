import {CarEntity} from "./CarEntity";

export interface OwnerEntity {
  id: number
  aOwnerId: number
  aLastName: string;
  aFirstName: string;
  aMiddleName: string;
  aCars: CarEntity[];
}
