import { RegistryTaskRoutes } from "./task.handle"


export const RegistryRoutes = (req: Request)=>{
  const url = new URL(req.url)

  const main = url.pathname.split("/")[1]
  
  if(main === "task") return RegistryTaskRoutes(req)

  return new Response("404")
}
