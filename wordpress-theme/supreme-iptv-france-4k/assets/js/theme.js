/**
 * Seller IPTV 4K - Native Theme JS
 * Zero external dependencies. Vanilla JS.
 */

// Initialize icons on DOM load
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Mobile Menu Toggle
    var menuBtn = document.getElementById('mobile-menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                var targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
        });
    });
});

// Device guides dataset
var deviceGuidesData = {
    'firestick': {
        name: 'Firestick / Fire TV',
        category: 'AMAZON TV',
        steps: [
            '1. Téléchargez l\'application Downloader depuis l\'Amazon App Store.',
            '2. Ouvrez Downloader et saisissez le code d\'installation rapide fourni par notre équipe.',
            '3. Installez l\'application IPTV Smarters Pro ou Tivimate.',
            '4. Saisissez vos identifiants (Nom d\'utilisateur, Mot de passe, URL) reçus par email.'
        ]
    },
    'android-tv': {
        name: 'Android TV / Box / Mobile',
        category: 'BOX / MOBILE',
        steps: [
            '1. Allez dans le Google Play Store de votre appareil.',
            '2. Recherchez et installez "Tivimate IPTV Player" ou "IPTV Smarters Pro".',
            '3. Sélectionnez "Connexion avec l\'API Xtream Codes".',
            '4. Entrez vos codes d\'accès Seller IPTV.'
        ]
    },
    'apple-ios': {
        name: 'Apple iOS / Apple TV',
        category: 'IPHONE / IPAD / APPLE TV',
        steps: [
            '1. Ouvrez l\'App Store sur iPhone, iPad ou Apple TV.',
            '2. Recherchez "Smarters Player Lite" ou "IBO Player Pro".',
            '3. Installez l\'application et autorisez les accès réseau.',
            '4. Renseignez vos identifiants M3U / Xtream.'
        ]
    },
    'smart-tv': {
        name: 'Smart TV (Samsung / LG)',
        category: 'SAMSUNG / LG / SONY',
        steps: [
            '1. Recherchez "IBO Player" ou "Smart IPTV" dans le Store de votre téléviseur.',
            '2. Notez l\'adresse MAC affichée à l\'écran.',
            '3. Transmettez votre adresse MAC à notre support WhatsApp.',
            '4. Redémarrez l\'application pour profiter de toutes vos chaînes en 4K.'
        ]
    }
};

// Global State
var currentScreens = 1;
var orderModalScreens = 1;

/**
 * Pricing Multi-Screen Switcher
 */
function setPricingScreens(screens) {
    currentScreens = screens;
    
    // Update button active state
    var buttons = document.querySelectorAll('.screen-btn');
    buttons.forEach(function(btn) {
        var s = parseInt(btn.getAttribute('data-screen'), 10);
        if (s === screens) {
            btn.className = 'screen-btn px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30';
        } else {
            btn.className = 'screen-btn px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700';
        }
    });

    // Recalculate each plan card price display
    var cards = document.querySelectorAll('.pricing-card');
    cards.forEach(function(card) {
        var baseTotalPrice = parseFloat(card.getAttribute('data-base-price'));
        var planId = card.getAttribute('data-plan-id');
        
        var multiplier = 1 + (screens - 1) * 0.65; // Discounted extra screens multiplier
        var adjustedTotalPrice = (baseTotalPrice * multiplier).toFixed(2);
        
        var months = 1;
        if (planId === '3-months') months = 3;
        if (planId === '6-months') months = 6;
        if (planId === '12-months') months = 12;
        if (planId === '24-months') months = 24;

        var pricePerMonth = (adjustedTotalPrice / months).toFixed(2);

        var priceDisplay = card.querySelector('.plan-price-display');
        var totalDisplay = card.querySelector('.plan-total-display');

        if (priceDisplay) priceDisplay.innerHTML = pricePerMonth + '$';
        if (totalDisplay) {
            var label = 'Total: ' + adjustedTotalPrice + '$';
            if (screens > 1) {
                label += ' <span class="text-zinc-400 text-[10px]">(' + screens + ' écrans)</span>';
            }
            totalDisplay.innerHTML = label;
        }
    });
}

/**
 * Order Modal Controls
 */
function openOrderModal(planId, screens) {
    var modal = document.getElementById('modal-order');
    if (modal) {
        modal.classList.add('active');
    }
    
    if (planId) {
        var planSelect = document.getElementById('order-plan-select');
        if (planSelect) {
            planSelect.value = planId;
        }
    }
    
    setOrderModalScreens(screens || currentScreens || 1);
}

function closeOrderModal() {
    var modal = document.getElementById('modal-order');
    if (modal) {
        modal.classList.remove('active');
    }
}

function setOrderModalScreens(s) {
    orderModalScreens = s;
    var modalBtns = document.querySelectorAll('.modal-screen-btn');
    modalBtns.forEach(function(btn) {
        var ms = parseInt(btn.getAttribute('data-modal-screen'), 10);
        if (ms === s) {
            btn.className = 'modal-screen-btn py-2.5 rounded-xl font-black text-center cursor-pointer bg-cyan-500 text-zinc-950';
        } else {
            btn.className = 'modal-screen-btn py-2.5 rounded-xl font-black text-center cursor-pointer bg-zinc-900 text-zinc-300 border border-zinc-800';
        }
    });
    recalculateOrderTotal();
}

function recalculateOrderTotal() {
    var select = document.getElementById('order-plan-select');
    var priceEl = document.getElementById('modal-order-total-price');
    if (!select || !priceEl) return;

    var selectedOption = select.options[select.selectedIndex];
    var basePrice = parseFloat(selectedOption.getAttribute('data-price') || '39.99');
    
    var multiplier = 1 + (orderModalScreens - 1) * 0.65;
    var total = (basePrice * multiplier).toFixed(2);

    priceEl.innerHTML = total + '$';
}

function handleOrderSubmit(e) {
    e.preventDefault();
    var name = document.getElementById('order-name').value;
    var email = document.getElementById('order-email').value;
    var device = document.getElementById('order-device').value;
    var payment = document.getElementById('order-payment').value;
    var select = document.getElementById('order-plan-select');
    var planText = select.options[select.selectedIndex].text;
    var total = document.getElementById('modal-order-total-price').innerText;

    var waNum = (typeof sellerIPTVData !== 'undefined' && sellerIPTVData.whatsapp) ? sellerIPTVData.whatsapp : '+33700000000';
    var cleanNum = waNum.replace(/[^0-9+]/g, '');

    var msg = "Bonjour, je souhaite commander l'abonnement Seller IPTV :\n\n" +
              "- Formule : " + planText + "\n" +
              "- Écrans : " + orderModalScreens + "\n" +
              "- Appareil : " + device + "\n" +
              "- Nom : " + name + "\n" +
              "- Email : " + email + "\n" +
              "- Paiement : " + payment + "\n" +
              "- Montant Total : " + total;

    var url = "https://wa.me/" + cleanNum + "?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
    closeOrderModal();
}

/**
 * Trial Modal Controls
 */
function openTrialModal() {
    var modal = document.getElementById('modal-trial');
    if (modal) modal.classList.add('active');
}

function closeTrialModal() {
    var modal = document.getElementById('modal-trial');
    if (modal) modal.classList.remove('active');
}

function handleTrialSubmit(e) {
    e.preventDefault();
    var name = document.getElementById('trial-name').value;
    var phone = document.getElementById('trial-whatsapp').value;
    var device = document.getElementById('trial-device').value;

    var waNum = (typeof sellerIPTVData !== 'undefined' && sellerIPTVData.whatsapp) ? sellerIPTVData.whatsapp : '+33700000000';
    var cleanNum = waNum.replace(/[^0-9+]/g, '');

    var msg = "Bonjour, je souhaite demander un TEST GRATUIT 24H Seller IPTV :\n\n" +
              "- Nom : " + name + "\n" +
              "- Appareil : " + device + "\n" +
              "- WhatsApp : " + phone;

    var url = "https://wa.me/" + cleanNum + "?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
    closeTrialModal();
}

/**
 * Catalogue Modal Controls
 */
function openCatalogueModal() {
    var modal = document.getElementById('modal-catalogue');
    if (modal) modal.classList.add('active');
}

function closeCatalogueModal() {
    var modal = document.getElementById('modal-catalogue');
    if (modal) modal.classList.remove('active');
}

function filterCatalogueChannels() {
    var query = document.getElementById('catalogue-search-input').value.toLowerCase().trim();
    var cards = document.querySelectorAll('.channel-card');
    cards.forEach(function(card) {
        var name = card.getAttribute('data-channel-name');
        if (!query || name.indexOf(query) !== -1) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterCatalogueCategory(cat) {
    var btns = document.querySelectorAll('.cat-tab-btn');
    btns.forEach(function(btn) {
        if (btn.getAttribute('data-cat') === cat) {
            btn.className = 'cat-tab-btn px-3.5 py-1.5 rounded-lg bg-cyan-500 text-zinc-950 whitespace-nowrap cursor-pointer';
        } else {
            btn.className = 'cat-tab-btn px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 whitespace-nowrap cursor-pointer';
        }
    });

    var cards = document.querySelectorAll('.channel-card');
    cards.forEach(function(card) {
        var cCat = card.getAttribute('data-channel-cat');
        if (cat === 'all' || cCat === cat) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Guide Modal Controls
 */
function openGuideModal(guideId) {
    var guide = deviceGuidesData[guideId] || deviceGuidesData['firestick'];
    
    var titleEl = document.getElementById('guide-modal-title');
    var catEl = document.getElementById('guide-modal-category');
    var stepsEl = document.getElementById('guide-modal-steps');

    if (titleEl) titleEl.innerText = "Guide d'Installation " + guide.name;
    if (catEl) catEl.innerText = guide.category;

    if (stepsEl) {
        var html = '';
        guide.steps.forEach(function(s) {
            html += '<div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200">' + s + '</div>';
        });
        stepsEl.innerHTML = html;
    }

    var modal = document.getElementById('modal-guide');
    if (modal) modal.classList.add('active');
}

function closeGuideModal() {
    var modal = document.getElementById('modal-guide');
    if (modal) modal.classList.remove('active');
}

/**
 * FAQ Accordion Toggle
 */
function toggleFaq(index) {
    var content = document.querySelector('.faq-content-' + index);
    var icon = document.querySelector('.faq-icon-' + index);

    if (content) {
        var isHidden = content.classList.contains('hidden');
        if (isHidden) {
            content.classList.remove('hidden');
            if (icon) icon.classList.add('rotate-180');
        } else {
            content.classList.add('hidden');
            if (icon) icon.classList.remove('rotate-180');
        }
    }
}
