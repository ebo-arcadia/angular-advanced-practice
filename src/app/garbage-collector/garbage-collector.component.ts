import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface Bin {
  trashItem: string;
  id: string;
}

@Component({
  selector: 'garbage-collector',
  templateUrl: './garbage-collector.component.html',
  styleUrls: ['./garbage-collector.component.css']
})
export class GarbageCollectorComponent {
  trashItem: string | any;
  id: string | any;
  bin: BehaviorSubject<Bin[]> = new BehaviorSubject<Bin[]>([]);

  constructor() { this.bin.next([]); }
  
  add_to_bin() {
    const currentTrashItem = this.bin.getValue();
    currentTrashItem.push({ trashItem: this.trashItem, id: this.id });
  }

  remove_from_bin() {
    const currentTrashItem = this.bin.getValue();
    const trashItemToRemove = currentTrashItem.filter(item => item.id !== item.id);
    this.bin.next(trashItemToRemove)
  }
}
