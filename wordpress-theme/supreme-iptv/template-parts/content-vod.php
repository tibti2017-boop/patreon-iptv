<?php
/**
 * Template Part: VOD Showcase Section
 *
 * @package Seller_IPTV
 */
$vod_list = seller_iptv_get_vod();
?>

<section id="vod" class="py-20 bg-zinc-900/60 border-y border-zinc-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                    CINÉMA & SÉRIES À LA DEMANDE
                </span>
                <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
                    Plus de <span class="text-cyan-400">60 000 Films & Séries</span>
                </h2>
            </div>
            <button type="button" onclick="openCatalogueModal()" class="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer">
                <span>RECHERCHER DANS LE CATALOGUE</span>
                <i data-lucide="search" class="w-4 h-4 text-cyan-400"></i>
            </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            <?php foreach ($vod_list as $item): ?>
                <div class="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-cyan-500/60 transition-all duration-300 shadow-lg">
                    <div class="aspect-[2/3] w-full overflow-hidden relative">
                        <img src="<?php echo esc_url($item['poster']); ?>" alt="<?php echo esc_attr($item['title']); ?>" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
                        <div class="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur text-[10px] font-black text-cyan-400 border border-cyan-500/30">
                            <?php echo esc_html($item['quality']); ?>
                        </div>
                        <div class="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-amber-500/90 text-black text-[10px] font-black flex items-center gap-0.5">
                            <i data-lucide="star" class="w-2.5 h-2.5 fill-black"></i>
                            <?php echo esc_html($item['rating']); ?>
                        </div>
                    </div>
                    <div class="p-3">
                        <h4 class="text-xs sm:text-sm font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
                            <?php echo esc_html($item['title']); ?>
                        </h4>
                        <div class="flex items-center justify-between text-[10px] text-zinc-400 mt-1 font-medium">
                            <span><?php echo esc_html($item['genre']); ?></span>
                            <span><?php echo esc_html($item['year']); ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
