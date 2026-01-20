export function getProductFromCard(card) {
    return {
        id: card.dataset.id,
        name: card.dataset.name,
        price: Number(card.dataset.price),
        image: card.dataset.image,
        category: card.dataset.category,
        description: card.dataset.description || "",
        oldPrice: card.dataset.oldprice
            ? Number(card.dataset.oldprice)
            : null
    };
}