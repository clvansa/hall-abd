import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  // public cdkDragDisabled = false;
  @ViewChildren("components") public components!: QueryList<any>
  public ActiveElement: any = false;
  public activeIndex: number = -1;
  menuList = ['table'];
  menuItems: any = [];
  divs: any = []
  obj: any = [

    {
      title: '30*20',
      type: 'table',
      width: 300,
      height: 200,
      top: 100,
      left: 100,
      zIndex: 2,
    }
    
  ]




  createRecaptchaContainer(element: any) {
    const data = {
      id: uuid(),
      name:`table ${this.divs.length + 1}`,
      ...element,
    }

    this.divs.push(data)
  }

  filterArray(itemTitles: string) {
    this.menuItems = this.obj.filter(((x: { type: string; }) => x.type === itemTitles))
  }

  currentBox(event: MouseEvent, index: number) {
    this.ActiveElement = event.currentTarget;
    this.activeIndex = index;
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      this.deleteItem(event.previousIndex)
    }
    moveItemInArray(this.divs, event.previousIndex, event.currentIndex);
  }


  renameTable(inputElement: any, index: number) {
    this.divs[index].name = inputElement.value
  }


  //Panel

  deleteItem(index: number) {
    this.divs.splice(index, 1)
    this.activeIndex = -1
  }





  save() {
    // this.components.forEach((component) => {
    //   // const { top, left, width, height } = component.nativeElement.getBoundingClientRect()
    //   // const newBox = {
    //   //   width: width,
    //   //   height: height,
    //   //   top: top - 64,
    //   //   left: left - 310,
    //   //   zIndex: 1,

    //   // }


    //   // console.log({ top, left, width, height })
    //   this.divs.push(component)
    //   console.log(component)
    // })
    localStorage.setItem('tables', JSON.stringify(this.divs))
  }

  reomveIndex(event: MouseEvent) {

  }

  constructor() {
  }

  ngOnInit(): void {
    let xs: string | null = localStorage.getItem('tables')
    this.divs = JSON.parse(xs || 'test')
    console.log(this.divs)
  }

  ngAfterViewInit(): void {

  }

}
