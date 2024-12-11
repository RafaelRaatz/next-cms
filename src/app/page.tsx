import { Submenu } from "@/components";
import { getDataHome } from "@/utils/actions/get-data";

export default async function Home() {
  const data = await getDataHome();

  console.log(data);
  return (
    <main>
      <Submenu />
    </main>
  );
}
