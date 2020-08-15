import React from 'react';

const ProjectDetails = ({ match }) => {
  const id = match.params.id;

  return (
    <div className="conatiner section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            accusantium ipsam iste itaque doloribus cum alias voluptates id
            nostrum voluptatem magni, impedit quisquam suscipit quaerat
            perspiciatis provident dolor porro in!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Brayn Adams</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
