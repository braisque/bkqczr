(function ()
{
    const root = new URL('../', document.currentScript.src).href;

    const menuHTML = `
    <nav id="bar">

        <a href="${root}index.html" title="Retourner à l'accueil" target="_parent"><img src="${root}images/icons/home.png" alt="accueil" /></a>

	    <a href="${root}misc/ebooks.html" title="Télécharger les écrits formatés pour la lecture hors-ligne ou sur tablette" target="_parent"><img src="${root}images/icons/ebook.png" alt="ebook" /></a>

	    <a href="${root}misc/language.html" title="For those who do not speak French" target="_parent"><img src="${root}images/icons/language.png" alt="language" /></a>

	    <a href="${root}misc/contacts.html" title="Liens et contacts" target="_parent"><img src="${root}images/icons/contact.png" alt="contact" /></a>
        
    </nav>

    <hr>
    `;

    const target = document.getElementById('main_menu_placeholder');

    if (target)
    {
        target.innerHTML = menuHTML;
    }
})();