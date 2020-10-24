const path = require(`path`);
const data = require("./src/assets/data/projects.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const PageTemplate = path.resolve("./src/templates/Project.js")

    data.forEach(project => {
        const projectName = project.name.replace(/ /g, "");
        createPage({
            path: `/project/${projectName}`,
            component: PageTemplate,
            context: project,
        })
    })
}