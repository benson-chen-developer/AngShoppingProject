import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() sizes: string[] = [];
  @Input() pickedSizes: string[] = [];
  @Output() sizeClicked = new EventEmitter<string>();

  onSizeClick(size: string) {
    this.sizeClicked.emit(size);
  }
}
