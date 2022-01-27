import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { blogDetail } = useParams()
    const [singleBlog, setSingleBlog] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/singleBlog/${blogDetail}`)
            .then(res => res.json())
            .then(data => setSingleBlog(data))
    }, [blogDetail])
    console.log(singleBlog);
    return (
        <div className='py-5'>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img src={`data:image/png;base64,${singleBlog.image}`} className='img-fluid' alt="" />
                        <div className='d-flex'>
                            <p className='pe-4 text-secondary'><i class="fas fa-user"></i> {singleBlog.name}</p>
                            <p className='pe-4 text-secondary'><i class="far fa-calendar-alt"></i> {singleBlog.date}</p>
                            <p className='pe-4 text-secondary'><i class="far fa-clock"></i> {singleBlog.time}</p>
                        </div>
                        <p className='text-secondary'>{singleBlog.description}</p>
                    </div>
                    <div class="col-12 col-md-6">
                        <h1>{singleBlog.title}</h1>
                        <p>Catagory: {singleBlog.catagory}</p>
                        <p>Cost: {singleBlog.cost}</p>
                        <p>Location: {singleBlog.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;