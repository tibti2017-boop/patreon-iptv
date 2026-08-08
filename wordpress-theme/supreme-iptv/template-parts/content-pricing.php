<?php
/**
 * Template Part: Pricing Section with Multi-Screen Selector
 *
 * @package Seller_IPTV
 */
$plans = seller_iptv_get_plans();
?>

<section id="pricing" class="py-20 bg-zinc-950 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                OFFRE EXCLUSIVE SANS ENGAGEMENT
            </span>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
                Choisissez Votre <span class="text-cyan-400">Formule Seller</span>
            </h2>
            <p class="text-zinc-400 text-sm sm:text-base font-medium">
                Accès instantané. Satisfait ou remboursé sous 7 jours. Sans reconduction tacite.
            </p>

            <!-- Multi-Screen Selector Controls -->
            <div class="mt-8 bg-zinc-900/90 border border-zinc-800 p-2 sm:p-3 rounded-2xl inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 shadow-xl">
                <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider px-3 flex items-center gap-1.5">
                    <i data-lucide="tv" class="w-4 h-4 text-cyan-400"></i>
                    ÉCRANS SIMULTANÉS:
                </span>
                <div class="flex items-center gap-1" id="screen-selector-buttons">
                    <?php for ($num = 1; $num <= 5; $num++): ?>
                        <button type="button" onclick="setPricingScreens(<?php echo $num; ?>)" data-screen="<?php echo $num; ?>" class="screen-btn px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer <?php echo $num === 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30' : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700'; ?>">
                            <?php echo $num; ?> <?php echo $num === 1 ? 'Écran' : 'Écrans'; ?>
                        </button>
                    <?php endfor; ?>
                </div>
            </div>
        </div>

        <!-- Plans Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-stretch">
            <?php foreach ($plans as $p): 
                $isPopular = !empty($p['isPopular']);
            ?>
                <div class="pricing-card relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 <?php echo $isPopular ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-105 z-20' : 'bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900'; ?>" data-base-price="<?php echo esc_attr($p['totalPrice']); ?>" data-plan-id="<?php echo esc_attr($p['id']); ?>">
                    
                    <?php if ($isPopular): ?>
                        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <i data-lucide="flame" class="w-3 h-3 fill-white"></i>
                            LE PLUS POPULAIRE
                        </div>
                    <?php endif; ?>

                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-lg font-black text-white"><?php echo esc_html($p['name']); ?></h3>
                            <?php if (!empty($p['discountBadge'])): ?>
                                <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-extrabold text-[10px]">
                                    <?php echo esc_html($p['discountBadge']); ?>
                                </span>
                            <?php endif; ?>
                        </div>

                        <div class="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-4">
                            <?php echo esc_html($p['durationMonths']); ?> <?php echo $p['durationMonths'] === 1 ? 'MOIS D\'ACCÈS' : 'MOIS D\'ACCÈS'; ?>
                        </div>

                        <div class="mb-6 pb-6 border-b border-zinc-800">
                            <div class="flex items-baseline gap-1">
                                <span class="text-3xl font-black text-white plan-price-display">
                                    <?php echo number_format($p['pricePerMonth'], 2); ?>$
                                </span>
                                <span class="text-xs text-zinc-400 font-bold uppercase">/ MOIS</span>
                            </div>
                            <div class="text-xs text-cyan-400 font-semibold mt-1 plan-total-display">
                                Total: <?php echo number_format($p['totalPrice'], 2); ?>$
                            </div>
                        </div>

                        <ul class="space-y-2.5 text-xs font-medium text-zinc-300 mb-6">
                            <?php foreach ($p['features'] as $feat): ?>
                                <li class="flex items-start gap-2">
                                    <i data-lucide="check" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i>
                                    <span><?php echo esc_html($feat); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <button type="button" onclick="openOrderModal('<?php echo esc_attr($p['id']); ?>')" class="w-full py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer <?php echo $isPopular ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:opacity-90 shadow-cyan-500/30' : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'; ?>">
                        COMMANDER MAINTENANT
                    </button>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
