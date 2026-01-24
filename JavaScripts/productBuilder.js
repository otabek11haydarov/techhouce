export function getProductFromCard(card) {
    return {
        id: card.dataset.id,
        name: card.dataset.name,
        price: Number(card.dataset.price),
        image: card.dataset.image,
        category: card.dataset.category,
        description: card.dataset.description || "",

        bestSeller: card.dataset.bestseller === "true",
        star: Number(card.dataset.star) || 0,
        stock: Number(card.dataset.stock) || 0,
        brand: card.dataset.brand || null,

        oldPrice: card.dataset.oldprice ? Number(card.dataset.oldprice) : null,
        save: card.dataset.save ? Number(card.dataset.save) : null,

        height: card.dataset.height || null,
        width: card.dataset.width || null,
        weight: card.dataset.weight || null,
        power: card.dataset.power || null
    };
}
