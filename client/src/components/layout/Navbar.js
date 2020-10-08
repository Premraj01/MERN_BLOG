/** @format */

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/auth";
import { FaPenAlt } from "react-icons/fa";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestinks = (
    <ul>
      <li>
        <Link to='/displayposts'>Posts</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  const guestlanding = (
    <h1>
      <Link to='/'>
        <FaPenAlt /> FreeSpeech
      </Link>
    </h1>
  );

  const authlanding = (
    <Link to='#!'>
      <FaPenAlt /> FreeSpeech
    </Link>
  );

  return (
    <nav className='navbar bg-dark'>
      {!loading && (
        <Fragment>
          <h1>{isAuthenticated ? authlanding : guestlanding}</h1>
          {isAuthenticated ? authLinks : guestinks}
        </Fragment>
      )}
    </nav>
  );
};

Navbar.protoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToPtops = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToPtops, { logout })(Navbar);
