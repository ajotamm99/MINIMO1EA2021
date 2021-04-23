export class vaccine {
  constructor(_id = "", name = "", description = "", tecn = "", date = "") {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.tecn = tecn;
    this.date = date;
  }

  _id: string;
  name: string;
  description: string;
  tecn: string;
  date: string;
}
