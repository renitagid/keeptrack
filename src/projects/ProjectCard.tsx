import { Project } from "./Project";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardMedia } from "@mui/material";

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
    <Card elevation={5}  sx={{ maxWidth: 300, borderRadius: 2, height:"420px" }}>
      <CardMedia component="img" image={project.imageUrl} height="200" />
      <CardContent>
        <Link to={"/projects/" + project.id}>
          <h5>{project.name}</h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget: ${project.budget.toLocaleString()}</p>
        </Link>
        <Button
          variant="outlined"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
