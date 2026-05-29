var current = 1;
var totalPages = document.getElementById("pageContainer").childElementCount;


function showPages(id = 1)
{
    if (id < 1 || id > totalPages)

        return;

    document.getElementById("pageContainer").style.minHeight = document.getElementById("pageContainer").offsetHeight + "px";

    curr_page = document.getElementById("page" + current);
    curr_page.classList.add("pageHidden");
    curr_page.classList.remove("pageDisplayed");

    target_page = document.getElementById("page" + id);
    target_page.classList.add("pageDisplayed");
    target_page.classList.remove("pageHidden");

    //The following is a custom lazy loader built to work with how the page system on bkqczr is designed.
    var img = target_page.querySelector('img');
    if (img && img.dataset.src)
    {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');

        img.onload = function () { document.getElementById("pageContainer").style.minHeight = "0px"; };
    }
    else
    {
        document.getElementById("pageContainer").style.minHeight = "0px";
    }

    //Displays the current page.
    pageNum = document.getElementById("" + id);
    pageNum.classList.add("page")

    pageNum = document.getElementById("" + current);
    pageNum.classList.remove("page")
    current = id;

    //Toggles visibility of Previous/Next links.
    var prevLink = document.getElementById("prev-link");
    var nextLink = document.getElementById("next-link");

    if (prevLink)
    {
        prevLink.style.visibility = (id === 1) ? "hidden" : "visible";
    }

    if (nextLink)
    {
        nextLink.style.visibility = (id === totalPages) ? "hidden" : "visible";
    }
}