import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            // <div className="card" style={{width: "18rem"}}>
            <div className="card">
                <span className="badge rounded-pill bg-danger" style={{ position: "absolute", justifyContent: "flex-start", left: 0 }}>{source.name}</span>

                <img src={imageUrl === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBAZafcETIewM5tuVRKUWoqpVNB5CKrIbGzOIB8IxWx40WQ2DK2MDkmbEin9_mu1K54Y&usqp=CAU" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    {/* <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a> */}
                </div>
            </div>
        )
    }
}
