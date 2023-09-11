function Greeting() {
  return <h1 data-cy="greeting">Hello, Next.js!</h1>;
}

export default function Home() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
