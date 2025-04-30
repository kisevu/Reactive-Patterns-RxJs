import { Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent {


  @HostBinding('style.backgroundColor') backgroundColor: string = "black";
}
