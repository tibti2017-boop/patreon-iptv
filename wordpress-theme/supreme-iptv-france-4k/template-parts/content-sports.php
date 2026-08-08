<?php
/**
 * Template Part: Sports Live Section
 *
 * @package Seller_IPTV
 */
$leagues = array(
    array('name' => 'Ligue 1 McDonald\'s', 'channels' => 'DAZN, beIN SPORTS, Canal+', 'badge' => 'DIRECT 4K', 'color' => 'from-blue-600 to-indigo-600'),
    array('name' => 'UEFA Champions League', 'channels' => 'Canal+, beIN SPORTS', 'badge' => 'EXCLUSIF', 'color' => 'from-cyan-500 to-blue-600'),
    array('name' => 'Premier League & Liga', 'channels' => 'Canal+ Foot, Sky Sports, DAZN', 'badge' => '4K ULTRA', 'color' => 'from-indigo-600 to-purple-600'),
    array('name' => 'Formule 1 & Moto GP', 'channels' => 'Canal+ Sport 360, RTBF', 'badge' => 'EN DIRECT', 'color' => 'from-red-600 to-rose-600'),
    array('name' => 'UFC & Sports de Combat', 'channels' => 'RMC Sport 1 & 2, PPV', 'badge' => 'COMPLET', 'color' => 'from-amber-600 to-orange-600'),
    array('name' => 'NBA & Tennis Roland Garros', 'channels' => 'beIN SPORTS, Eurosport', 'badge' => 'SANS BEUG', 'color' => 'from-emerald-600 to-teal-600'),
);
?>

<section id="sports" class="py-20 bg-zinc-950 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                SANS ENGAGEMENT & SANS INTERRUPTIONS
            </span>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
                Tous les Plus Grands <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Événements Sportifs</span>
            </h2>
            <p class="text-zinc-400 text-sm sm:text-base font-medium">
                Accédez à 100% des chaînes de sport françaises et internationales en qualité Ultra HD 4K avec fluidité garantie même aux heures de pointe.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($leagues as $l): ?>
                <div class="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 hover:border-cyan-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-gradient-to-r <?php echo esc_attr($l['color']); ?> text-white shadow-sm">
                                <?php echo esc_html($l['badge']); ?>
                            </span>
                            <i data-lucide="trophy" class="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            <?php echo esc_html($l['name']); ?>
                        </h3>
                        <p class="text-xs text-zinc-400 font-medium mb-6">
                            Diffusion sur : <span class="text-zinc-200 font-bold"><?php echo esc_html($l['channels']); ?></span>
                        </p>
                    </div>

                    <button type="button" onclick="openOrderModal()" class="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-cyan-500 hover:text-zinc-950 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <span>REGARDER EN 4K</span>
                        <i data-lucide="play" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
