const path = require(`path`);
const developmentProjects = require("./src/assets/data/projects-development.json")
const designProjects = require("./src/assets/data/projects-design.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const PageTemplate = path.resolve("./src/templates/Project.js")

    developmentProjects.forEach(project => {
        const projectName = project.name.replace(/ /g, "").toLowerCase();
        const folderName = project.name.replace(/ /g, "-");
        const projectType = project.type.toLowerCase();
        if (project.visible) {
            createPage({
                path: `/portfolio/development/${projectName}`,
                component: PageTemplate,
                context: {
                    project,
                    imgPath: `projects/${projectType}/${folderName}`
                }
            })
        }
    });

    designProjects.forEach(project => {
        const projectName = project.name.replace(/ /g, "").toLowerCase();
        const folderName = project.name.replace(/ /g, "-");
        const projectType = project.type.toLowerCase();
        if (project.visible) {
            createPage({
                path: `/portfolio/design/${projectName}`,
                component: PageTemplate,
                context: {
                    project,
                    imgPath: `projects/${projectType}/${folderName}`
                }
            })
        }
    })
}