// export interface ITodo {
//   id: number;
//   title: string;
//   desc: string;
//   status: boolean;
// }

export class ITodo {

  id: number;
  title: string;
  desc: string;
  status: boolean;

  constructor() {
    this.id = null;
    this.title = '';
    this.desc = '';
    this.status = false;
  }
}
