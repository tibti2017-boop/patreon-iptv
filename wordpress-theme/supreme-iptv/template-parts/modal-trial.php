<?php
/**
 * Modal: Test Gratuit 24H
 *
 * @package Seller_IPTV
 */
?>

<div id="modal-trial" class="modal-backdrop">
    <div class="modal-content relative p-6 sm:p-8">
        
        <button type="button" onclick="closeTrialModal()" class="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="mb-6">
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">ACCÈS DÉMO GRATUIT</span>
            <h3 class="text-2xl font-black text-white mt-2">Demande de Test IPTV 24H</h3>
            <p class="text-xs text-zinc-400 font-medium">Testez la stabilité de nos chaînes 4K gratuitement pendant 24 heures sans engagement.</p>
        </div>

        <form onsubmit="handleTrialSubmit(event)" class="space-y-4 text-xs">
            <div>
                <label class="block font-bold text-zinc-400 mb-1">Votre Nom / Prénom *</label>
                <input type="text" id="trial-name" required placeholder="Ex: Lucas Morel" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none">
            </div>

            <div>
                <label class="block font-bold text-zinc-400 mb-1">Numéro WhatsApp (avec indicatif +33) *</label>
                <input type="tel" id="trial-whatsapp" required placeholder="+33612345678" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none">
            </div>

            <div>
                <label class="block font-bold text-zinc-400 mb-1">Appareil pour le test</label>
                <select id="trial-device" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none">
                    <option value="Firestick">Amazon Firestick</option>
                    <option value="Smart TV">Smart TV Samsung / LG</option>
                    <option value="Android TV">Android TV / Smartphone</option>
                    <option value="Apple TV">Apple TV / iPhone</option>
                    <option value="MAG/Formuler">MAG / Formuler</option>
                </select>
            </div>

            <button type="submit" class="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/20">
                OBTENIR MON CODE DE TEST 24H &rarr;
            </button>
        </form>

    </div>
</div>
