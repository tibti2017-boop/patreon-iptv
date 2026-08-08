<?php
/**
 * Template Part: Features Advantages Grid
 *
 * @package Seller_IPTV
 */
$features = array(
    array('icon' => 'zap', 'title' => 'Technologie Anti-Freeze 99.9%', 'desc' => 'Serveurs dédiés à haute capacité pour éliminer les coupures pendant les grands matchs.'),
    array('icon' => 'tv-2', 'title' => 'Qualité 4K & Full HD Ultra', 'desc' => 'Profitez de la plus haute résolution possible avec un haut taux de rafraîchissement 60 FPS.'),
    array('icon' => 'smartphone', 'title' => 'Compatibilité Universelle', 'desc' => 'Fonctionne sur Firestick, Smart TV, Android, iPhone, Apple TV, PC, Mac et boîtiers MAG.'),
    array('icon' => 'list-video', 'title' => 'Guide des Programmes (EPG)', 'desc' => 'Accédez à la grille des programmes en direct avec résumés des émissions et horaires.'),
    array('icon' => 'headphones', 'title' => 'Support Client WhatsApp 24/7', 'desc' => 'Une équipe de techniciens francophones à votre disposition à tout moment pour vous assister.'),
    array('icon' => 'clock', 'title' => 'Livraison Instantanée en 3 min', 'desc' => 'Recevez vos accès (Xtream / M3U) immédiatement après validation de votre commande.')
);
?>

<section class="py-20 bg-zinc-950 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                LA DIFFÉRENCE SELLER IPTV
            </span>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
                Pourquoi Choisir Notre <span class="text-cyan-400">Service IPTV</span> ?
            </h2>
            <p class="text-zinc-400 text-sm sm:text-base font-medium">
                Nous investissons dans des infrastructures de streaming de pointe pour vous garantir le meilleur confort visuel du marché.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php foreach ($features as $f): ?>
                <div class="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-cyan-500/40 transition-all group">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="<?php echo esc_attr($f['icon']); ?>" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        <?php echo esc_html($f['title']); ?>
                    </h3>
                    <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                        <?php echo esc_html($f['desc']); ?>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
