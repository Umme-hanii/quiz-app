import { Component, OnInit } from '@angular/core'
import {
  faCaretLeft,
  faCaretRight,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons'

import { QuestionsService } from 'src/app/services/questions.service'

interface option {
  text: string
  correct: boolean
}
interface question {
  explanation: string
  options: Array<option>
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
  currentQuestion: number = 0
  correctAnswer: boolean = false

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.getQuestionsJson().subscribe((res) => {
      this.questionsList = res.questions
    })
  }

  prevQuestion(): void {
    this.currentQuestion--
  }

  resetQuiz(): void {
    this.currentQuestion = 0
  }

  nextQuestion(): void {
    this.currentQuestion++
  }

  verifyAnswer(): void {}
}
