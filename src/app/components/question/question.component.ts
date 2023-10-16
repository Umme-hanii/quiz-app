import { Component, OnInit } from '@angular/core'
import {
  faCaretLeft,
  faCaretRight,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons'

import { QuestionsService } from 'src/app/services/questions.service'

interface question {
  explanation: string
  options: Array<any>
  questionText: string
}
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  faPrev = faCaretLeft
  faNext = faCaretRight
  faReset = faRefresh
  questionsList: Array<question> = []
  current: number = 0

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.getQuestionsJson().subscribe((res) => {
      this.questionsList = res.questions
      console.log(this.questionsList)
    })
  }
}
