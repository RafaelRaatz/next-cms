import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function About({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>
        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="imagem ilustrativa"
            src={object.metadata.banner.url}
            priority={true}
            quality={100}
            fill={true}
            sizes="(max-width: 480px) 100vw, (max-width: 1024) 75vw 50vw"
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nosso serviços</h2>

      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="imagem ilustrativa do serviço"
                src={service.image.url}
                priority={true}
                quality={100}
                fill={true}
                sizes="(max-width: 480px) 100vw, (max-width: 1024) 75vw 50vw"
              />
            </div>

            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
