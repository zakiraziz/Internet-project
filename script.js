function animateProduct(product) {
    gsap.to(product, {
        scale: 1.1,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.3
    });
}

function resetAnimation(product) {
    gsap.to(product, {
        scale: 1,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        duration: 0.3
    });
}
