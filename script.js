// Temporary fake data (we’ll replace this with Supabase later)
const yarns = [
    { name: "Cascade 220", brand: "Cascade", weight: "Worsted" },
    { name: "Merino Soft", brand: "Brand X", weight: "DK" }
];

const container = document.getElementById("yarn-list");
container.innerHTML = "";

yarns.forEach(yarn => {
    const div = document.createElement("div");
    div.className = "yarn-card";
    div.innerHTML = `
        <h3>${yarn.name}</h3>
        <p>${yarn.brand}</p>
        <p>${yarn.weight}</p>
    `;
    container.appendChild(div);
});