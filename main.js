let msg = "This message is not for you.";
let i = 5;

let fn;
let ln;
let bd;

do {
    fn = prompt("Is your first name Josh? (y/n)");
    if (fn !== "y") {
        alert(msg);
    }
} while (fn !== "y" && fn);

do {
    ln = prompt("Is your last name Hanni? (y/n)");
    if (ln !== "y") {
        alert(msg);
    }
} while (ln !== "y" && ln);

do {
    bd = prompt("Is today your birthday? (y/n)");
    if (bd !== "y") {
        alert(msg);
    }
} while (bd !== "y" && bd);

alert("HAPPY BIRTHDAY!!!");