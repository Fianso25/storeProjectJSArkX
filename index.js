const productsContainer = document.querySelector(".products-container");
let btnSort = document.querySelectorAll(".btnSort");
let btnScroll = document.querySelector(".top");
let productsData = [];
let sortMethod = "bestSellers";

async function fetchProducts() {
	await axios
		.get("http://localhost:3000/products")
		.then((data) => (productsData = data.data));
	// console.log(productsData);
	productsDisplay();
}

function productsDisplay() {
	productsContainer.innerHTML = productsData
		.sort((a, b) => {
			if (sortMethod === "bestSellers") return b.rating.rate - a.rating.rate;
			else if (sortMethod === "newestArrivals") return a.date - b.date;
			else if (sortMethod === "hightToLow") return b.price - a.price;
		})
		.map(
			(product) =>
				`
		<div class="card">
			<div class="CONTAINER-3D">
				<div class="container-3d">
					<div class="imgFaceContainer">
					<div class="BS">HOT</div>
					<img class="imgProducts imgProductsFace" src=${product.imageFace}>
					</div>
					<img class="imgProducts imgProductsBack" src=${product.imageBack}>
				</div>
			</div>
			<div class="cardBody">
				<div class="category">${product.category} </div>
				<div class="title">${product.title} </div>
				<div class="starIcon">
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<span class="percent">90%</span>
				</div>
				<div class="priceOldPrice">
					<div class="price">$${Math.ceil(product.price * 0.7)}</div>
					<div class="oldPrice">$${product.price}</div>
				</div>
			</div>
    </div>
    `
		)
		.join("");
}

window.addEventListener("load", fetchProducts());

btnSort.forEach((btn) =>
	btn.addEventListener("click", (e) => {
		sortMethod = e.target.id;
		document.querySelector(".isActive").classList.remove("isActive");
		btn.classList.add("isActive");
		productsDisplay();
	})
);


btnScroll.addEventListener("click",() => window.scroll({
	top: 0,
	behavior: "smooth",
}));


