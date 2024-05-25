import { TaskController } from "../controllers/task.controller";
import GetConnection from "../database/db"
import TaskRepository from "../repositories/task.repository";
import { TaskService } from "../services/task.service";


export const RegistryTaskRoutes = (req : Request)=>{
  
  const url = new URL(req.url)
  const route = url.pathname.split("/")[2]
  const hasId = url.pathname.split("/")[3]

  const repository = new TaskRepository(GetConnection());
  const controller = new TaskController(new TaskService(repository), req)

  if (req.method === "GET" && route === "tasks") {
    if (hasId) return controller.getTaskById()
    return controller.getTasks()
  }

  if (req.method === "POST" && route === "tasks") return controller.createTask()

  if (req.method === "PUT" && route === "tasks") return controller.updateTask()

  if (req.method === "DELETE" && route === "tasks") return controller.deleteTask()


  return new Response("Task Routes")

}


