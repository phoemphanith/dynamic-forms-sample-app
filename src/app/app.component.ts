import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dynamic-forms-sample-app';
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      name: [''],
      email: [''],
      fields: this.fb.array([]),
    });
  }

  get fields(): FormArray {
    return this.dynamicForm.get("fields") as FormArray;
  }

  addField() {
    const fieldGroup = this.fb.group({
      label: [""],
      value: [""]
    });
    this.fields.push(fieldGroup);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  submitForm() {
    console.log(this.dynamicForm.value);
  }
}
