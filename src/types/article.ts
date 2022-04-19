export class Article {
  constructor(
    private _id: string,
    private _title: string,
    private _body: string,
    private _category: string,
    private _date: string
  ) {}

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get body(): string {
    return this._body;
  }

  public set body(body: string) {
    this._body = body;
  }

  public get date(): string {
    return this._date;
  }

  public set date(date: string) {
    this._date = date;
  }

  public get category(): string {
    return this._category;
  }

  public set category(category: string) {
    this._category = category;
  }
}
