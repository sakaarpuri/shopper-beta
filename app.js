// ShopperAgent MVP v2

const BETA_PASSWORD = 'shopper2026';

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const error = document.getElementById('gateError');
    
    if (input === BETA_PASSWORD) {
        document.getElementById('passwordGate').classList.add('hidden');
        document.getElementById('app').style.display = 'block';
        localStorage.setItem('sa_beta_access', 'true');
        initApp();
    } else {
        error.textContent = 'Incorrect password. Try again.';
    }
}

if (localStorage.getItem('sa_beta_access') === 'true') {
    document.getElementById('passwordGate').classList.add('hidden');
    document.getElementById('app').style.display = 'block';
}

if (document.getElementById('passwordInput')) {
    document.getElementById('passwordInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
}

// State
let quickShopPrefs = {
    gender: '',
    categories: [],
    sizes: {},
    styles: [],
    budget: 100
};

let userProfile = {
    gender: '',
    styles: [],
    budget: 100,
    sizes: {}
};

function initApp() {
    loadProfile();
    renderPreCarts();
}

function openQuickShop() {
    document.getElementById('quickShopModal').classList.add('active');
    quickShopPrefs = {gender: '', categories: [], sizes: {}, styles: [], budget: 100};
    document.querySelectorAll('#quickShopModal .gender-option').forEach(el => el.classList.remove('selected'));
    document.querySelectorAll('#quickShopModal .category-option').forEach(el => el.classList.remove('selected'));
    document.querySelectorAll('#quickShopModal .style-option').forEach(el => el.classList.remove('selected'));
    document.getElementById('sizeSection').style.display = 'none';
    document.getElementById('budgetSlider').value = 100;
    document.getElementById('budgetDisplay').textContent = '$100';
}

function closeQuickShop() {
    document.getElementById('quickShopModal').classList.remove('active');
}

function openProfileModal() {
    document.getElementById('profileModal').classList.add('active');
    if (userProfile.budget) {
        document.getElementById('profileBudgetSlider').value = userProfile.budget;
        document.getElementById('profileBudgetDisplay').textContent = '$' + userProfile.budget;
    }
    document.querySelectorAll('#profileModal .gender-option').forEach(el => {
        if (userProfile.gender === el.dataset.gender) el.classList.add('selected');
    });
    document.querySelectorAll('#profileModal .style-option').forEach(el => {
        if (userProfile.styles.includes(el.dataset.pstyle)) el.classList.add('selected');
    });
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

// GENDER - Simple toggle like categories
function toggleGender(el) {
    // Check which modal is open
    const inQuickShop = document.getElementById('quickShopModal').classList.contains('active');
    
    // Remove selected from all gender options
    document.querySelectorAll('.gender-option').forEach(btn => btn.classList.remove('selected'));
    
    // Add selected to clicked
    el.classList.add('selected');
    
    // Save to state
    if (inQuickShop) {
        quickShopPrefs.gender = el.dataset.gender;
    } else {
        userProfile.gender = el.dataset.gender;
    }
}

function toggleCategory(el) {
    el.classList.toggle('selected');
    const cat = el.dataset.cat;
    
    if (el.classList.contains('selected')) {
        if (!quickShopPrefs.categories.includes(cat)) quickShopPrefs.categories.push(cat);
    } else {
        quickShopPrefs.categories = quickShopPrefs.categories.filter(c => c !== cat);
    }
    
    if (quickShopPrefs.categories.length > 0 && !quickShopPrefs.categories.includes('all')) {
        showSizeOptions();
    } else if (quickShopPrefs.categories.includes('all')) {
        showAllSizeOptions();
    } else {
        document.getElementById('sizeSection').style.display = 'none';
    }
}

function showSizeOptions() {
    const section = document.getElementById('sizeSection');
    const grid = document.getElementById('sizeGrid');
    const label = document.getElementById('sizeLabel');
    
    section.style.display = 'block';
    grid.innerHTML = '';
    
    let sizes = [];
    let labelText = '';
    
    if (quickShopPrefs.categories.includes('tops') || quickShopPrefs.categories.includes('outerwear')) {
        sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        labelText = 'Select your shirt/jacket size';
    } else if (quickShopPrefs.categories.includes('bottoms')) {
        sizes = ['28', '30', '32', '34', '36', '38'];
        labelText = 'Select your waist size';
    } else if (quickShopPrefs.categories.includes('shoes')) {
        sizes = ['8', '9', '10', '11', '12', '13'];
        labelText = 'Select your shoe size';
    }
    
    label.textContent = labelText;
    
    sizes.forEach(size => {
        const btn = document.createElement('div');
        btn.className = 'size-option';
        btn.textContent = size;
        btn.onclick = () => selectSize(btn, size);
        grid.appendChild(btn);
    });
}

function showAllSizeOptions() {
    const section = document.getElementById('sizeSection');
    const grid = document.getElementById('sizeGrid');
    const label = document.getElementById('sizeLabel');
    
    section.style.display = 'block';
    grid.innerHTML = '';
    label.textContent = 'Select your general size';
    
    ['S', 'M', 'L', 'XL'].forEach(size => {
        const btn = document.createElement('div');
        btn.className = 'size-option';
        btn.textContent = size;
        btn.onclick = () => selectSize(btn, size);
        grid.appendChild(btn);
    });
}

function selectSize(el, size) {
    document.querySelectorAll('#sizeGrid .size-option').forEach(btn => btn.classList.remove('selected'));
    el.classList.add('selected');
    quickShopPrefs.sizes.general = size;
}

function toggleStyle(el) {
    el.classList.toggle('selected');
    const style = el.dataset.style;
    if (el.classList.contains('selected')) {
        if (!quickShopPrefs.styles.includes(style)) quickShopPrefs.styles.push(style);
    } else {
        quickShopPrefs.styles = quickShopPrefs.styles.filter(s => s !== style);
    }
}

function toggleProfileStyle(el) {
    el.classList.toggle('selected');
    const style = el.dataset.pstyle;
    if (el.classList.contains('selected')) {
        if (!userProfile.styles.includes(style)) userProfile.styles.push(style);
    } else {
        userProfile.styles = userProfile.styles.filter(s => s !== style);
    }
}

function updateBudget(value) {
    quickShopPrefs.budget = parseInt(value);
    document.getElementById('budgetDisplay').textContent = '$' + value;
}

function updateProfileBudget(value) {
    userProfile.budget = parseInt(value);
    document.getElementById('profileBudgetDisplay').textContent = '$' + value;
}

function shopForMe() {
    if (!quickShopPrefs.gender) {
        alert('Please select your gender');
        return;
    }
    if (quickShopPrefs.categories.length === 0) {
        alert('Please select at least one category');
        return;
    }
    if (quickShopPrefs.styles.length === 0) {
        alert('Please select at least one style');
        return;
    }
    
    closeQuickShop();
    
    document.getElementById('demoCart').style.display = 'none';
    document.getElementById('generatedCart').classList.remove('active');
    document.getElementById('generatedCart').innerHTML = '';
    document.getElementById('itemCount').textContent = '-';
    document.getElementById('storeCount').textContent = '-';
    document.getElementById('cartTotal').textContent = '$--';
    document.getElementById('cartAnimation').classList.add('active');
    
    runCartAnimation();
    
    setTimeout(() => {
        const matches = matchProductsForQuickShop();
        renderGeneratedCart(matches);
    }, 6000);
}

function runCartAnimation() {
    const steps = ['anim1', 'anim2', 'anim3', 'anim4'];
    let current = 0;
    
    function animate() {
        steps.forEach((id, i) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.remove('active', 'completed');
            if (i === current) el.classList.add('active');
            else if (i < current) el.classList.add('completed');
        });
        
        current++;
        if (current < steps.length) setTimeout(animate, 1500);
    }
    animate();
}

function matchProductsForQuickShop() {
    let pool = [...PRODUCTS];
    
    const selectedCats = quickShopPrefs.categories;
    if (!selectedCats.includes('all')) {
        pool = pool.filter(p => selectedCats.includes(p.category));
    }
    
    pool = pool.filter(p => p.price <= quickShopPrefs.budget * 1.5);
    
    const scored = pool.map(product => {
        let totalScore = 0;
        quickShopPrefs.styles.forEach(style => {
            totalScore += product.scores[style] || 50;
        });
        const avgScore = totalScore / quickShopPrefs.styles.length;
        return {...product, matchScore: Math.round(avgScore)};
    });
    
    return scored
        .filter(p => p.matchScore >= 60)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 4);
}

function renderGeneratedCart(products) {
    document.getElementById('cartAnimation').classList.remove('active');
    const container = document.getElementById('generatedCart');
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-secondary);">No items found. Try adjusting your filters.</div>';
        container.classList.add('active');
        document.getElementById('itemCount').textContent = '0';
        document.getElementById('storeCount').textContent = '0';
        document.getElementById('cartTotal').textContent = '$0';
        return;
    }
    
    let total = 0;
    const uniqueStores = new Set();
    
    products.forEach(product => {
        total += product.price;
        uniqueStores.add(product.retailer);
        
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-info">
                <div class="cart-item-brand">${product.brand}</div>
                <div class="cart-item-name">${product.name}</div>
                <div class="cart-item-match">${product.matchScore}% match</div>
            </div>
            <div style="text-align:right;">
                <div class="cart-item-price">$${product.price}</div>
            </div>
        `;
        container.appendChild(item);
        
        const btn = document.createElement('a');
        btn.className = 'cart-retailer-btn';
        btn.href = product.cartUrl;
        btn.target = '_blank';
        btn.textContent = `Add to Cart at ${product.retailer} →`;
        container.appendChild(btn);
    });
    
    document.getElementById('itemCount').textContent = products.length;
    document.getElementById('storeCount').textContent = uniqueStores.size;
    document.getElementById('cartTotal').textContent = '$' + total;
    
    container.classList.add('active');
}

function saveProfile() {
    userProfile.sizes = {
        tops: document.getElementById('savedSizeTops').value,
        bottoms: document.getElementById('savedSizeBottoms').value,
        shoes: document.getElementById('savedSizeShoes').value,
        outerwear: document.getElementById('savedSizeOuterwear').value
    };
    localStorage.setItem('sa_profile', JSON.stringify(userProfile));
    closeProfileModal();
    alert('Profile saved!');
}

function loadProfile() {
    const saved = localStorage.getItem('sa_profile');
    if (saved) userProfile = JSON.parse(saved);
}

function renderPreCarts() {
    const grid = document.getElementById('preCartsGrid');
    if (!grid) return;
    
    PRE_CURATED_CARTS.forEach(cart => {
        const card = document.createElement('div');
        card.className = 'curated-cart';
        card.onclick = () => loadPreCuratedCart(cart);
        
        const imagesHtml = cart.images.map((img, i) => 
            `<div class="cart-img" style="${i === 0 ? 'grid-column:span 2;grid-row:span 2' : ''}"><img src="${img}"></div>`
        ).join('');
        
        card.innerHTML = `
            <div class="cart-images">${imagesHtml}</div>
            <div class="cart-info">
                <div class="cart-name">${cart.name}</div>
                <div class="cart-desc">${cart.description}</div>
                <div class="cart-footer">
                    <span class="cart-items-count">${cart.items} items from ${cart.stores} stores</span>
                    <span class="cart-total-lg">$${cart.total}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function loadPreCuratedCart(cart) {
    const products = cart.productIds.map(id => {
        const product = PRODUCTS.find(p => p.id === id);
        return {...product, matchScore: 90};
    }).filter(Boolean);
    
    document.getElementById('demoCart').style.display = 'none';
    document.getElementById('cartAnimation').classList.remove('active');
    renderGeneratedCart(products);
    document.querySelector('.cart-window').scrollIntoView({behavior: 'smooth'});
}

['quickShopModal', 'profileModal'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            if (id === 'quickShopModal') closeQuickShop();
            else closeProfileModal();
        }
    });
});

function showComingSoon() {
    alert('Coming Soon!');
}
