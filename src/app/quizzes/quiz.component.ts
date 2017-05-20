import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
// import {AuthService} from '../shared/services/auth.service'
import {Observable, Subject} from "rxjs";
import {QuizDataService} from '../shared/services/quiz-data.service';

@Component({
  selector: 'survey-sign-up',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: []
})
export class QuizComponent {

  public signUpForm: FormGroup;
  public formSubmitted: boolean = false;
  public validatorSubject: Subject<any>;
  public quiz;

  constructor(
    private _fb:FormBuilder,
    private quizDataService: QuizDataService 
  ) {


    // this.signUpForm = _fb.group({
    //   full_name: ['', Validators.required],
    //   username: ['', Validators.required],
    //   email: ['', [
    //     Validators.required,
    //     Validators.pattern('.+?@.+?\\..+')]
    //   ],
    //   passwordGroup: _fb.group({
    //     password: ['', [
    //       Validators.required,
    //       Validators.minLength(6)]
    //     ],
    //     passwordConfirmation: ['']
    //   }, {validator: this.equalValidator })
    // });

  }

  public equalValidator({value}:FormGroup): {[key: string]: boolean} {
    const [first,...rest] = Object.keys(value || {});
    const valid = rest.every(v=>value[v] === value[first]);
    return valid ? null : {equal: true}
  }

  public signUp(form) {
    this.formSubmitted = true;
    if (form.valid) {
    //   this._authService.signUp(form.value)
    //     .subscribe(()=> console.log('created'));

      //TODO Call service for create user
      console.log(form.value);
    }
  }

}
