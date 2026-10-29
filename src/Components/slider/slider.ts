import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.html',   // keep your existing file names and imports
})
export class Slider implements AfterViewInit, OnDestroy {   // keep your class name
  @ViewChild('carousel') carouselEl!: ElementRef<HTMLElement>;
  private carousel?: Carousel;

  ngAfterViewInit(): void {
    this.carousel = new Carousel(this.carouselEl.nativeElement, {
      interval: 3000,
      ride: 'carousel',   // starts as soon as the page loads
      pause: false        // keeps sliding when the mouse is over it
    });
  }

  ngOnDestroy(): void {
    this.carousel?.dispose();
  }
}
