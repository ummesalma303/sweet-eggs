// import React from 'react'
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div>
        <h2>Welcome to My Home</h2>
          <Button variant="destructive">Destructive</Button>
        <Button className='text-red-500 bg-green-800'>Click Me</Button>
        <Button>Secondary</Button>
        <Button variant="secondary">Secondary</Button>
    </div>
  )
}

export default Home