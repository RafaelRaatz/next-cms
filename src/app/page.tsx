import { About, Container, Footer, Hero, Submenu } from "@/components";
import { HomeProps, MenuProps } from "@/utils";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={22} color="#fff" />}
      />

      <Container>
        <About object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
