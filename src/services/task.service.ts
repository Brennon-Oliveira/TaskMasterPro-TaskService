import type { Task } from "../models/task.model";
import TaskRepository from "../repositories/task.repository";

export class TaskService {
  private readonly _taskRepository: TaskRepository;
  
  constructor(
    taskRepository: TaskRepository
  ) {
    this._taskRepository = taskRepository;
  }
  
  async getTasks() {
    return await this._taskRepository.getTasks();
  }

  async getTaskById(id: number) {
    return await this._taskRepository.getTaskById(id);
  }

  async createTask(task: Omit<Task, 'id'>) {
    return await this._taskRepository.createTask(task);
  }

  async updateTask(task: Task) {
    return await this._taskRepository.updateTask(task);
  }

  async deleteTask(id: number) {
    return await this._taskRepository.deleteTask(id);
  }
}
