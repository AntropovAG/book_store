import Layout from "@/components/layout/layout";
import Banner from "@/components/banner/banner";
import DisplayContainer from "@/components/displayContainer/displayContainer";
import Menu from "@/components/menu/menu";
import BooksList from "@/components/booksList/booksList";
import LoadMoreButton from "@/components/loadMoreButton/loadMoreButton";

interface Props {
  books: {
    id: string;
    name: string;
    authors: string[];
    description: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
  }[];
  }


export default function Home({ books }: Props) {
  console.log(books);

  return (
    <>
      <Layout>
        <Banner />
        <DisplayContainer>
          <Menu />
          <BooksList books={books} />
          <LoadMoreButton />
        </DisplayContainer>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyAw8dYZxnbBh_ADDcduDpF3PWGRAcIqC14&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
  const data = await res.json();
  const books = data.items.map((book) => ({
    id: book.id?book.id:Math.random(),
    name: book.volumeInfo.title?book.volumeInfo.title:null,
    authors: book.volumeInfo.authors?book.volumeInfo.authors:null,
    description: book.volumeInfo.description?book.volumeInfo.description:null,
    price: book.saleInfo.retailPrice?book.saleInfo.retailPrice:null,
    rating: book.volumeInfo.averageRating?book.volumeInfo.averageRating:null,
    reviews: book.volumeInfo.ratingsCount?book.volumeInfo.ratingsCount:null,
    image: book.volumeInfo.imageLinks.thumbnail?book.volumeInfo.imageLinks.thumbnail:null
  }))


  return {
    props: {
      books: books
    },
  }

}