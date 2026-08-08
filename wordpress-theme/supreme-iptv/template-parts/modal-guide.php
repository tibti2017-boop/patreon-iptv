<?php
/**
 * Modal: Device Installation Guide
 *
 * @package Seller_IPTV
 */
?>

<div id="modal-guide" class="modal-backdrop">
    <div class="modal-content relative p-6 sm:p-8 max-w-2xl">
        
        <button type="button" onclick="closeGuideModal()" class="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="mb-6">
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded" id="guide-modal-category">AMAZON FIRESTICK</span>
            <h3 class="text-2xl font-black text-white mt-2" id="guide-modal-title">Guide d'Installation Firestick</h3>
            <p class="text-xs text-zinc-400 font-medium">Suivez ces étapes simples pour configurer votre abonnement IPTV en moins de 3 minutes.</p>
        </div>

        <div class="space-y-4 mb-8" id="guide-modal-steps">
            <!-- Steps populated dynamically via theme.js -->
        </div>

        <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
            <div class="text-xs">
                <span class="text-zinc-400 font-bold block">Besoin d'aide supplémentaire ?</span>
                <span class="text-zinc-500">Notre support technique est disponible sur WhatsApp 24/7.</span>
            </div>
            <button type="button" onclick="openTrialModal(); closeGuideModal();" class="px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-black text-xs uppercase cursor-pointer">
                SUPPORT 24/7
            </button>
        </div>

    </div>
</div>
