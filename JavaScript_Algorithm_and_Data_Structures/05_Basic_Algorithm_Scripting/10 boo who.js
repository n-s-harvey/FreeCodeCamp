/* function booWho(bool) {
    if (bool == true | bool == false) return true;
    else return false;
} */

function booWho(bool) {
    if (bool === true || bool === false) return true;
    else return false;
}

booWho(null);
booWho(1);
booWho(true);