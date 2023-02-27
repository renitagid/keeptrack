import { Project } from './Project';
import React from 'react';
import { Link } from 'react-router-dom';

function formatDescription(description: string): string {
  return description.substring(0, 70) + '...';
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;

  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div>
      <img src={project.imageUrl} alt={project.name} style={{width:500, height:200, objectFit:"cover" }}/>
      <section style={{height:228, position:"relative"}}>
        <Link to={'/projects/' + project.id}>
          <h5>
            <strong style={{fontFamily:"Jost, san-serif"}}>{project.name}</strong>
          </h5>
          <p style={{fontFamily:"Jost, san-serif"}}>{formatDescription(project.description)}</p>
          <p style={{fontFamily:"Jost, san-serif"}}>Budget: ${project.budget.toLocaleString()}</p>
        </Link>
        <button
        style={{position:"absolute", bottom:0, left:0, fontFamily:"Jost, san-serif", color:"white", backgroundColor:"#b7c9e2"}}
          onClick={() => {
            handleEditClick(project);
          }}
        >
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
