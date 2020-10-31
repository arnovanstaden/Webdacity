const path = require(`path`);
const developmentProjects = require("./src/assets/data/projects-development.json")
const designProjects = require("./src/assets/data/projects-design.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const PageTemplate = path.resolve("./src/templates/Project.js")

    developmentProjects.forEach(project => {
        const projectName = project.name.replace(/ /g, "");
        createPage({
            path: `/portfolio/${projectName}`,
            component: PageTemplate,
            context: {
                project,
                imgPath: project.imgPath
            }
        })
    });

    designProjects.forEach(project => {
        const projectName = project.name.replace(/ /g, "");
        createPage({
            path: `/portfolio/design/${projectName}`,
            component: PageTemplate,
            context: {
                project,
                imgPath: `images/projects/${project.type}/${projectName}`
            }
        })
    })
}