import React from 'react';

const ManageBlog = (props) => {
    const { title, status, _id, name, cost, location, date } = props.allBlog;


    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure? You want to delete this order")
        if (confirm) {
            fetch(`https://warm-meadow-50946.herokuapp.com/deleteSingleBlog/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainder = props.allBlogs.filter(manageBlog => manageBlog._id !== id)
                        props.setAllBlogs(remainder)
                    }

                })
        }
    }

    const handleStatus = (id) => {
        fetch(`https://warm-meadow-50946.herokuapp.com/handleStatus/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Blog approved !")
                }
            })
    }
    return (
        <tr>
            <td>{props.index}</td>
            <td>{title}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td>${cost}</td>
            <td>{new Date(date).toLocaleDateString()}</td>
            <td>
                {/* delete button */}
                <button className="order-btn mb-1" onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i> Delete</button>
                {/* status button */}
                <button className="order-btn ms-2" onClick={() => handleStatus(_id)}><i className="fas fa-tags"></i> {status}</button>
            </td>
        </tr >
    );
};

export default ManageBlog;