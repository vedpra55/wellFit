import Hero from "@/components/UI/Hero";
import { getCurrentUser } from "@/utils/apiCalls";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <main className="bg ">
      <Hero user={user} />
    </main>
  );
}
