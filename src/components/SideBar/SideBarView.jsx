import {
  DateRangeOutlined,
  EventOutlined,
  ListAltOutlined,
  ChevronRight,
  ExpandMoreOutlined,
  Add,
} from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Box,
  // ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateProject from "../../CreateProject";

const styles = {
  listItem: {
    borderRadius: 1,
    cursor: "pointer",
  },
  itemLableWithAction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
};

export default function SideBarView(props) {
  const { createProject, toggleCreateProject, allProjects } = props;
  const navigate = useNavigate();

  const [expandedProject, setExpandedProject] = useState(false);

  const toggleExpandedProject = () => {
    setExpandedProject(!expandedProject);
  };

  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        overflowY: "scroll",
        paddingBottom: 15,
        userSelect: "none",
      }}
    >
      <List>
        <ListItem
          onClick={() => navigate("/all-tasks")}
          sx={{
            backgroundColor: window.location.pathname.includes("all-tasks")
              ? "#e5e5e5"
              : "inherit",
            ...styles.listItem,
          }}
        >
          <ListItemIcon>
            <ListAltOutlined />
          </ListItemIcon>
          <Box sx={styles.itemLableWithAction}>
            <Typography variant="body1">Task List</Typography>
          </Box>
        </ListItem>

        <ListItem
          onClick={() => navigate("/today")}
          sx={{
            backgroundColor: window.location.pathname.includes("today")
              ? "#e5e5e5"
              : "inherit",
            ...styles.listItem,
          }}
        >
          <ListItemIcon>
            <EventOutlined />
          </ListItemIcon>
          <Box sx={styles.itemLableWithAction}>
            <Typography variant="body1">Today</Typography>
          </Box>
        </ListItem>

        <ListItem
          onClick={() => navigate("/upcomming")}
          sx={{
            backgroundColor: window.location.pathname.includes("upcomming")
              ? "#e5e5e5"
              : "inherit",
            ...styles.listItem,
          }}
        >
          <ListItemIcon>
            <DateRangeOutlined />
          </ListItemIcon>
          <Box sx={styles.itemLableWithAction}>
            <Typography variant="body1">Upcomming</Typography>
          </Box>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemIcon>
            <IconButton
              size="small"
              edge="start"
              onClick={toggleExpandedProject}
            >
              {expandedProject ? <ExpandMoreOutlined /> : <ChevronRight />}
            </IconButton>
          </ListItemIcon>
          <Box sx={{ cursor: "pointer", ...styles.itemLableWithAction }}>
            <Box onClick={toggleExpandedProject} flex={1}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, flex: 1 }}
                color="text.primary"
              >
                Projects{" "}
                {Boolean(allProjects.length) && `(${allProjects.length})`}
              </Typography>
            </Box>
            <IconButton
              size="small"
              edge="end"
              onClick={() => toggleCreateProject(true)}
            >
              <Add color="action" />
            </IconButton>
          </Box>
        </ListItem>
        {expandedProject && (
          <List>
            {!Boolean(allProjects.length) && (
              <ListItem>
                <ListItemIcon />
                <Typography variant="body1" color="textSecondary">
                  <i>You do not have any projects</i>
                </Typography>
              </ListItem>
            )}
            {[...allProjects].map((project, i) => (
              <ListItem
                onClick={() => navigate(`/${project._id}`)}
                key={i}
                sx={{
                  backgroundColor: window.location.pathname.includes(
                    project._id
                  )
                    ? "#e5e5e5"
                    : "inherit",
                  ...styles.listItem,
                }}
              >
                <ListItemIcon />
                <Typography variant="body1">{project.title}</Typography>
              </ListItem>
            ))}
          </List>
        )}
      </List>
      {createProject && (
        <CreateProject handleClose={() => toggleCreateProject(false)} />
      )}
    </Container>
  );
}
