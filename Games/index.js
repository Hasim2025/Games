const projectContainer = document.querySelector(".project_container");

const projects = [
  {
    image: "images/p1.png",
    title: "Choklet game",
    url: "19sajib/index.html",
  },
  {
    image: "images/p2.png",
    title: "2048 matching game",
    url: "ANKUR2304/index.html",
  },
  {
    image: "images/p3.png",
    title: "Photos matching game",
    url: "Ravindra-Shastri/index.html",
  },
  {
    image: "images/p4.png",
    title: "Number searching game",
    url: "Ruhi14/index.html",
  },
  {
    image: "images/p5.png",
    title: "O V/S X game",
    url: "Tic Tac Toe/index.html",
  },
  {
    image: "images/p6.png",
    title: "Typing speed game",
    url: "typing-game/index.html",
  },
  {
    image: "images/p7.png",
    title: "Digital Photos matching game",
    url: "shivamsingh-07/index.html",
  },
];

const showProjects = () => {
  let output = "";
  projects.forEach(
    ({ image, title, url }, i) =>
      (output += `
      <div class="grid_item">
      <div class="card">
        <img src="${image}" alt="Project ${i}" />
        <a href="${url}">
          <div class="card_content">
            <h3>${title}</h3>
          </div>
        </a>
      </div>
    </div>
    `)
  );
  projectContainer.innerHTML = output;
};

showProjects();
