import GetConnection from "../database/db";


export interface Task {
  id: number;
  projectId: number;
  name: string;
  description: string;
  status: string;
}

export const createTaskTable = async () => {
  await GetConnection()`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      project_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL
    );
  `;
}