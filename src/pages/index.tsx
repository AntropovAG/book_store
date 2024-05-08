import Layout from "@/components/layout/layout";
import Banner from "@/components/banner/banner";
import DisplayContainer from "@/components/displayContainer/displayContainer";
import Menu from "@/components/menu/menu";
import BooksList from "@/components/booksList/booksList";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <DisplayContainer>
          <Menu />
          <BooksList />
        </DisplayContainer>
      </Layout>
    </>

  );
}
