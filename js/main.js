const arts = [
  {
    title: "Landscape",
    artist: "Asher Brown Durand",
    img:
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10793/32691/main-image",
    reacts: {
      thumbsup: 0, // 👍
      love: 0, // 🧡
    },
  },
  {
    title: "Summer Afternoon",
    artist: "Asher Brown Durand",
    img:
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10798/50626/main-image",
    reacts: {
      thumbsup: 0, // 👍
      love: 0, // 🧡
    },
  },
  {
    title: "Sunset on the Sea",
    artist: "John Frederick Kensett",
    img:
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11325/43367/main-image",
    reacts: {
      thumbsup: 0, // 👍
      love: 0, // 🧡
    },
  },
  {
    title: "Child Asleep (The Rosebud)",
    artist: "Thomas Sully",
    img:
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/12704/49431/main-image",
    reacts: {
      thumbsup: 0, // 👍
      love: 0, // 🧡
    },
  },
  {
    title: "Piazza San Marco",
    artist: "Canaletto",
    img:
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/435839/1763010/main-image",
    reacts: {
      thumbsup: 0, // 👍
      love: 0, // 🧡
    },
  },
  {
    title: "The Fortune-Teller",
    artist: "Georges de La Tour",
    img:
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436838/1763016/main-image",
    reacts: {
      thumbsup: 0, // 👍
      love: 0, // 🧡
    },
  },
];
const listArts = document.getElementById("arts-container-center");
renderArts(arts);

function renderArts(arts) {
  listArts.innerHTML = "";
  for (let i = 0; i < arts.length; i++) {
    const art = document.createElement("div");
    art.className = "art";
    art.innerHTML = `<h3 class="art-title">${arts[i].title}</h3>
    <div class="art-content">
      <p class="art-artist">${arts[i].artist}</p>
      <img src="${arts[i].img}">
    </div>
    <div class="art-reaction">
      <span class="reaction-container">
        <span class="reaction-emoji"  onclick="thumbsupButton(${i})">👍</span>
        <span class="reaction-number" id="like-${i}">${arts[i].reacts.thumbsup}</span>
      </span>
      <span class="reaction-container">
        <span class="reaction-emoji" onclick="loveButton(${i})">🧡</span>
        <span class="reaction-number" id="love-${i}">${arts[i].reacts.love}</span>
      </span>
      </span>
    </div>`;
    listArts.append(art);
  }
}

function thumbsupButton(idx) {
  arts[idx].reacts.thumbsup += 1;
  document.getElementById("like-" + idx).innerText = arts[idx].reacts.thumbsup;
}

function loveButton(idx) {
  arts[idx].reacts.love += 1;
  document.getElementById("love-" + idx).innerText = arts[idx].reacts.love;
}

function search() {
  const input = document.getElementById("search").value;
  // console.log(input);
  let output = [];
  for (let i = 0; i < arts.length; i++) {
    let flag = false;
    for (let k = 0; k < arts[i].title.length; k++) {
      let temp = "";
      for (let j = k; j <= arts[i].title.length; j++) {
        if (input.toLowerCase() == temp.toLowerCase()) {
          flag = true;
        } else {
          temp += arts[i].title[j];
        }
      }
    }
    if (flag) {
      output.push(arts[i]);
    }
  }
  renderArts(output);
}
