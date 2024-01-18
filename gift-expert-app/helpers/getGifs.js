export const getGifs = async(categorias) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WFbh3QSXeWNhUMpk2ZE9dRh2TcyGPZ2Q&q=dragon ball z=${categorias}`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }));
   
    return gifs;

} 