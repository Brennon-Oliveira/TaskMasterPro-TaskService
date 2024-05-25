import { neon } from "@neondatabase/serverless";

const GetConnection = ()=>{
  const DATBASE_URL=`${process.env.DATABASE_TYPE}://username:password@ep-adj-noun-guid.us-east-1.aws.neon.tech/neondb?sslmode=require`
  
  const sql = neon(DATBASE_URL);

  return sql
}

export default GetConnection;

