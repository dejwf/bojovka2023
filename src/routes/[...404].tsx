import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Tady nic neni</h1>
      <p>
        Jdi zpatky na{" "}
        <a href="/">
          domovskou stranku
        </a>{" "}
        aby jsi se mohl vratit zpatky do hry.
      </p>
    </main>
  );
}
