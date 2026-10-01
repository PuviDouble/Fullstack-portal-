
 let allProducts = [];

document.addEventListener("DOMContentLoaded", loadProducts);

function openModal(edit = false, product = null) {
  const modal = document.getElementById("productModal");
  modal.style.display = "flex";  // show only when button clicked

  if (edit && product) {
    document.getElementById("editId").value = product._id;
    document.getElementById("name").value = product.name;
    document.getElementById("price1").value = product.price1;
    document.getElementById("price2").value = product.price2;
    document.getElementById("price3").value = product.price3;
  } else {
    document.getElementById("editId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price1").value = "";
    document.getElementById("price2").value = "";
    document.getElementById("price3").value = "";
  }
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

async function saveProduct() {
  const id = document.getElementById("editId").value;

  const product = {
    name: document.getElementById("name").value,
    price1: document.getElementById("price1").value,
    price2: document.getElementById("price2").value,
    price3: document.getElementById("price3").value
  };

  if (id) {
    await fetch("/api/products/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
  } else {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
  }

  closeModal();
  loadProducts();
}

async function loadProducts() {
  const res = await fetch("/api/products");
  allProducts = await res.json();
  displayProducts(allProducts);
}

function displayProducts(products) {
  const table = document.getElementById("productTable");
  table.innerHTML = "";

  products.forEach((p, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${p.name}</td>
        <td>${p.price1}</td>
        <td>${p.price2}</td>
        <td>${p.price3}</td>
        <td>
          <button class="edit" onclick='openModal(true, ${JSON.stringify(p)})'>Edit</button>
          <button class="delete" onclick="deleteProduct('${p._id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

async function deleteProduct(id) {
  await fetch("/api/products/" + id, { method: "DELETE" });
  loadProducts();
}

function searchProduct() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
}