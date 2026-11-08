import { Suspense } from "react";
import SlowComponent from "../components/SlowComponent";

export default function StreamingPage() {
  return (
    <div>
      <h1>Streaming with Suspense</h1>

      <p>Welcome to our streaming example.</p>

      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}