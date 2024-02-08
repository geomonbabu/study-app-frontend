import React from 'react'
import { Link } from 'react-router-dom'
const StudyNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand text-white" to="#">Learning App</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link text-white" to="/">Add Course</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/viewblog">View Course </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/searchblog">search Course </Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default StudyNav