import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project, Task } from '../project';
import { label } from '../priority';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-project-info-card',
  templateUrl: './project-info-card.component.html',
  styleUrls: ['./project-info-card.component.css']
})
export class ProjectInfoCardComponent implements OnInit {

  constructor() { }

  @Input() project: Project;
  @Input() showTasks: boolean;
  @Output() showTasksChange = new EventEmitter<boolean>();

  ngOnInit(): void {}

  getProjectPriority = () => label(this.project.priority);

  getNbTasks = () => this.project.tasks.length;

  hasTasks = () => this.getNbTasks() > 0;

  getTaskPriority = (task: Task) => label(task.priority);

  onShowTasksChange(): void {
    this.showTasks = !this.showTasks;
    this.showTasksChange.emit(this.showTasks);
  }
}
