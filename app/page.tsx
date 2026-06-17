import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">
          Welcome to UgSalez
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Your complete sales and inventory management platform
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </main>
  );
}
