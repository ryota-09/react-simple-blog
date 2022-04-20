export class Article {
  constructor(
    private _id: string,
    private _h1tag: string,
    private _lead: string,
    private _body: { h2tag: string; text: string }[],
    private _imgPath: string,
    private _category: string,
    private _date: string
  ) {}
  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get h1tag(): string {
    return this._h1tag;
  }

  public set h1tag(h1tag: string) {
    this._h1tag = h1tag;
  }

  public get lead(): string {
    return this._lead;
  }

  public set lead(lead: string) {
    this._lead = lead;
  }

  public get body(): { h2tag: string; text: string }[] {
    return this._body;
  }

  public set body(body: { h2tag: string; text: string }[]) {
    this._body = body;
  }

  public get imgPath(): string {
    return this._imgPath;
  }

  public set imgPath(imgPath: string) {
    this._imgPath = imgPath;
  }

  public get category(): string {
    return this._category;
  }

  public set category(category: string) {
    this._category = category;
  }

  public get date(): string {
    return this._date;
  }

  public set date(date: string) {
    this._date = date;
  }
}
