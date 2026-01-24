// export function getFavorites() {
//     return JSON.parse(localStorage.getItem("favorites")) || [];
// }

// export function saveFavorites(favorites) {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
// }

// export function toggleFav(product) {
//     let favorites = getFavorites();

//     const idx = favorites.findIndex(p => String(p.id) === String(product.id));

//     if (idx >= 0) {
//         favorites.splice(idx, 1);
//     } else {
//         favorites.push(product);
//     }

//     saveFavorites(favorites);
//     return favorites;
// }

// export function isFavorite(id) {
//     return getFavorites().some(p => String(p.id) === String(id));
// }
