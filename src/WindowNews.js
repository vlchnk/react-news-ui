import React from 'react';
import './App.css';
import DataNews from "./DataNews";

function WindowsNews(props) {
    console.log(props.search)
    let result = DataNews(props.search)
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
            <div className="container-fluid row row-cols-1 row-cols-md-3">
                {news}
            </div>
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
