import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import './Login.css'

import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { singInUsingGoogle, signInWithFacebook } = useAuth();

    return (
        <Container className="w-25 my-4">
            <h1 className="text-center">Sign In</h1>
            <hr />
            <div className="text-center" >
                <Button onClick={signInWithFacebook} className="mx-2" variant="outline-primary"><FaFacebookSquare /></Button>
                <Button onClick={singInUsingGoogle} variant="outline-warning"><FcGoogle /></Button>

            </div>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Link to="/register">Create an account</Link>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container>
    );
};

export default Login;