const cartCount = document.getElementById('cart-count');
const itemTotal = document.getElementById('item-total');
const subtotalEl = document.getElementById('subtotal');
const shippingEl = document.getElementById('shipping');
const discountEl = document.getElementById('discount');
const totalEl = document.getElementById('total');

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
};

const getRowQuantity = (row) => {
  return Number(row.querySelector('.qty-value')?.textContent || 1);
};

const recalcCart = () => {
  const rows = document.querySelectorAll('.cart-item-row');
  let totalItems = 0;
  let subtotal = 0;

  rows.forEach((row) => {
    const price = Number(row.dataset.price || 0);
    const quantity = getRowQuantity(row);
    totalItems += quantity;
    subtotal += price * quantity;
  });

  const shipping = totalItems > 0 ? 25000 : 0;
  const discount = subtotal > 500000 ? 25000 : 0;
  const total = subtotal + shipping - discount;

  if (cartCount) {
    cartCount.textContent = String(totalItems);
  }

  if (itemTotal) {
    itemTotal.textContent = `${totalItems} item${totalItems > 1 ? '' : ''}`;
  }

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (shippingEl) shippingEl.textContent = formatCurrency(shipping);
  if (discountEl) discountEl.textContent = `-${formatCurrency(discount)}`;
  if (totalEl) totalEl.textContent = formatCurrency(total);
};

document.querySelectorAll('.qty-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.closest('.cart-item-row');
    const quantityEl = row.querySelector('.qty-value');
    let currentQty = Number(quantityEl.textContent);

    if (button.classList.contains('plus')) {
      currentQty += 1;
    }

    if (button.classList.contains('minus') && currentQty > 1) {
      currentQty -= 1;
    }

    quantityEl.textContent = currentQty;

    const price = Number(row.dataset.price || 0);
    const priceEl = row.querySelector('.item-price');
    priceEl.textContent = formatCurrency(price * currentQty);

    recalcCart();
  });
});

recalcCart();
