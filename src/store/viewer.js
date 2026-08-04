import { createSlice } from "@reduxjs/toolkit";
import DeveloperImage from "@/assets/avatars/Developer.svg";
import ExplorerImage from "@/assets/avatars/Explorer.svg";
import ReaderImage from "@/assets/avatars/Reader.svg";
import RecruiterImage from "@/assets/avatars/Recruiter.svg";

const profileMap = {
  recruiter: { id: "recruiter", name: "Recruiter", icon: RecruiterImage },
  developer: { id: "developer", name: "Developer", icon: DeveloperImage },
  reader: { id: "reader", name: "Reader", icon: ReaderImage },
  explorer: { id: "explorer", name: "Explorer", icon: ExplorerImage },
};

const savedProfileId = typeof window !== "undefined" ? localStorage.getItem("viewer") : null;
const initialViewer = savedProfileId && profileMap[savedProfileId]
  ? { id: profileMap[savedProfileId].id, name: profileMap[savedProfileId].name, avatar: profileMap[savedProfileId].icon }
  : null;

const initialState = {
  currentViewer: initialViewer
};

const viewerSlice = createSlice({
  name: "viewer",
  initialState,
  reducers: {
    updateViewer: (state, action) => {
      if (action.payload?.id) {
        localStorage.setItem("viewer", action.payload.id);
      }
      state.currentViewer = action.payload;
    },
    clearViewer: (state) => {
      localStorage.removeItem("viewer");
      state.currentViewer = null;
    }
  }
});

export const { updateViewer, clearViewer } = viewerSlice.actions;

export default viewerSlice.reducer;