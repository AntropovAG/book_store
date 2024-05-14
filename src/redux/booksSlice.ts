import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookInCart } from "@/utils/interfaces";

interface BooksState {
    books: Book[];
    filter: string;
    booksInCart: BookInCart[];
}

interface FetchBooksArgs {
    filter: string;
    page: number;
}

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async (args: FetchBooksArgs, { rejectWithValue }) => {
        const { filter, page } = args;
        try {
            const response = await fetch(`/api/books?subject=${filter}&page=${page}`);
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch: ${response.status} ${response.statusText}`
                );
            }
            const result = await response.json();
            return result;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState: BooksState = {
    books: [],
    filter: "Architecture",
    booksInCart: [],
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload;
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        addToCart: (state, action: PayloadAction<Book>) => {
            const addedBook = {
                ...action.payload,
                quantity: 1,
                deliveryStatus: "Shipping: delivery",
            };
            console.log(addedBook);
            console.log(state.booksInCart);
            state.booksInCart.push(addedBook);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            const newBooks = action.payload.data.items.map((book: any) => ({
                id: book.id ? book.id : Math.random(),
                name: book.volumeInfo.title ? book.volumeInfo.title : null,
                authors: book.volumeInfo.authors ? book.volumeInfo.authors : null,
                description: book.volumeInfo.description
                    ? book.volumeInfo.description
                    : null,
                price: book.saleInfo.retailPrice ? book.saleInfo.retailPrice : null,
                rating: book.volumeInfo.averageRating
                    ? book.volumeInfo.averageRating
                    : null,
                reviews: book.volumeInfo.ratingsCount
                    ? book.volumeInfo.ratingsCount
                    : null,
                image: book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : null,
            }));
            if (action.meta.arg.page > 1) {
                state.books = [...state.books, ...newBooks];
            } else {
                state.books = newBooks;
            }
        });
    },
});

export const { setBooks, setFilter, addToCart } = booksSlice.actions;
export default booksSlice.reducer;
