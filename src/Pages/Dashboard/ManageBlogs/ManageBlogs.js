import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import ManageBlog from '../ManageBlog/ManageBlog';

const ManageBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/allBlogs")
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="py-5">
            <h1 className="text-center py-3">Mangage <span className="sub-title">All Blogs</span></h1>
            {isLoading ? <Spinner animation="border" /> : <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBlogs.map((allBlog, index) => <ManageBlog
                            key={allBlog._id}
                            allBlog={allBlog}
                            setAllBlogs={setAllBlogs}
                            allBlogs={allBlogs}
                            index={index}
                        ></ManageBlog>)
                    }
                </tbody>
            </Table>}
        </div>
    );
};

export default ManageBlogs;