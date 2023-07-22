import { db } from "./db"
import Login from "./login/page"


const getData = async () => { 
  const data = await db.borrowedBook
  return data
}

export default async function Home() {

  
  return (
    <>
      <Login />
    </>
  )
}
