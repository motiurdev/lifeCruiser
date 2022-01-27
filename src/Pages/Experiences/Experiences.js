import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Experiences.css'

const Experiences = () => {
    const { user } = useAuth()
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [catagory, setCatagory] = useState("")
    const [description, setDescription] = useState("")
    const [time, setTime] = useState(null)
    const [date, setDate] = useState(null)
    const [cost, setCost] = useState("")
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState(0)

    const handleOnSubmit = e => {
        e.preventDefault()
        if (!image) {
            alert("please Upload an Image")
            return;
        }
        const formData = new FormData();
        formData.append("title", title)
        formData.append("catagory", catagory)
        formData.append("description", description)
        formData.append("time", time)
        formData.append("date", date)
        formData.append("cost", cost)
        formData.append("location", location)
        formData.append("image", image)
        formData.append("name", user.displayName)
        formData.append("rating", rating)
        formData.append("status", "unapproved")

        fetch('https://warm-meadow-50946.herokuapp.com/blog', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Upload successful")
                }
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            })

        console.log({ image, title, catagory, description, time, date, cost, location });
        console.log(formData);
    }
    return (
        <Container>
            <div className='experience-form'>
                <Form onSubmit={handleOnSubmit}>
                    <h2 className='text-center py-3'>Blog</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Title Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Title"
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Travelor Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={user.displayName}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Catagory</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Catagory"
                            onChange={e => setCatagory(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Description"
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Rating"
                            onChange={e => setRating(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image File</Form.Label>
                        <Form.Control
                            accept="image/*"
                            type="file"
                            onChange={e => setImage(e.target.files[0])}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            placeholder='Time'
                            onChange={e => setTime(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder='Date'
                            onChange={e => setDate(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cost</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder='Cost'
                            onChange={e => setCost(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='Location'
                            onChange={e => setLocation(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Experiences;