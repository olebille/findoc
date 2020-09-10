export class Financedoc {
  id: string;
  description: string;
  amount: number;
  date: any;
  urlToFile: string;

  public toJson(): any {
    return { description: this.description, amount: this.amount, date: this.date };
  }
}
