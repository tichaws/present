import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() id = 0;

  detailList =[
    {
      id:'id1',
      company:'AIS',
      timeline:'JUN 20 2017 - AUG 31 2018',
      header:'FULL STACK  eBusiness Portal',
      text:'AIS eBusiness Portal is an Online applications to help Corporate customers manage their business’ mobility service through fast & convenience channel.',
      photo:'assets/img/Login_main-page.png'
    },
    {
      id:'id2',
      company:'AIS',
      timeline:'MAY 01 2018 - SEP 23 2018',
      header:'FULL STACK  Allowance System',
      text:'Allowance system estimate precise budget or payment.Include all costs not included in regular pay but are related to work. Typically, an employee allowance system covers such aspects as traveling expenses (meals, hotels, airplane tickets, etc.), benefits – costs incurred in commuting or working extra hours. ',
      photo:'assets/img/allw.jpg'
    },
    {
      id:'id3',
      company:'KTB',
      timeline:'SEP 24 2018 - Present',
      header:'FRONT-END  Baiboon',
      text:'Donately to manage their online donations. Built with simplicity in mind, our features give you save time ,easy to donate and It\'s have menu to check tax deductible. So our software grows with you, so the possibilities are endless.',
      photo:'assets/img/bb.png'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.show()
  }

  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
