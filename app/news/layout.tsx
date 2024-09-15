import Hero from "@/app/_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 0;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="news" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
