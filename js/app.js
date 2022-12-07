const copyLink = document.querySelectorAll('.tile-share-button')

async function copiarTexto(e) {
    e.preventDefault()
    const link = this.getAttribute('link')

    try {
        await navigator.clipboard.writeText(link)
        alert(link + ' Añadido a la papelera')
    }
    catch (err) {
        console.error(err)
    }
}

copyLink.forEach(copyLink => copyLink.addEventListener('click', copiarTexto))
