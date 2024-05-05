import { addLocalStore } from "./utils/storage/local/index.js"
import { menuHistory, trash } from "./utils/menuHistory/index.js";
import { modificalo_Santi_AVISAMEPARAHACER_VIDEO_LLAMADA as test } from "./test.js";

// Local Storage

addLocalStore();
trash();

// Menu of History

menuHistory();

// Modify logic of test

test();