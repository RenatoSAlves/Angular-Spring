import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>
  displayedColumns = ['name', 'category']

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {

    //this.courses = this.coursesService.list()
    //this.coursesService.list().subscribe(courses => this.courses = courses)
    //this.courses = []
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Não foi possível carregar os cursos!')
        return of([])
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
