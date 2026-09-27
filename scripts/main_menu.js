(function ()
{
    const root = new URL('../', document.currentScript.src).href;
    const isOffline = window.location.protocol === 'file:';
    const indexUrl = isOffline ? `${root}index.html` : root;

    const menuHTML = `
    <nav id="bar">
        <a href="${indexUrl}" title="Retourner à l'accueil" target="_parent">
            <img src="${root}images/icons/home.svg" alt="" />
            <span>Accueil</span>
        </a>

        <a href="${root}misc/ebooks.html" title="Télécharger les écrits formatés pour la lecture hors-ligne ou sur tablette" target="_parent">
            <img src="${root}images/icons/ebook.svg" alt="" />
            <span>E-books</span>
        </a>

        <a href="${root}misc/language.html" title="For those who do not speak French" target="_parent">
            <img src="${root}images/icons/language.svg" alt="" />
            <span>Language</span>
        </a>

        <a href="${root}misc/contacts.html" title="Liens et contacts" target="_parent">
            <img src="${root}images/icons/contact.svg" alt="" />
            <span>Contact</span>
        </a>
    </nav>

    <hr>
    `;

    const target = document.getElementById('main_menu_placeholder');

    if (target)
    {
        target.innerHTML = menuHTML;
    }
})();