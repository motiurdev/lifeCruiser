import React, { useEffect, useState } from 'react';
import { Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [value, setValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://warm-meadow-50946.herokuapp.com/blog")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setIsLoading(false)
            })
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='py-5'>
            <Container>
                <h1>Blogs</h1>
                <select class="form-select w-25 ms-auto my-2" onChange={handleChange} aria-label="Default select example">
                    <option selected>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {isLoading ? <Spinner animation="border" /> :
                        blogs.filter((blog) => {
                            if (value == 0) {
                                return blog;
                            } else if (value == "Rating") {
                                return blog;
                            }
                            else if (blog.rating == value) {
                                return blog;
                            }
                        }).map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Blogs;