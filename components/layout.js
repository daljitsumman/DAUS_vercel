import styles from '../styles/Home.module.css'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import React, { useState, Fragment } from "react";
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css';

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>DAUS Systems</title>
                    <meta name="description" content="DAUS Rota system" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Daus</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container>

                    <main>{children}</main>
                </Container>
            </div>
        </>
    )
}