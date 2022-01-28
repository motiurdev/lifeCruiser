import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { blogDetail } = useParams()
    const [singleBlog, setSingleBlog] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://warm-meadow-50946.herokuapp.com/singleBlog/${blogDetail}`)
            .then(res => res.json())
            .then(data => {
                setSingleBlog(data)
                setIsLoading(false)
            })
    }, [blogDetail])
    console.log(singleBlog);
    return (
        <div className='py-5'>
            {isLoading ? <Spinner animation="border" /> : <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img src={`data:image/png;base64,${singleBlog.image}`} className='img-fluid' alt="" />
                        <div className='d-flex'>
                            <p className='pe-4 text-secondary'><i class="fas fa-user"></i> {singleBlog.name}</p>
                            <p className='pe-4 text-secondary'><i class="far fa-calendar-alt"></i> {singleBlog.date}</p>
                            <p className='pe-4 text-secondary'><i class="far fa-clock"></i> {singleBlog.time}</p>
                        </div>
                        <h6>Catagory: {singleBlog.catagory}</h6>
                        <h6>Location: {singleBlog.location}</h6>
                    </div>
                    <div class="col-12 col-md-6">
                        <h1>{singleBlog.title}</h1>
                        <p className='text-secondary'>{singleBlog.description}</p>
                        <h4>Cost: ${singleBlog.cost}</h4>

                    </div>
                </div>
            </div>}
        </div>
    );
};

export default BlogDetails;