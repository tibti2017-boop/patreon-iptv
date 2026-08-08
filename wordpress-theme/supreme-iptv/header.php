<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-cyan-500 selection:text-zinc-950'); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">

    <!-- Header Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            
            <!-- Brand Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2.5 cursor-pointer group">
                <?php if (has_custom_logo()): ?>
                    <?php the_custom_logo(); ?>
                <?php else: ?>
                    <div class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all">
                        <div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                            <i data-lucide="tv" class="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-base font-black tracking-tight text-white leading-none">
                            SELLER <span class="text-cyan-400 font-extrabold">IPTV</span>
                        </span>
                        <span class="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                            FRANCE 4K ULTRA
                        </span>
                    </div>
                <?php endif; ?>
            </a>

            <!-- Desktop Nav Menu -->
            <nav class="hidden lg:flex items-center gap-7">
                <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => 'flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-zinc-300',
                        'fallback_cb'    => false,
                    ));
                } else {
                    ?>
                    <a href="#sports" class="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors">SPORT</a>
                    <a href="#vod" class="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors">FILMS & SÉRIES</a>
                    <button type="button" onclick="openCatalogueModal()" class="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer">
                        CHAÎNES <span class="bg-cyan-500/20 text-cyan-400 text-[9px] px-1.5 py-0.5 rounded font-extrabold border border-cyan-500/30">25K+</span>
                    </button>
                    <a href="#pricing" class="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors">TARIFS</a>
                    <a href="#faq" class="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors">FAQ</a>
                    <a href="#devices" class="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors">SUPPORT</a>
                    <?php
                }
                ?>
            </nav>

            <!-- Actions CTA Buttons -->
            <div class="hidden sm:flex items-center gap-3">
                <button type="button" onclick="openTrialModal()" class="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    TEST 24H
                </button>
                <button type="button" onclick="openOrderModal()" class="relative group overflow-hidden rounded-lg p-[1px] font-bold text-xs cursor-pointer">
                    <span class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-lg group-hover:opacity-90 transition-opacity"></span>
                    <span class="relative block px-5 py-2.5 rounded-[7px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold tracking-wider uppercase transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                        OBTENIR L'ACCÈS
                    </span>
                </button>
            </div>

            <!-- Mobile Hamburger Toggle -->
            <button type="button" id="mobile-menu-toggle" aria-label="Toggle Menu" class="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>

        <!-- Mobile Navigation Slide-Down Panel -->
        <div id="mobile-menu" class="hidden lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
            <a href="#sports" class="block py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50">SPORT EN DIRECT</a>
            <a href="#vod" class="block py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50">FILMS & SÉRIES 4K</a>
            <button type="button" onclick="openCatalogueModal()" class="w-full text-left py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50 flex items-center justify-between">
                <span>LISTE DES CHAÎNES</span>
                <span class="bg-cyan-500 text-zinc-950 text-xs px-2 py-0.5 rounded font-extrabold">+25 000</span>
            </button>
            <a href="#pricing" class="block py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50">NOS TARIFS & FORFAITS</a>
            <a href="#devices" class="block py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50">GUIDES D'INSTALLATION</a>
            <a href="#faq" class="block py-2 text-sm font-bold text-zinc-200 hover:text-cyan-400 border-b border-zinc-800/50">FOIRE AUX QUESTIONS (FAQ)</a>
            <div class="pt-2 grid grid-cols-2 gap-2">
                <button type="button" onclick="openTrialModal()" class="py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 font-bold text-xs uppercase">TEST 24H</button>
                <button type="button" onclick="openOrderModal()" class="py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xs uppercase">ABONNEMENT</button>
            </div>
        </div>
    </header>
