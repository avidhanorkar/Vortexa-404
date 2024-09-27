import React, { useState } from 'react';
import './dash.css';
import { Link } from 'react-router-dom'

function DashBoard() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const events = [
        {
            image: './myimage/hacthon.png',
            name: 'Devx hackthon',
            date: '01-10-2021',
            status: 'completed',
        },
        {
            image: './myimage/magni.png',
            name: 'Quest of code',
            date: '01-10-2021',
            status: 'pending',
        },
        {
            image: './myimage/download.png',
            name: 'Basketball',
            date: '01-10-2021',
            status: 'process',
        },
        {
            image: './myimage/singing.jpeg',
            name: 'Singing Feastia',
            date: '01-10-2021',
            status: 'pending',
        },
        {
            image: './myimage/treasure.jpg',
            name: 'Treasure Hunt',
            date: '01-10-2021',
            status: 'completed',
        },
    ];

    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="DashBoard w-[100vw] rounded">
            <section id="sidebar"  className='bg-[#121212]'>
                <Link className="brand">
                    <i className="bx bxs-graduation"></i>
                    <span className="text ">Dashboard</span>
                </Link>
                <ul className="side-menu top">
                    <li >
                        <Link to="/">
                            <i className="bx bxs-dashboard"></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="bx bxs-doughnut-chart"></i>
                            <span className="text">Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="bx bxs-message-dots"></i>
                            <span className="text">Message</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="bx bxs-group"></i>
                            <span className="text">Team</span>
                        </Link>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <Link className="logout" to="/">
                            <i className="bx bxs-log-out-circle"></i>
                            <span className="text">Logout</span>
                        </Link>
                    </li>
                </ul>
            </section>

            <section id="content">
                <nav className='absolute top-0'>
                    <i className="bx bx-menu"></i>
                    <Link className="nav-link" to="/">
                        Categories
                    </Link>
                    <form action="#">
                        <div className="form-input">
                            <input
                                type="search"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button type="submit" className="search-btn">
                                <i className="bx bx-search"></i>
                            </button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label htmlFor="switch-mode" className="switch-mode"></label>
                    <Link className="notification" to="/">
                        <i className="bx bxs-bell"></i>
                        <span className="num">8</span>
                    </Link>
                    <Link className="profile" to="/">
                        <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="Profile" />
                    </Link>
                </nav>

                <main>
                    <div className="head-title">
                        <div className="left">
                            <div id="hiuser">
                                <h1>Dashboard</h1>
                            </div>
                            <div className='h-[80vh] w-[80vw] flex flex-row gap-[20px] justify-center align-center'>
                                <div className='h-[500px] w-[400px] bg-[#121212] rounded-md  flex flex-col justify-around items-center p-4'>
                                    <p className='text-3xl'>Progress Tracker</p>
                                    <p>A tool designed to help you monitor and achieve your goals efficiently. Whether you're working on personal projects, academic objectives, or career milestones, this tracker will guide you through every step of your journey.</p>
                                    <button className="w-[200px] px-3 py-2 bg-[#fff] hover:bg-[#fff] " type="button"><Link to='/progress' className='text-[#000] hover:text-[#000]'>Progress Tracker</Link></button>
                                </div>
                                <div className='h-[500px] w-[400px] bg-[#121212] rounded-md  flex flex-col justify-around items-center p-4'>
                                    <p>Achieve<span className='text-2xl text-[#ECDBB5]'>X</span> ChatBot</p>
                                    <p>the intelligent assistant designed to help you stay focused, organized, and on track to achieve your personal and professional goals. Whether you’re looking to enhance productivity, manage projects, or track progress, AchieveX AI is here to guide you every step of the way.</p>
                                    <button className="w-[200px] px-3 py-2 bg-[#fff] hover:bg-[#fff] " type="button"><Link to='/chatBot' className='text-[#000] hover:text-[#000]'>Use Chat Bot</Link></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </section>
        </div>
    );
}

export default DashBoard