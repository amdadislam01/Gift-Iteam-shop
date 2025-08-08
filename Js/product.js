// Product data
const products = {
    1: {
        name: "Personalized Photo Frame",
        price: "৳1,299",
        description: "This elegant wooden photo frame can be personalized with names, dates, or special messages. Perfect for anniversaries, weddings, or as a thoughtful gift for loved ones. Holds a 5x7 inch photo.",
        images: [
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1518893880019-7f2d4a4f45e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        ],
        reviews: 42
    },
    2: {
        name: "Customized Jewelry Box",
        price: "৳2,499",
        description: "A beautiful velvet-lined jewelry box that can be customized with initials or names. Features multiple compartments for rings, necklaces, and earrings. Made with high-quality wood and soft-close hinge.",
        images: [
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1603974372035-9cc5c0df2035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1603974372035-9cc5c0df2035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        reviews: 28
    },
    3: {
        name: "Romantic Gift Hamper",
        price: "৳3,199",
        description: "Our premium romantic gift hamper includes luxury chocolates, scented candles, a plush teddy bear, and a personalized love letter. Perfect for anniversaries, Valentine's Day, or just to show you care.",
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1518893880019-7f2d4a4f45e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        reviews: 56
    },
    4: {
        name: "Scented Candles Set",
        price: "৳1,799",
        description: "A set of 3 hand-poured soy wax candles with premium fragrances. Each candle burns for 50+ hours. Choose from our signature scents: lavender vanilla, sandalwood, and fresh linen. Comes in elegant gift packaging.",
        images: [
            "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1518893880019-7f2d4a4f45e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        reviews: 19
    },
    5: {
        name: "Engraved Wooden Watch",
        price: "৳3,899",
        description: "Handcrafted wooden watch with personalized engraving on the back. Eco-friendly and lightweight with a natural wood grain pattern. Water-resistant and comes with a 1-year warranty. Perfect for men and women.",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1518893880019-7f2d4a4f45e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        ],
        reviews: 87
    },
    6: {
        name: "Personalized Leather Wallet",
        price: "৳2,199",
        description: "Genuine leather wallet that can be embossed with initials or a short message. Features multiple card slots, ID window, and bill compartment. Available in black, brown, and tan colors. Ages beautifully over time.",
        images: [
            "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1367&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1518893880019-7f2d4a4f45e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        ],
        reviews: 63
    },
    7: {
        name: "Customized Coffee Mug",
        price: "৳899",
        description: "High-quality ceramic mug that can be printed with your photo, text, or design. Microwave and dishwasher safe. Holds 11oz of your favorite beverage. Perfect for coffee lovers and office gifts.",
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1518893880019-7f2d4a4f45e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        ],
        reviews: 35
    },
    8: {
        name: "Handmade Soap Collection",
        price: "৳1,499",
        description: "Set of 6 artisan soaps made with natural ingredients and essential oils. Each soap has a unique fragrance and design. Includes lavender, citrus, mint, oatmeal, charcoal, and honey variants. Packaged in eco-friendly gift box.",
        images: [
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1518893880019-7f2d4a4f45e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        ],
        reviews: 47
    }
};
// Cart functionality
let cart = [];

// Show product details in modal
function showProductDetails(productId) {
    const product = products[productId];
    if (!product) return;

    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductPrice').textContent = product.price;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalReviewCount').textContent = `(${product.reviews} reviews)`;
    document.getElementById('quantity').textContent = '1';

    // Set main image
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    // Update add to cart button data
    const addToCartBtn = document.getElementById('modalAddToCart');
    addToCartBtn.setAttribute('data-id', productId);
    addToCartBtn.setAttribute('data-name', product.name);
    addToCartBtn.setAttribute('data-price', product.price.replace('৳', '').replace(',', ''));
    addToCartBtn.setAttribute('data-image', product.images[0]);

    // Show modal
    document.getElementById('productModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Change main image when thumbnail is clicked
function changeMainImage(imgElement) {
    document.getElementById('modalMainImage').src = imgElement.src;
}

// Quantity controls
function incrementQuantity() {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

function decrementQuantity() {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
}

// Add to cart function (for both modal and product cards)
function addToCart(event) {
    const button = event.target.closest('.add-to-cart') || event.target;
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    const image = button.getAttribute('data-image');
    const quantity = parseInt(document.getElementById('quantity'))?.textContent || 1;

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity
        });
    }

    // Update cart count in UI
    updateCartCount();

    // Show confirmation
    alert(`${quantity} ${name} added to cart!`);

    // Close modal if adding from modal
    if (event.target.id === 'modalAddToCart') {
        closeModal();
    }
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Modal add to cart button
    document.getElementById('modalAddToCart')?.addEventListener('click', addToCart);

    // Close modal when clicking outside
    document.getElementById('productModal')?.addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
});
