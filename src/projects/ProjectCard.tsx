import { Project } from "./Project";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";

function formatDescription(description: string): string {
  return description.substring(0, 70) + "...";
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
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        image={project.imageUrl}
        sx={{ height: 200, objectFit: "cover" }}
      />
      <CardContent sx={{}}>
        <Link to={"/projects/" + project.id}>
          <h5>
            <strong>{project.name}</strong>
          </h5>
          <p style={{ fontFamily: "Jost, san-serif" }}>
            {formatDescription(project.description)}
          </p>
          <p style={{ fontFamily: "Jost, san-serif" }}>
            Budget: ${project.budget.toLocaleString()}
          </p>
        </Link>
        <button
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            fontFamily: "Jost, san-serif",
            color: "white",
            backgroundColor: "#b7c9e2",
          }}
          onClick={() => {
            handleEditClick(project);
          }}
        >
          Edit
        </button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
