<?php
/**
 * Template Part: Hero Section
 *
 * @package Seller_IPTV
 */
$hero_title = get_theme_mod('seller_iptv_hero_title', 'Le Meilleur Abonnement IPTV France en 4K');
$hero_subtitle = get_theme_mod('seller_iptv_hero_subtitle', '+25 000 chaînes en direct, +60 000 films et séries en HD/4K. Sport, cinéma et divertissement sur tous vos appareils, avec 99,9% de disponibilité et un support 24/7/24.');
?>

<section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-zinc-950">
    <!-- Background Glows & Subtle Pattern -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute top-10 right-10 w-96 h-96 bg-indigo-600/15 blur-[140px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <!-- Eyebrow Pill -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            ABONNEMENT IPTV 4K • EN DIRECT MAINTENANT
        </div>

        <!-- Main Headline -->
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
            <?php echo esc_html($hero_title); ?>
        </h1>

        <!-- Subtitle -->
        <p class="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-medium leading-relaxed mb-10">
            <?php echo esc_html($hero_subtitle); ?>
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button type="button" onclick="openOrderModal()" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group cursor-pointer">
                <span>OBTENIR MON ABONNEMENT IPTV</span>
                <i data-lucide="arrow-right" class="w-5 h-5 text-cyan-200 group-hover:translate-x-1 transition-transform"></i>
            </button>

            <button type="button" onclick="openTrialModal()" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer">
                <i data-lucide="play-circle" class="w-5 h-5 text-emerald-400"></i>
                <span>TEST GRATUIT 24H</span>
            </button>
        </div>

        <!-- 4 Metric Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-zinc-800/80">
            <div class="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
                <div class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                    10,99<span class="text-cyan-400">$</span>
                </div>
                <div class="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    DÈS / MOIS
                </div>
            </div>

            <div class="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
                <div class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                    25 000<span class="text-cyan-400">+</span>
                </div>
                <div class="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    CHAÎNES LIVE
                </div>
            </div>

            <div class="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
                <div class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                    99,9<span class="text-cyan-400">%</span>
                </div>
                <div class="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    DISPONIBILITÉ
                </div>
            </div>

            <div class="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center hover:border-cyan-500/40 transition-colors">
                <div class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1 text-cyan-400">
                    24/7
                </div>
                <div class="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    SUPPORT CLIENT
                </div>
            </div>
        </div>
    </div>
</section>
