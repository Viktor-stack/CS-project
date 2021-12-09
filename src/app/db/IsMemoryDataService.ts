import {InMemoryDbService} from "angular-in-memory-web-api";
import {OwnerEntity} from "../interface/OwnerEntity";

export class IsMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    return {
      owners: [
        {
          id: 1,
          aLastName: "Иванов",
          aFirstName: "Иван",
          aMiddleName: "Иванович",
          aCars: [
            {
              id: 1,
              stateNumber: "АЕ1573СА",
              manufacturerName: "Hyundai",
              modelName: "Accent",
              carYear: 2009
            }, {
              id: 2,
              stateNumber: "АЕ5472АА",
              manufacturerName: "Honda",
              modelName: "Civic",
              carYear: 2010
            }, {
              id: 3,
              stateNumber: "АЕ1123АА",
              manufacturerName: "ВАЗ",
              modelName: "2109",
              carYear: 1964
            }
          ]
        },
        {
          id: 2,
          aLastName: "Иванова",
          aFirstName: "Маша",
          aMiddleName: "Михайловна",
          aCars: [
            {
              id: 1,
              stateNumber: "АЕ1255ГИ",
              manufacturerName: "ГАЗ",
              modelName: "3307",
              carYear: 2009
            }, {
              id: 2,
              stateNumber: "АК5634АА",
              manufacturerName: "Hyundai",
              modelName: "Accent",
              carYear: 2009
            }
          ]
        },
        {
          id: 3,
          aLastName: "Гаврилова",
          aFirstName: "Дуся",
          aMiddleName: "Михайловна",
          aCars: [
            {
              id: 1,
              stateNumber: "АК4356АА",
              manufacturerName: "Renault",
              modelName: "Logan",
              carYear: 2002
            }, {
              id: 2,
              stateNumber: "АT4565КУ",
              manufacturerName: "Opel",
              modelName: "Omega",
              carYear: 2019
            }, {
              id: 3,
              stateNumber: "АЕ3345ВА",
              manufacturerName: "Hyundai",
              modelName: "Accent",
              carYear: 2004
            }, {
              id: 4,
              stateNumber: "АЕ3245ВИ",
              manufacturerName: "ЗИЛ",
              modelName: "360",
              carYear: 1994
            }
          ]
        },
      ],
    }
  }

  genId(heroes: OwnerEntity[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
