import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loggedIn: boolean;
    emailError: string;
    passwordError: string;
}

interface LogInArgs {
    email: string;
    password: string;
}

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (args:LogInArgs, { rejectWithValue }) => {
        const { email, password } = args;
        try {
            const response = await fetch(`/api/auth`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue({message: data.message, type: data.type});
            }

            return data;
        } catch (error:any) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState: AuthState = {
    loggedIn: false,
    emailError: '',
    passwordError: '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state ) => {
            state.loggedIn = true;
        },
        resetErrors: (state) => {
            state.emailError = '';
            state.passwordError = '';
        }
        
    },
    extraReducers: (builder) => { 
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.loggedIn = true;
        })
        .addCase(logIn.rejected, (state, action) => {
            state.loggedIn = false;
            if (action.payload) {
                if(action.payload.type === 'email'){
                state.emailError = action.payload.message;}
                else if(action.payload.type === 'password'){
                state.passwordError = action.payload.message;}
            } else {
                console.log("Unknown error");
            }
        });
    },
});

export const { setLoggedIn, resetErrors } = authSlice.actions;
export default authSlice.reducer;
