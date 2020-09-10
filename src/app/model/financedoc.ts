export class Financedoc {
  id: string;
  description: string;
  amount: number;
  urlToFile: string;

  public toJson(): any {
    return { description: this.description, amount: this.amount };
  }
}
