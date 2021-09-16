export class Personne {
  private _id: number;
  private _pseudo : String;

  constructor(id: number, pseudo: String) {
    this._id = id;
    this._pseudo = pseudo;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get pseudo(): String {
    return this._pseudo;
  }

  set pseudo(value: String) {
    this._pseudo = value;
  }
}
