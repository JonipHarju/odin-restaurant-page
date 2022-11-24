import { initialPageLoad } from "./initialPageLoad";
// event listener that loads the foodmenu
import { openMenu } from "./modules/frontpage/header";
import { openFrontPage } from "./modules/frontpage/header";
import { openContacts } from "./modules/frontpage/header";

addEventListener("load", (e) => {
  initialPageLoad();
  openMenu();
  openFrontPage();
  openContacts();
});
