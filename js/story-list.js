document.addEventListener('DOMContentLoaded', function() {
    const stories = [
        { title: "Quiero", date: "2024-04-26", file: "2024-04-26-quiero.html" },
        { title: "El Sutil Sonar del Claxon", date: "2023-09-03", file: "2023-09-03-el-sutil-sonar-del-claxon.html" },
        { title: "El Principio", date: "2023-04-15", file: "2023-04-15-el-principio.html" }
    ];

    const storyList = document.getElementById('story-list');
    stories.forEach(story => {
        const storyElement = document.createElement('article');
        storyElement.innerHTML = `
            <h2><a href="_posts/${story.file}">${story.title}</a></h2>
            <p>Fecha: ${story.date}</p>
        `;
        storyList.appendChild(storyElement);
    });
});
