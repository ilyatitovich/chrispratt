let portraits = [
    "/images/portraits/p-1.jpg",
    "/images/portraits/p-2.jpg",
    "/images/portraits/p-3.jpg",
    "/images/portraits/p-4.jpg",
    "/images/portraits/p-5.jpg",
];
let events = [
    "/images/events/ev-1.jpg",
    "/images/events/ev-2.jpg",
    "/images/events/ev-3.jpg",
    "/images/events/ev-4.jpg",
    "/images/events/ev-5.jpg",
];
let fashion = [
    "/images/fashion/f-1.jpg",
    "/images/fashion/f-2.jpg",
    "/images/fashion/f-3.jpg",
    "/images/fashion/f-4.jpg",
    "/images/fashion/f-5.jpg",
];
let product = [
    "/images/product/prod-1.jpg",
    "/images/product/prod-2.jpg",
    "/images/product/prod-3.jpg",
    "/images/product/prod-4.jpg",
    "/images/product/prod-5.jpg",
];

export function getImages() {
    let images = {
        portraits: portraits,
        events: events,
        fashion: fashion,
        product: product,
        "all works": [portraits, events, fashion, product].flat(),
    };

    return images;
}
