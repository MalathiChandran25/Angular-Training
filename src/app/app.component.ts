import { HeaderComponent } from './header/header.component';
import { STUDENTS } from './studentsList';
import { students } from './students';
import { Component } from '@angular/core';
import { StudentdataService } from './studentdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'students';

  // studentlist : students[] = STUDENTS;

  studentdatalist : students[];

  
  constructor(private studentlist : StudentdataService) { }

  ngOnInit(): void {
    // this.studentlist.getdatas().subscribe((result) => {
    //     console.log(result);
    //     this.studentdatalist=result;
    //     this.studentlist.addstudentdata(this.studentdatalist);
    // })    
  }

  studentdata : students;
  selectedstudentdata(student : students) : void {
    this.studentdata = student;
  }


}
