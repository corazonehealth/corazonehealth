import { SignUp } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignUp />
    </div>
  )
}

export const runtime = 'edge';

export default Page