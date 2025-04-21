import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useThemeContext } from "../context/ThemeContext";
import portfolioImage from "../assets/portfolio image.jpg"; // Image import
import EcommerceImage from "../assets/E-commerce image.jpg"; // Image import
import TaskManagementImage from "../assets/task management image.jpg"; // Image import
import TechStackImage from "../assets/Tech-stack.jpg"; // Image import
const Projects = () => {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Material-UI",
      image: portfolioImage, // Use imported image
      technologies: ["React", "Material-UI", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/portfolio",
    },
    // Add more projects as needed
    {
      title: "E-commerce Website",
      description: "An e-commerce website built with React and Material-UI",
      image: EcommerceImage, // Use imported image
      technologies: ["React", "Material-UI", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Task Management Website",
      description: "A task management website built with React and Material-UI",
      image: TaskManagementImage, // Use imported image
      technologies: ["React", "Material-UI", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Tech-Stack Website",
      description: "A tech-stack website built with React and Material-UI",
      image: TechStackImage, // Use imported image
      technologies: ["React", "Material-UI", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: isDarkMode
          ? "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(33,33,33,0.95) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
        paddingTop: { xs: "64px", sm: "72px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 800,
              textAlign: "center",
              mb: { xs: 4, sm: 6 },
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)", // Slightly increase the size
                background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            My Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: isDarkMode
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${
                      isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                    }`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for transform and shadow
                    "&:hover": {
                      transform: "scale(1.05)", // Slightly increase size on hover
                      boxShadow: `0 10px 20px ${theme.palette.primary.main}`, // Add shadow on hover
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image} // Use the image imported
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            background: isDarkMode
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.1)",
                            color: theme.palette.text.primary,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
