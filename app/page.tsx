import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

export default function Home() {
  const data: {
    contents: News[];
  } = {
    contents: [
      {
        id: "1",
        title: "渋谷にオフィスを移転しました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2024/08/25",
        createdAt: "2024/08/25",
      },
      {
        id: "2",
        title: "当社のCEOが業界リーダーTOP10に選出されました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2024/08/25",
        createdAt: "2024/08/25",
      },
      {
        id: "3",
        title: "テストの記事です",
        category: {
          name: "更新情報",
        },
        publishedAt: "2024/08/25",
        createdAt: "2024/08/25",
      },
    ],
  };

  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです
          </p>
          <Image
            className={styles.bgimg}
            src="/img-mv.jpg"
            alt=""
            width={4000}
            height={1200}
          />
        </div>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
