<?php
/**
 * Template Part: Live Channels Banner Ticker
 *
 * @package Seller_IPTV
 */
$channels = array(
    array('name' => 'Canal+ France 4K', 'logo' => 'CANAL+'),
    array('name' => 'beIN SPORTS 1-10', 'logo' => 'beIN SPORTS'),
    array('name' => 'RMC Sport 1-4 4K', 'logo' => 'RMC SPORT'),
    array('name' => 'DAZN Ligue 1 4K', 'logo' => 'DAZN'),
    array('name' => 'Eurosport 1 & 2', 'logo' => 'EUROSPORT'),
    array('name' => 'TF1 4K / France TV', 'logo' => 'TF1 4K'),
    array('name' => 'HBO Max Cinema 4K', 'logo' => 'HBO MAX'),
    array('name' => 'Sky Sports Main Event', 'logo' => 'SKY SPORTS'),
    array('name' => 'Netflix Movies Live', 'logo' => 'NETFLIX'),
    array('name' => 'Disney+ Kids Live', 'logo' => 'DISNEY+'),
);
?>

<div class="py-6 bg-zinc-900/90 border-y border-zinc-800/80 overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
        <span class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            CHAÎNES POPULAIRES EN DIRECT EN QUALITÉ 4K
        </span>
        <button type="button" onclick="openCatalogueModal()" class="text-cyan-400 hover:underline cursor-pointer">
            VOIR LES 25 000+ CHAÎNES &rarr;
        </button>
    </div>

    <!-- Ticker Row -->
    <div class="flex overflow-hidden select-none">
        <div class="animate-ticker flex items-center gap-8 pr-8">
            <?php foreach (array_merge($channels, $channels) as $c): ?>
                <div class="flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs font-black text-white whitespace-nowrap shadow-sm hover:border-cyan-500/50 transition-colors">
                    <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-extrabold text-[10px]">4K</span>
                    <span><?php echo esc_html($c['name']); ?></span>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
