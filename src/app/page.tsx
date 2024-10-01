import Button from "./components/Button";

export default function Home() {
  return (
    <div className="container">
      <h1>Hello world!</h1>
      <div className="card">
        <h2>Heading</h2>
        <p>How are you doing?</p>
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
