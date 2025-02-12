document.addEventListener("DOMContentLoaded", () => {
  const monsterList = document.getElementById("list");
  const monsterForm = document.getElementById("M_form");

  // fetch and display the 50
  fetchMonsters();

  // ADD eventListener for the submit
  monsterForm.addEventListener("submit", createMonster);

  function fetchMonsters(page = 1, limit = 50) {
    fetch(
      `https://suplementary-vercel.vercel.app/monsters?_limit=${limit}&_page=${page}`
    )
      .then((res) => res.json())
      .then((monsters) => {
        monsterList.innerHTML = "";
        monsters.forEach((monster) => displayMonster(monster));
      })
      .catch(console.error);
  }

  // display a monster on the page
  function displayMonster(monster) {
    const div = document.createElement("div");
    div.classList.add("monster");
    div.innerHTML = `
    <h2>${monster.name}</h2>
    <p class ='age'>${monster.age}</p>
    <p class ='description'>${monster.description}</p>
      `;
    monsterList.appendChild(div);
  }

  // create a new monster
  function createMonster(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("description").value;

    // create a new monster object
    const newMonster = {
      name,
      age: parseFloat(age),
      description,
    };

    // request to add new monster

    fetch("https://suplementary-vercel.vercel.app/monsters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newMonster),
    })
      .then((res) => res.json())
      .then((monster) => {
        // display newMonsters
        displayMonster(monster);

        // clear the form
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("description").value = "";
      })
      .catch(console.error);
  }
});
