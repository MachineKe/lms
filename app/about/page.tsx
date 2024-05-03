import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold">About page</h1>
        <p className="text-lg mt-4">
          This is a Next.js project with Tailwind CSS.
        </p>

        <Button text="Click me!" />
      </div>
    </main>
  );
}
