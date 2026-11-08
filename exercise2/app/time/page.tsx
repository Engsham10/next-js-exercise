export const dynamic = "force-dynamic";

export default function TimePage() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Server-Side Rendering</h1>

      <h2>Current Server Time:</h2>

      <p>{currentTime}</p>
    </div>
  );
}