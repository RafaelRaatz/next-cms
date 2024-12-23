import { getItemBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/post.type";
import { Container, Hero } from "@/components";
import { Phone } from "lucide-react";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) {
    throw new Error("Slug não encontrado ou inválido.");
  }
  const { slug } = params;
  const { objects }: PostProps = await getItemBySlug(slug);

  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={22} color="#fff" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              src={objects[0].metadata.banner.url}
              priority={true}
              quality={100}
              fill={true}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
