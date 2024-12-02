const unitOptions = document.querySelectorAll('input[name="unit"]');
const totalPriceElement = document.querySelector(".total-price");

function clearExpandedFields() {
  const expandedFields = document.querySelectorAll(".expanded-fields");
  expandedFields.forEach((field) => field.remove());
}

unitOptions.forEach((option) => {
  option.addEventListener("change", (e) => {
    clearExpandedFields();
    const selectedUnit = e.target.id;
    let price;
    let units = 0;

    switch (selectedUnit) {
      case "unit-1":
        price = "$10.00 USD";
        units = 1;
        break;
      case "unit-2":
        price = "$18.00 USD";
        units = 2;
        break;
      case "unit-3":
        price = "$24.00 USD";
        units = 3;
        break;
    }
    totalPriceElement.textContent = price;
    const allOfferItems = document.querySelectorAll(".offer-item");
    allOfferItems.forEach((item) =>
      item.classList.remove("highlight-selection")
    );
    const parent = option.closest(".offer-item");
    const expandedFields = document.createElement("div");
    expandedFields.classList.add("expanded-fields");
    var sizeField = "";
    var colorField = "";
    for (let i = 1; i <= units; i++) {
      if (i == 1) {
        sizeField = `
        <div class="option">
          <label for="size-${selectedUnit}-${i}">  Size</label>
          <select id="size-${selectedUnit}-${i}">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
      `;
      } else {
        sizeField = `
        <div class="option">
          <select id="size-${selectedUnit}-${i}">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
      `;
      }
      if (i == 1) {
        colorField = `
        <div class="option">
          <label for="color-${selectedUnit}-${i}">  Color</label>
          <select id="color-${selectedUnit}-${i}">
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
          </select>
        </div>
      `;
      } else {
        colorField = `
        <div class="option">
          <select id="color-${selectedUnit}-${i}">
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
          </select>
        </div>
      `;
      }
      expandedFields.innerHTML += sizeField + colorField;
    }

    parent.appendChild(expandedFields);
    parent.classList.add("highlight-selection");
  });
});
