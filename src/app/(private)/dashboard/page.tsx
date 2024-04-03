import { auth } from "@/auth"

const Dashboard = async () => {
  const session = await auth()

  return (
    <div>
      Dashboard
      <p>
        {JSON.stringify(session)}
      </p>
    </div>
  )
}

export default Dashboard