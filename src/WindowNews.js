import React from 'react';
import './App.css';
import DataNews from "./DataNews";

function WindowsNews(props) {
    console.log(props)
    let result
    try {
        result = DataNews(props.search.search, props.search.page)
    } catch {
        result = {status: 'Not found'}
    }
    console.log(result)
    if (result.status === 'ok') {
        let news = result.articles.map((number,index) =>
            <div key={index} className="col mb-4">
                <div className="card">
                    <img srcSet={number.urlToImage} alt={number.title} className="img-fluid card-img-top"/>
                    <div className="card-body">
                        <h5>{number.title}</h5>
                        <p className="card-text">{number.description}</p>
                        <a href={number.url} target="_blank" rel="noopener noreferrer">Go to page</a>
                        <p className="card-text"><small className="text-muted">Published at: {number.publishedAt.slice(0, -10)}</small></p>
                    </div>
                </div>
            </div>
        )
        return (
            <div>
                <div className="container-fluid row row-cols-1 row-cols-md-3">
                    {news}
                </div>
                {/*<p className='text-center'>Page: {props.search.page}</p>*/}
            </div>
        )
    } else if (result.status === 'Not found') {
        return (
            <h3>Not found 404</h3>
        )
    } else {
        return (
            <div className="preloader">
                <div className="spinner-border loader">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

}

export default WindowsNews;
