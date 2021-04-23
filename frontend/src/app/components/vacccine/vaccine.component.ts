import { Component, OnInit } from "@angular/core";

import { VaccineService } from "../../services/vaccine.service";
import { NgForm } from "@angular/forms";
import { vaccine } from "../../models/vaccine";

@Component({
  selector: "app-vaccine",
  templateUrl: "./vaccine.component.html",
  styleUrls: ["./vaccine.component.css"],
  providers: [VaccineService],
})
export class VaccineComponent implements OnInit {
  constructor(private vaccineService: VaccineService) {}

  ngOnInit() {
    this.getVaccines();
  }

  addVaccine(form?: NgForm) {
    if (form.value._id) {
      this.vaccineService.putVaccine(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getVaccines();
      });
    } else {
      this.vaccineService.postVaccine(form.value).subscribe((res) => {
        this.getVaccines();
        this.resetForm(form);
      });
    }
  }

  getVaccines() {
    this.vaccineService.getVaccines().subscribe((res) => {
      this.vaccineService.vaccines = res;
    });
  }

  editVaccine(vaccine: vaccine) {
    this.vaccineService.selectedVaccine = vaccine;
  }

  deleteVaccine(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.vaccineService.deleteVaccine(_id).subscribe((res) => {
        this.getVaccines();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.vaccineService.selectedVaccine = new vaccine();
    }
  }
}
