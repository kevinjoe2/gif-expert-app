const GetGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=pxeH7unUCtbubeESEYl84AA7PdfJS5ta&q=${category}&limit=5&lang=es`;
    const resp = await fetch(url, {cache: 'no-cache'});
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });
    return gifs;

}

export default GetGifs;