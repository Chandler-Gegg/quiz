import {Option} from './option';
export class SurveyQuestion {
  id?: number;
  type: string;
  text: string;
  image?: string;
  options?: Option[];
  answer?: any;

  constructor(type:string,
              text:string){
    this.type = type;
    this.text = text;
  }
}
