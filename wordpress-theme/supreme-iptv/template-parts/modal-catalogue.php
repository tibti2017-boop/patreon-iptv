<?php
/**
 * Modal: Catalogue Search & Channel List
 *
 * @package Seller_IPTV
 */
$channels_list = array(
    array('name' => 'Canal+ France 4K', 'category' => 'french', 'is4k' => true),
    array('name' => 'beIN SPORTS 1-10 HD/4K', 'category' => 'sports', 'is4k' => true),
    array('name' => 'RMC Sport 1-4 4K', 'category' => 'sports', 'is4k' => true),
    array('name' => 'DAZN Ligue 1 4K', 'category' => 'sports', 'is4k' => true),
    array('name' => 'Eurosport 1 & 2 4K', 'category' => 'sports', 'is4k' => true),
    array('name' => 'TF1 / France 2-5 / M6 4K', 'category' => 'french', 'is4k' => true),
    array('name' => 'HBO Max Cinema 4K', 'category' => 'cinema', 'is4k' => true),
    array('name' => 'ESPN Ultra HD', 'category' => 'sports', 'is4k' => true),
    array('name' => 'Sky Sports Main Event 4K', 'category' => 'sports', 'is4k' => true),
    array('name' => 'Netflix Movies Live', 'category' => 'cinema', 'is4k' => true),
    array('name' => 'Disney+ Kids Live', 'category' => 'kids', 'is4k' => true),
    array('name' => 'BBC One & Two 4K', 'category' => 'international', 'is4k' => true),
);
?>

<div id="modal-catalogue" class="modal-backdrop">
    <div class="modal-content relative p-6 sm:p-8 max-w-4xl">
        
        <button type="button" onclick="closeCatalogueModal()" class="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="mb-6">
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">25 000+ CHAÎNES & 60 000 VOD</span>
            <h3 class="text-2xl font-black text-white mt-2">Catalogue des Chaînes TV Live</h3>
            <p class="text-xs text-zinc-400 font-medium">Recherchez vos bouquet favoris (Sports, Cinéma, France, International, Jeunesse).</p>
        </div>

        <!-- Search Input -->
        <div class="relative mb-6">
            <input type="text" id="catalogue-search-input" onkeyup="filterCatalogueChannels()" placeholder="Rechercher une chaîne (ex: beIN, Canal+, TF1, DAZN...)" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:border-cyan-500 outline-none">
            <i data-lucide="search" class="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5"></i>
        </div>

        <!-- Category Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-3 mb-6 text-xs font-bold" id="catalogue-category-tabs">
            <button type="button" onclick="filterCatalogueCategory('all')" data-cat="all" class="cat-tab-btn px-3.5 py-1.5 rounded-lg bg-cyan-500 text-zinc-950 whitespace-nowrap cursor-pointer">Toutes (25K)</button>
            <button type="button" onclick="filterCatalogueCategory('french')" data-cat="french" class="cat-tab-btn px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 whitespace-nowrap cursor-pointer">France (FR)</button>
            <button type="button" onclick="filterCatalogueCategory('sports')" data-cat="sports" class="cat-tab-btn px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 whitespace-nowrap cursor-pointer">Sports Live</button>
            <button type="button" onclick="filterCatalogueCategory('cinema')" data-cat="cinema" class="cat-tab-btn px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 whitespace-nowrap cursor-pointer">Cinéma & Séries</button>
            <button type="button" onclick="filterCatalogueCategory('kids')" data-cat="kids" class="cat-tab-btn px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 whitespace-nowrap cursor-pointer">Jeunesse</button>
            <button type="button" onclick="filterCatalogueCategory('international')" data-cat="international" class="cat-tab-btn px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 whitespace-nowrap cursor-pointer">International</button>
        </div>

        <!-- Channel Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2" id="catalogue-channels-grid">
            <?php foreach ($channels_list as $ch): ?>
                <div class="channel-card p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3" data-channel-name="<?php echo esc_attr(strtolower($ch['name'])); ?>" data-channel-cat="<?php echo esc_attr($ch['category']); ?>">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] font-black text-cyan-400">
                            TV
                        </div>
                        <span class="text-xs font-bold text-white truncate max-w-[150px]"><?php echo esc_html($ch['name']); ?></span>
                    </div>
                    <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-extrabold text-[9px]">4K ULTRA</span>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span class="text-xs text-zinc-400 font-medium">+25 000 chaînes mise à jour en temps réel.</span>
            <button type="button" onclick="closeCatalogueModal(); openOrderModal();" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider cursor-pointer">
                COMMANDER MON ACCÈS
            </button>
        </div>

    </div>
</div>
