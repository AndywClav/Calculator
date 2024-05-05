import { addLocalStore } from "./utils/storage/local/index.js"
import { menuHistory, trash } from "./utils/menuHistory/index.js";

// Local Storage

addLocalStore();
trash();

// Menu of History

menuHistory();

