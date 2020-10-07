import './App.css';
import { useEffect, useState } from 'react';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8b26a8df0eb74525b92420dd3ff5fa7a', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });
//{ corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' }

function DataNews(text, page) {
    const [items, setItems] = useState({});
    let search = text
    let pageNumber = page
    console.log(page)
    useEffect(() => {
        newsapi.v2.everything({
            q: search,
            sortBy: 'publishedAt',
            language: 'en',
            page: pageNumber
        })
        .then(
            (result) => {
                console.log(result)
                setItems(result);
            }
        )
    }, [search])
    return items
}

export default DataNews;
