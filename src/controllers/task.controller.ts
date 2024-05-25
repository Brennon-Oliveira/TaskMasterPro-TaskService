import type { Task } from "../models/task.model";
import type { TaskService } from "../services/task.service";


export class TaskController {
  private readonly _taskService: TaskService;
  private readonly request: Request;


  constructor(
    taskService: TaskService,
    request: Request
  ) {
    this._taskService = taskService;
    this.request = request;
  }

  async getTasks() {
    return await this._taskService.getTasks();
  }

  async getTaskById() {
    const url = new URL(this.request.url);
    const id = Number(url.pathname.split("/")[3]);
    return await this._taskService.getTaskById(id);
  }

  async createTask() {
    const body = await this.request.json();
    const task: Omit<Task, 'id'> = {
      projectId: body.projectId,
      name: body.name,
      description: body.description,
      status: body.status
    };
    return await this._taskService.createTask(task);
  }

  async updateTask() {
    const body = await this.request.json();
    const url = new URL(this.request.url);
    const id = Number(url.pathname.split("/")[3]);
    const task = {
      id: id,
      projectId: body.projectId,
      name: body.name,
      description: body.description,
      status: body.status
    };
    return await this._taskService.updateTask(task);
  }

  async deleteTask() {
    const url = new URL(this.request.url);
    const id = Number(url.pathname.split("/")[3]);
    return await this._taskService.deleteTask(id);
  }

}
