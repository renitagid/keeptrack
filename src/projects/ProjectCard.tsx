import { Project } from "./Project";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";


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
    <Card
      elevation={5}
      sx={{ maxWidth: 250, borderRadius: 2, height: 420, position: "relative" }}
    >
      <Link to={"/projects/" + project.id}>
        <div style={{ position: "relative" }}>
          <CardMedia component="img" image={project.imageUrl} height="200" />
          <h3
            style={{
              position: "absolute",
              top: 70,
              left: 0,
              right: 0,
              bottom: 0,
              padding: 5,
              color: "white",
              backgroundColor:"rgba(0, 0, 0, 0.5)"
            }}
          >
            <div style={{opacity:"100%"}}>  {project.name}</div>
          
          </h3>
        </div>
      </Link>
      <CardContent>
        <div
          style={{ maxHeight: 142, overflow: "clip", textOverflow: "ellipsis" }}
        >
          {project.description}
        </div>
      </CardContent>
      <Button
        variant="outlined"
        onClick={() => {
          handleEditClick(project);
        }}
        sx={{ position: "absolute", bottom: 6, right: 6 }}
      >
        Edit
      </Button>
    </Card>
  );
}

export default ProjectCard;
