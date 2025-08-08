// Cart functionality
let cart = [];
const deliveryFee = 60;

// DOM Elements
const cartButton = document.getElementById('cart-button');
const closeCartButton = document.getElementById('close-cart');
const cartPanel = document.getElementById('cart-panel');
const cartItemsContainer = document.getElementById('cart-items');
const emptyCartMessage = document.getElementById('empty-cart-message');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDelivery = document.getElementById('cart-delivery');
const cartDiscount = document.getElementById('cart-discount');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Checkout Modal Elements
const checkoutModal = document.getElementById('checkout-modal');
const closeModalButton = document.getElementById('close-modal');
const checkoutForm = document.getElementById('checkout-form');
const checkoutSubtotal = document.getElementById('checkout-subtotal');
const checkoutDelivery = document.getElementById('checkout-delivery');
const checkoutDiscount = document.getElementById('checkout-discount');
const checkoutTotal = document.getElementById('checkout-total');

// Confirmation Modal Elements
const confirmationModal = document.getElementById('confirmation-modal');
const closeConfirmationButton = document.getElementById('close-confirmation');
const orderId = document.getElementById('order-id');
const orderTotal = document.getElementById('order-total');

// Toggle Cart Panel
cartButton.addEventListener('click', () => {
    cartPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
});

closeCartButton.addEventListener('click', () => {
    cartPanel.classList.remove('open');
    document.body.style.overflow = '';
});

// Toggle Checkout Modal
checkoutButton.addEventListener('click', () => {
    cartPanel.classList.remove('open');
    checkoutModal.classList.add('open');
    updateCheckoutSummary();
});

closeModalButton.addEventListener('click', () => {
    checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
});

// Toggle Confirmation Modal
closeConfirmationButton.addEventListener('click', () => {
    confirmationModal.classList.remove('open');
    document.body.style.overflow = '';
});

// Add to Cart Functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-name');
        const productPrice = parseInt(button.getAttribute('data-price'));
        const productImage = button.getAttribute('data-image');

        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }

        updateCart();
        cartPanel.classList.add('open');

        // Show added to cart animation
        button.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-cart-plus"></i>';
        }, 1000);
    });
});

// Update Cart Function
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Enable/disable checkout button
    checkoutButton.disabled = totalItems === 0;

    // Update cart items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'flex items-center py-4 border-b border-gray-200';
            cartItem.innerHTML = `
                        <div class="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-medium text-dark">${item.name}</h4>
                            <p class="text-primary font-bold">৳${item.price.toLocaleString()}</p>
                        </div>
                        <div class="flex items-center">
                            <button class="decrease-quantity w-8 h-8 rounded-full border text-gray-500 hover:bg-gray-100" data-id="${item.id}">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="increase-quantity w-8 h-8 rounded-full border text-gray-500 hover:bg-gray-100" data-id="${item.id}">+</button>
                            <button class="remove-item ml-4 text-red-500 hover:text-red-700" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                const item = cart.find(item => item.id === productId);

                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(item => item.id !== productId);
                }

                updateCart();
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                const item = cart.find(item => item.id === productId);
                item.quantity += 1;
                updateCart();
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                cart = cart.filter(item => item.id !== productId);
                updateCart();
            });
        });
    }

    // Update cart summary
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = 0; // You can implement discount logic here
    const total = subtotal + deliveryFee - discount;

    cartSubtotal.textContent = `৳${subtotal.toLocaleString()}`;
    cartDelivery.textContent = `৳${deliveryFee.toLocaleString()}`;
    cartDiscount.textContent = `-৳${discount.toLocaleString()}`;
    cartTotal.textContent = `৳${total.toLocaleString()}`;
}

// Update Checkout Summary
function updateCheckoutSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = 0; // You can implement discount logic here
    const total = subtotal + deliveryFee - discount;

    checkoutSubtotal.textContent = `৳${subtotal.toLocaleString()}`;
    checkoutDelivery.textContent = `৳${deliveryFee.toLocaleString()}`;
    checkoutDiscount.textContent = `-৳${discount.toLocaleString()}`;
    checkoutTotal.textContent = `৳${total.toLocaleString()}`;
}

// Handle Checkout Form Submission
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // In a real app, you would send this data to your backend
    const formData = new FormData(checkoutForm);
    const paymentMethod = formData.get('payment');

    // Generate random order ID
    const randomOrderId = `GH-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // Calculate
    // Calculate total for order confirmation
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal + deliveryFee;

    // Update confirmation modal
    orderId.textContent = randomOrderId;
    orderTotal.textContent = `৳${total.toLocaleString()}`;

    // Close checkout modal and show confirmation
    checkoutModal.classList.remove('open');
    confirmationModal.classList.add('open');

    // Clear the cart after successful order
    cart = [];
    updateCart();

    // In a real app, you would send the order data to your backend here
    console.log('Order placed:', {
        orderId: randomOrderId,
        customer: {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        },
        paymentMethod: paymentMethod,
        items: cart,
        subtotal: subtotal,
        delivery: deliveryFee,
        total: total
    });
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close cart panel when clicking outside
document.addEventListener('click', (e) => {
    if (!cartPanel.contains(e.target) && !cartButton.contains(e.target) && cartPanel.classList.contains('open')) {
        cartPanel.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    if (checkoutModal.classList.contains('open') && !document.querySelector('#checkout-modal > div').contains(e.target) && !cartPanel.contains(e.target)) {
        checkoutModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (confirmationModal.classList.contains('open') && !document.querySelector('#confirmation-modal > div').contains(e.target)) {
        confirmationModal.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// Initialize cart
updateCart();