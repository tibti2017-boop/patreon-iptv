<?php
/**
 * Template Part: FAQ Accordion Section
 *
 * @package Seller_IPTV
 */
$faqs = seller_iptv_get_faqs();
?>

<section id="faq" class="py-20 bg-zinc-950 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                QUESTIONS FRÉQUENTES
            </span>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
                Tout Ce Que Vous Devez <span class="text-cyan-400">Savoir</span>
            </h2>
            <p class="text-zinc-400 text-sm sm:text-base font-medium">
                Vous avez des questions sur l'installation ou la compatibilité ? Consultez nos réponses ci-dessous.
            </p>
        </div>

        <div class="space-y-4" id="faq-accordion">
            <?php foreach ($faqs as $index => $f): ?>
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden faq-item transition-all">
                    <button type="button" onclick="toggleFaq(<?php echo $index; ?>)" class="w-full p-6 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:text-cyan-400 transition-colors">
                        <span><?php echo esc_html($f['q']); ?></span>
                        <i data-lucide="chevron-down" class="w-5 h-5 text-cyan-400 shrink-0 transform transition-transform faq-icon-<?php echo $index; ?>"></i>
                    </button>
                    <div class="faq-content-<?php echo $index; ?> hidden px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium border-t border-zinc-800/50 pt-4">
                        <?php echo esc_html($f['a']); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
