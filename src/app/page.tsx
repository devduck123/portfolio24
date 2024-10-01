import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Hello world!</h1>
      </header>
      <div className="card">
        <h2>Heading</h2>
        <p>Welcome to my website</p>
        <Link href="/sample">Sample</Link>
        <section className="flex gap-4 mt-2">
          <Button type="button">Beggie</Button>
          <Button type="button" bgColor="secondary">
            Pickle
          </Button>
        </section>
      </div>
    </div>
  );
}
