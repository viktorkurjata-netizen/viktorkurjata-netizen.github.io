fetch("data.json")
  .then(r => r.json())
  .then(data => {
    const gallery = document.getElementById("gallery");
    const search = document.getElementById("search");

    function render(items) {
      gallery.innerHTML = "";
      items.forEach(i => {
        gallery.innerHTML += `
          <div class="card">
            <img src="${i.image}">
            <div class="info">${i.club} – ${i.opponent} (${i.year})</div>
          </div>
        `;
      });
    }

    render(data);

    search.addEventListener("input", e => {
      const q = e.target.value.toLowerCase();
      render(data.filter(i =>
        `${i.club} ${i.opponent} ${i.year}`.toLowerCase().includes(q)
      ));
    });
  });
