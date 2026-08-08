<?php
/**
 * Modal: Order Subscription
 *
 * @package Seller_IPTV
 */
$whatsapp = get_theme_mod('seller_iptv_whatsapp', '+33700000000');
?>

<div id="modal-order" class="modal-backdrop">
    <div class="modal-content relative p-6 sm:p-8">
        
        <!-- Close Button -->
        <button type="button" onclick="closeOrderModal()" class="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="mb-6">
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">COMMANDE EN DIRECT</span>
            <h3 class="text-2xl font-black text-white mt-2">Abonnement Seller IPTV 4K</h3>
            <p class="text-xs text-zinc-400 font-medium">L'accès est activé immédiatement par notre équipe après votre validation.</p>
        </div>

        <form id="order-form" onsubmit="handleOrderSubmit(event)" class="space-y-4 text-xs">
            
            <!-- Plan Choice -->
            <div>
                <label class="block font-bold text-zinc-300 uppercase tracking-wider mb-1.5">1. Durée de l'Abonnement</label>
                <select id="order-plan-select" onchange="recalculateOrderTotal()" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white font-bold focus:border-cyan-500 outline-none">
                    <option value="1-month" data-price="10.99">1 Mois Essentiel - 10,99$</option>
                    <option value="3-months" data-price="25.99">3 Mois Confort - 25,99$ (-45%)</option>
                    <option value="6-months" data-price="39.99" selected>6 Mois Privilège - 39,99$ (-58% POPULAIRE)</option>
                    <option value="12-months" data-price="49.99">12 Mois Prestige - 49,99$ (-68%)</option>
                    <option value="24-months" data-price="89.99">24 Mois Suprême - 89,99$ (-80%)</option>
                </select>
            </div>

            <!-- Screens Choice -->
            <div>
                <label class="block font-bold text-zinc-300 uppercase tracking-wider mb-1.5">2. Nombre d'Écrans Simultanés</label>
                <div class="grid grid-cols-5 gap-2" id="modal-screens-selector">
                    <?php for ($s = 1; $s <= 5; $s++): ?>
                        <button type="button" onclick="setOrderModalScreens(<?php echo $s; ?>)" data-modal-screen="<?php echo $s; ?>" class="modal-screen-btn py-2.5 rounded-xl font-black text-center cursor-pointer <?php echo $s === 1 ? 'bg-cyan-500 text-zinc-950' : 'bg-zinc-900 text-zinc-300 border border-zinc-800'; ?>">
                            <?php echo $s; ?> <?php echo $s === 1 ? 'Écran' : 'Écrans'; ?>
                        </button>
                    <?php endfor; ?>
                </div>
            </div>

            <!-- Customer Details -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                    <label class="block font-bold text-zinc-400 mb-1">Nom & Prénom *</label>
                    <input type="text" id="order-name" required placeholder="Ex: Jean Dupont" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:border-cyan-500 outline-none">
                </div>
                <div>
                    <label class="block font-bold text-zinc-400 mb-1">Email pour réception *</label>
                    <input type="email" id="order-email" required placeholder="votre@email.com" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:border-cyan-500 outline-none">
                </div>
            </div>

            <!-- Device Type -->
            <div>
                <label class="block font-bold text-zinc-400 mb-1">Votre Appareil Principal</label>
                <select id="order-device" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:border-cyan-500 outline-none">
                    <option value="Firestick">Amazon Firestick / Fire TV</option>
                    <option value="Smart TV">Smart TV Samsung / LG / Sony</option>
                    <option value="Android TV">Android TV / Box Android / Smartphone</option>
                    <option value="Apple">Apple TV / iPhone / iPad</option>
                    <option value="PC/Mac">PC Windows / Mac</option>
                    <option value="MAG/Formuler">MAG / Formuler / Décodeur Stalker</option>
                </select>
            </div>

            <!-- Payment Method Choice -->
            <div>
                <label class="block font-bold text-zinc-400 mb-1">Moyen de Paiement Souhaité</label>
                <select id="order-payment" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:border-cyan-500 outline-none">
                    <option value="CB">Carte Bancaire Sécurisée (Visa / Mastercard)</option>
                    <option value="PayPal">PayPal</option>
                    <option value="WhatsApp Direct">Paiement Accompagné via WhatsApp</option>
                    <option value="Crypto">Cryptomonnaie (Bitcoin / USDT)</option>
                </select>
            </div>

            <!-- Total Price Highlight -->
            <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between my-4">
                <div>
                    <span class="text-[11px] text-zinc-400 font-bold block uppercase">MONTANT TOTAL</span>
                    <span class="text-xs text-emerald-400 font-semibold">Inclus activation & support 24/7</span>
                </div>
                <div class="text-2xl font-black text-cyan-400" id="modal-order-total-price">
                    39,99$
                </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:scale-[1.02] transition-all cursor-pointer">
                VALIDER ET RECEVOIR MES ACCÈS &rarr;
            </button>
        </form>

    </div>
</div>
