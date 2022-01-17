const contentfulData = {
    url:'https://cdn.contentful.com',
    spaces:'42jcfhpme8t6',
    token:'b4eR_MZ5KS8yEQg_Ov0Ta8WhXkul5GyS0DlATqE5Xik'
}

const contentfulURL = `${contentfulData.url}/spaces/${contentfulData.spaces}/entries?access_token=${contentfulData.token}`;

const documentMain = document.getElementById('main')

const contentfulFetch = fetch(contentfulURL).then(async response => {
    if (response.ok) {
        const postJson = await response.json();
        // console.log(postJson)
        postJson.items.forEach(post=>{
            const title = document.createElement("h1");
            // const description = document.createElement("p");
            title.innerHTML = post.fields.title;
            // description.innerHTML = post.description
            documentMain.appendChild(title)
        })
        postJson.includes.Asset.forEach(asset => {
            console.log(asset)
            const img = document.createElement('img');
            img.src = asset.fields.file.url;
            documentMain.appendChild(img)
        })
    } else {
        alert("HTTPS-Error:" + response.status);
    }
});
