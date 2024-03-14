import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { bookmarkActionUrl } from "../utils/constant.utils";
import { errorToast, successToast } from "../utils/customToast";

// Thunk for adding a bookmark
export const addBookmark = createAsyncThunk(
	"bookmark/addBookmark",
	async (mediaData, thunkAPI) => {
		try {
			const { data } = await axios.post(
				bookmarkActionUrl + "/add",
				{ mediaData },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: document.cookie,
					},
				}
			);
			successToast(data.message);
			return mediaData;
		} catch (error) {
			// console.log(error);
			errorToast(error.reponse.data.message);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

// Thunk for removing a bookmark
export const removeBookmark = createAsyncThunk(
	"bookmark/removeBookmark",
	async (mediaID, thunkAPI) => {
		try {
			const { data } = await axios.delete(
				bookmarkActionUrl + "/remove/" + mediaID,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: document.cookie,
					},
				}
			);
			successToast(data.message);
			return mediaID;
		} catch (error) {
			// console.log(error);
			errorToast(error.reponse.data.message);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

// Thunk for fetching user bookmarks
export const fetchUserBookmark = createAsyncThunk(
	"bookmark/fetchUserBookmark",
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get(bookmarkActionUrl + "/data", {
				headers: {
					"Content-Type": "application/json",
					Authorization: document.cookie,
				},
			});
			return data.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const bookmarkSlice = createSlice({
	name: "bookmark",
	initialState: {
		bookmarks: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addBookmark.fulfilled, (state, action) => {
				// Add the newly added bookmark to the state
				state.bookmarks.push(action.payload);
			})
			.addCase(removeBookmark.fulfilled, (state, action) => {
				// Remove the deleted bookmark from the state
				state.bookmarks = state.bookmarks.filter(
					(bookmark) => (bookmark.mediaId || bookmark.id) != action.payload
				);
			})
			.addCase(fetchUserBookmark.fulfilled, (state, action) => {
				// Update bookmarks with fetched user bookmarks
				state.bookmarks = action.payload;
			});
	},
});
export default bookmarkSlice.reducer;
