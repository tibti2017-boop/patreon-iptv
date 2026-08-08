<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Seller_IPTV
 */

get_header();
?>

<div class="pt-40 pb-28 bg-zinc-950 min-h-screen flex items-center justify-center text-center px-4">
    <div class="max-w-lg mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full"></div>
        
        <div class="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            404
        </div>

        <h1 class="text-2xl font-extrabold text-white mb-3">Page Introuvable</h1>
        <p class="text-zinc-400 text-xs sm:text-sm mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all">
            <span>RETOURNER À L'ACCUEIL</span>
        </a>
    </div>
</div>

<?php
get_footer();
