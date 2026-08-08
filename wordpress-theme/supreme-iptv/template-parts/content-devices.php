<?php
/**
 * Template Part: Compatible Devices Section
 *
 * @package Seller_IPTV
 */
$devices = seller_iptv_get_device_guides();
?>

<section id="devices" class="py-20 bg-zinc-900/40 border-y border-zinc-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                INSTALLATION RAPIDE EN 3 MINUTES
            </span>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
                Compatible Avec <span class="text-cyan-400">Tous Vos Appareils</span>
            </h2>
            <p class="text-zinc-400 text-sm sm:text-base font-medium">
                Regardez vos chaînes préférées où que vous soyez. Cliquez sur votre appareil pour consulter le guide de configuration pas-à-pas.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($devices as $d): ?>
                <div class="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all group flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                                <?php echo esc_html($d['category']); ?>
                            </span>
                            <i data-lucide="tv" class="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            <?php echo esc_html($d['name']); ?>
                        </h3>
                        <p class="text-xs text-zinc-400 font-medium mb-4">
                            App recommandée : <span class="text-zinc-200 font-bold"><?php echo esc_html($d['recommendedApp']); ?></span>
                        </p>
                    </div>

                    <button type="button" onclick="openGuideModal('<?php echo esc_attr($d['id']); ?>')" class="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <span>GUIDE D'INSTALLATION PAS À PAS</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-cyan-400"></i>
                    </button>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
