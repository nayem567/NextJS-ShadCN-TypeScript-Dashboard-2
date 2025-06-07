import Link from "next/link";


export default function Home() {
  return (
   <main>
      <h1>NextJS Shadcn Typescript Dashboard</h1>
      <Link className="text-4xl" href={"./dashboard"}>Dashboard</Link>
   </main>
  );
}
