import type { NeonQueryFunction } from "@neondatabase/serverless";
import type { Task } from "../models/task.model";

class TaskRepository {

  private connection: NeonQueryFunction<false, false>

  constructor(connection: NeonQueryFunction<false, false>) {
    this.connection = connection
  }

  async getTasks() {
    const query = await this.connection`
      SELECT * FROM tasks
    `

    const tasks = query.map((task) => {
      return {
        id: task.id,
        projectId: task.projectId,
        name: task.name,
        description: task.description,
        status: task.status
      }
    });

    return tasks
  }

  async getTaskById(id: number) {
    const query = await this.connection`
      SELECT * FROM tasks WHERE id = ${id}
    `

    const task = query.map((task) => {
      return {
        id: task.id,
        projectId: task.projectId,
        name: task.name,
        description: task.description,
        status: task.status
      }
    });

    return task
  }

  async createTask(task: Omit<Task, 'id'>) {
    await this.connection`
      INSERT INTO tasks (project_id, name, description, status)
      VALUES (${task.projectId}, ${task.name}, ${task.description}, ${task.status})
    `
  }

  async updateTask(task: Task) {
    await this.connection`
      UPDATE tasks
      SET project_id = ${task.projectId}, name = ${task.name}, description = ${task.description}, status = ${task.status}
      WHERE id = ${task.id}
    `
  }

  async deleteTask(id: number) {
    await this.connection`
      DELETE FROM tasks WHERE id = ${id}
    `
  }
}

export default TaskRepository;
