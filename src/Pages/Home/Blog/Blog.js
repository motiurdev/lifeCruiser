import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {
    const { image, title, _id, rating, cost, description, location } = props.blog;
    return (

        <div class="col">
            <div class="card h-100">
                <img src={`data:image/png;base64,${image}`} class="card-img-top" alt="..." height="300" />
                <div class="card-body">
                    <div class="row justify-content-between">
                        <div class="col-6">
                            <h3 class="card-title">{title}</h3>
                            <h6 className=''>
                                <Rating
                                    initialRating={rating}
                                    emptySymbol="far fa-star star-color"
                                    fullSymbol="fas fa-star star-color"
                                    readonly
                                />
                            </h6>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <div>
                                <h5>${cost}</h5>
                                <p className='text-secondary'><i class="fas fa-map-marker-alt"></i> {location}</p>
                            </div>
                        </div>
                    </div>
                    <p class="card-text text-secondary">{description.slice(0, 100)}</p>
                    <Link to={`/blogDetail/${_id}`}>
                        <button type="button" className="btn btn-color">Detail Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;