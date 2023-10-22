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
  current: number = 0
  currentQuestion: number = 1
  correctAnswer: boolean = false

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    console.log(this.questionsList[this.current])
    this.questionsService.getQuestionsJson().subscribe((res) => {
      this.questionsList = res.questions
    })
  }

  prevQuestion(): void {
    this.currentQuestion--
    this.current = this.current > 0 ? this.current - 1 : 0
  }

  resetQuiz(): void {
    this.currentQuestion = 1
    this.current = 0
  }

  nextQuestion(): void {
    this.currentQuestion++
    this.current =
      this.current < this.questionsList.length - 1
        ? this.current + 1
        : this.current
  }

  verifyAnswer(selectedOption: option): void {
    if (selectedOption.correct) {
      this.correctAnswer = true
      console.log('correct answer')
    } else {
      console.log('wrong answer')
      this.correctAnswer = false
    }
  }
}
