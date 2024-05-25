import { RegistryRoutes } from "./src/handlers/main.handle"

Bun.serve({
  fetch(req: Request){
    
    return RegistryRoutes(req);

  }
})
