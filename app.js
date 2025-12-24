const gallery = document.getElementById("gallery");

for (let i = 1; i <= 400; i++) {
  const img = document.createElement("img");
  img.src = `${String(i).padStart(3,"0")}.jpg`; // JEŚLI ZOSTANĄ W ROOT
  gallery.appendChild(img);
}
