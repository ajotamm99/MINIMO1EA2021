import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { vaccine } from "../models/vaccine";

@Injectable({
  providedIn: "root",
})
export class VaccineService {
  selectedVaccine: vaccine;
  vaccines: vaccine[];
  readonly URL_API = "http://localhost:3000/api/vaccines";

  constructor(private http: HttpClient) {
    this.selectedVaccine = new vaccine();
  }

  postVaccine(vaccine: vaccine) {
    return this.http.post(this.URL_API, vaccine);
  }

  getVaccines() {
    return this.http.get<vaccine[]>(this.URL_API);
  }

  putVaccine(vaccine: vaccine) {
    return this.http.put(this.URL_API + `/${vaccine._id}`, vaccine);
  }

  deleteVaccine(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
