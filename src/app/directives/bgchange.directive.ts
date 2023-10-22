import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[appBgchange]',
})
export class BgchangeDirective {
  @Input('isCorrect') isCorrect: boolean = false
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') answer() {
    if (this.isCorrect) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green')
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff')
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'border',
        '2px solid gray'
      )
      // this.elRef.nativeElement.style.backgroundColor = 'green'
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'red')
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff')
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'border',
        '2px solid gray'
      )
    }
  }
}
