import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Moznosti from "~/components/Moznosti";

export default function Home() {
  return (
    <main>
      <Title>David Zitko</Title>
      <h1>David Zítko</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <Moznosti />
    </main>
  );
}
