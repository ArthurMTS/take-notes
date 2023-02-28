import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store";
import { changeProject } from "@/store/projectSlicer";
import { MenuBox, MenuList, MenuTitle } from "./Menu.styles";
import { MenuItem } from "@/components/MenuItem";
import InboxIcon from "@/assets/icons/inbox.svg";
import ClipboardIcon from "@/assets/icons/clipboard.svg";
import ArchiveIcon from "@/assets/icons/archive.svg";
import TargetIcon from "@/assets/icons/target.svg";
import { AddProject } from "../AddProject";

export const Menu: React.FC = () => {
  const activeProject = useSelector((state: RootState) => state.projects.activeProject);
  const [inbox, today, week, ...projects] = useSelector(
    (state: RootState) => state.projects.projects,
  );
  const dispatch = useDispatch();

  const onProjectListItemClick = (id: number) => {
    dispatch(changeProject(id));
  };

  return (
    <MenuBox>
      <MenuTitle>Projects</MenuTitle>
      <MenuList className="nobar">
        <MenuItem
          id={inbox.id}
          key={inbox.id}
          active={activeProject === inbox.id}
          icon={InboxIcon}
          title={inbox.title}
          quantity={inbox.tasks.length}
          canBeDeleted={inbox.deletable}
          onClick={() => onProjectListItemClick(inbox.id)}
        />
        <MenuItem
          id={today.id}
          key={today.id}
          active={activeProject === today.id}
          icon={ClipboardIcon}
          title={today.title}
          quantity={today.tasks.length}
          canBeDeleted={today.deletable}
          onClick={() => onProjectListItemClick(today.id)}
        />
        <MenuItem
          id={week.id}
          key={week.id}
          active={activeProject === week.id}
          icon={ArchiveIcon}
          title={week.title}
          quantity={week.tasks.length}
          canBeDeleted={week.deletable}
          onClick={() => onProjectListItemClick(week.id)}
        />
        {projects.map(project => (
          <MenuItem
            id={project.id}
            key={project.id}
            active={activeProject === project.id}
            icon={TargetIcon}
            title={project.title}
            quantity={project.tasks.length}
            canBeDeleted={project.deletable}
            onClick={() => onProjectListItemClick(project.id)}
          />
        ))}
      </MenuList>
      <AddProject />
    </MenuBox>
  );
};
