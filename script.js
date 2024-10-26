function animateProduct(product) {
    gsap.to(product, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
    });
}

function resetAnimation(product) {
    gsap.to(product, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    });
}

// Initialize animations on page load
window.onload = function () {
    gsap.from(".hero", {
        opacity: 0,
        duration: 1,
        y: -50
    });
    
    gsap.from(".product-section h2", {
        opacity: 0,
        duration: 1,
        y: -30,
        stagger: 0.2
    });
};
