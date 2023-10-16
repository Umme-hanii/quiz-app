import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  userName: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {}

  startQuiz() {
    this.router.navigate(['question'])
  }
}
