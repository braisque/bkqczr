function pageSlicer(totalPages)
{
    var lang = document.documentElement.lang || "fr";
    var labelPrev = (lang === "en") ? "previous page" : "page précédente";
    var labelNext = (lang === "en") ? "next page" : "page suivante";

    let links = "";
    for (let i = 1; i <= totalPages; i++)
    {
        links += `<a href="#" ${i === 1 ? 'class="page"' : ''} id="${i}" onclick="showPages(${i})">${i}</a> `;
    }

    const container = document.getElementById('pagination-container');
    if (container)
    {
        container.innerHTML = `
        <nav class="discreet-info-nav split-items">
            <a href="#" onclick="showPages(current - 1)">${labelPrev}</a>
            <a href="#" onclick="showPages(current + 1)">${labelNext}</a>
        </nav>
        <hr>
        <nav class="discreet-info-nav">pages&nbsp;: ${links}</nav>`;
    }
}

document.addEventListener("DOMContentLoaded", () =>
{
    const container = document.getElementById('pagination-container');
    if (container && container.dataset.pages)
    {
        pageSlicer(container.dataset.pages);
    }
});