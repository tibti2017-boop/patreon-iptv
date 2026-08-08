<?php
/**
 * Template Part: Guarantee Section
 *
 * @package Seller_IPTV
 */
?>

<section class="py-16 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-t border-zinc-800 relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div class="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-xl shadow-cyan-500/10">
            <i data-lucide="shield-check" class="w-8 h-8"></i>
        </div>

        <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Garantie Satisfait ou Remboursé Intégrale de <span class="text-cyan-400">7 Jours</span>
        </h2>

        <p class="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            Testez Seller IPTV en toute tranquillité. Si notre service ne vous apporte pas une entière satisfaction durant vos 7 premiers jours, nous vous remboursons à 100% sans aucune condition.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button type="button" onclick="openOrderModal()" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all cursor-pointer">
                SOUSCRIRE EN TOUTE SÉCURITÉ
            </button>
            <button type="button" onclick="openTrialModal()" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer">
                DEMANDER UN TEST 24H
            </button>
        </div>

    </div>
</section>
