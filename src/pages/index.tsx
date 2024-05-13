import Layout from "@/components/layout/layout";
import Banner from "@/components/banner/banner";
import DisplayContainer from "@/components/displayContainer/displayContainer";
import Menu from "@/components/menu/menu";
import BooksList from "@/components/booksList/booksList";
import LoadMoreButton from "@/components/loadMoreButton/loadMoreButton";
import { URL } from "@/utils/constants";
import { useState, useEffect } from "react";

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

export default function Home({ initialBooks }: Props) {

  const [subject, setSubject] = useState<string>("Architecture");
  const [books, setBooks] = useState<Props["books"]>(initialBooks);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    console.log(subject, page)
    async function fetchBooks() {
      const response = await fetch(`/api/books?subject=${subject}&page=${page}`);
      const result = await response.json();
      if (result.data) {
        console.log(result.data)
        const newBooks = result.data.items.map((book) => ({
          id: book.id ? book.id : Math.random(),
          name: book.volumeInfo.title ? book.volumeInfo.title : null,
          authors: book.volumeInfo.authors ? book.volumeInfo.authors : null,
          description: book.volumeInfo.description ? book.volumeInfo.description : null,
          price: book.saleInfo.retailPrice ? book.saleInfo.retailPrice : null,
          rating: book.volumeInfo.averageRating ? book.volumeInfo.averageRating : null,
          reviews: book.volumeInfo.ratingsCount ? book.volumeInfo.ratingsCount : null,
          image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null
        }))
        if (page > 1) {
          console.log("page is more than 1")
          setBooks(prevBooks => [...prevBooks, ...newBooks]);
        } else {
        setBooks(newBooks);
      }
      }
    }
    fetchBooks();
  }, [subject, page]);

  console.log(books);

  return (
    <>
      <Layout>
        <Banner />
        <DisplayContainer>
          <Menu setSubject={setSubject} subject={subject} setPage={setPage}/>
          <BooksList books={books} />
          <LoadMoreButton setPage={setPage} />
        </DisplayContainer>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyAw8dYZxnbBh_ADDcduDpF3PWGRAcIqC14&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
  const data = await res.json();
  const books = data.items.map((book) => ({
    id: book.id ? book.id : Math.random(),
    name: book.volumeInfo.title ? book.volumeInfo.title : null,
    authors: book.volumeInfo.authors ? book.volumeInfo.authors : null,
    description: book.volumeInfo.description ? book.volumeInfo.description : null,
    price: book.saleInfo.retailPrice ? book.saleInfo.retailPrice : null,
    rating: book.volumeInfo.averageRating ? book.volumeInfo.averageRating : null,
    reviews: book.volumeInfo.ratingsCount ? book.volumeInfo.ratingsCount : null,
    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null
  }))

  return {
    props: {
      initialBooks: books
    },
  }
}