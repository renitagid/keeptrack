import React from "react";
import { Project } from "./Project";

interface ProjectDetailProps {
  project: Project;
  onCancel: () => void;
}
export default function ProjectDetail({
  project,
  onCancel,
}: ProjectDetailProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        style={{ textAlign: "center" }}
        src={project.imageUrl}
        alt={project.name}
      />
      <section>
        <h3>
          <strong style={{ fontFamily: "Jost, san-serif" }}>
            {project.name}
          </strong>
        </h3>
        <p style={{ fontFamily: "Jost, san-serif", fontWeight: "bold" }}>
          {project.county} County
        </p>
        <p style={{ fontFamily: "Jost, san-serif" }}>{project.description}</p>
        <p style={{ fontFamily: "Jost, san-serif" }}>
          Budget: ${project.budget.toLocaleString()}
        </p>

        <p style={{ fontFamily: "Jost, san-serif" }}>
          Signed: {project.contractSignedOn.toLocaleDateString()}
        </p>
        <p>
          <mark>{project.isActive ? "Active" : "Inactive"}</mark>
        </p>
      </section>
    </div>
  );
}
