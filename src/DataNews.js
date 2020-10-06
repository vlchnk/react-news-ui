import './App.css';
import { useEffect, useState } from 'react';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8b26a8df0eb74525b92420dd3ff5fa7a');
//{ corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' }
function DataNews(props) {
    const [items, setItems] = useState({});
    let search

    if (props === undefined) {
        search = 'world'
    } else {
        search = props
    }

    useEffect(() => {
        newsapi.v2.everything({
            q: search,
            language: 'en',
            page: 1
        })
        .then(
            (result) => {
                // console.log(result)
                setItems(result);
            }
        )
    }, [])
    return items
}

export default DataNews;
