import styles from '../styles/Home.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import React, { useState, Fragment } from 'react';
import Head from 'next/head';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useConnector } from 'react-instantsearch-hooks-web';
import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.css';

const searchClient = algoliasearch('DBQWQ1Y56Y', 'd7fe485bc187c40ef99c32b8f828be5d');

function MyComponent(props) {
	const data = useMyWidget(props);
	// Render based on the data returned by the Hook
	return null;
}

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
						<InstantSearch indexName="daus" searchClient={searchClient}></InstantSearch>

						<Navbar.Brand href="#home">Daus</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Link href="/">
									<a>Home</a>
								</Link>
								<Link href="/search">
									<a>Search</a>
								</Link>
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
	);
}
