import React, { useState } from 'react';
import './dash.css'; // Import your CSS file

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
    <div className="DashBoard w-[100vw]">
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-graduation"></i>
          <span className="text">Dashboard</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-dots"></i>
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group"></i>
              <span className="text">Team</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i className="bx bx-menu"></i>
          <a href="#" className="nav-link">
            Categories
          </a>
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
          <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="./myimage/people.png" alt="Profile" />
          </a>
        </nav>

        <main>
          <div className="head-title">
            <div className="left">
              <div id="hiuser">
                <h1>Dashboard</h1>
              </div>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check"></i>
              <span className="text">
                <h3>Participated Events</h3>
                <p>{events.length}</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-crown"></i>
              <span className="text">
                <h3>Won</h3>
                <p>2</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-hourglass-top"></i>
              <span className="text">
                <h3>Upcoming Events</h3>
                <p>4</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Events Participated</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((event) => (
                    <tr key={event.name}>
                      <td>
                        <img src={event.image} alt={event.name} />
                        <p>{event.name}</p>
                      </td>
                      <td>{event.date}</td>
                      <td>
                        <span className={`status ${event.status}`}>
                          {event.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DashBoard;