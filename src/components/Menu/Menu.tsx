import { RootState } from "@/store";
import { useSelector } from "react-redux";
import React from "react";


import { MenuBox, MenuList, MenuProject, MenuTitle } from "./Menu.styles";

export const Menu: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <MenuBox>
      <MenuTitle>Projects</MenuTitle>
      <MenuList>
        {
          projects.map(project => 
            <MenuProject
              key={project.id}
            >
              {project.title}
            </MenuProject>  
          )
        }
      </MenuList>
    </MenuBox>
  );
};
