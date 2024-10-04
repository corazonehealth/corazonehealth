import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-200">
      <SignIn />
    </div>
  );
}

// export const runtime = 'edge';

export default Page;
