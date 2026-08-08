<?php
/**
 * Template Part: Reviews & Testimonials
 *
 * @package Seller_IPTV
 */
$reviews = array(
    array('name' => 'Pierre M.', 'location' => 'FRANCE', 'rating' => 5, 'comment' => 'Stabilité 4K incroyable. Les chaînes fonctionnent parfaitement même pendant les grands matchs de foot.', 'date' => 'Il y a 2 jours'),
    array('name' => 'Sophie L.', 'location' => 'BELGIQUE', 'rating' => 5, 'comment' => 'Meilleur service client que j\'ai connu. Ils m\'ont aidée à configurer ma MAG box tard le soir.', 'date' => 'Il y a 3 jours'),
    array('name' => 'Marc D.', 'location' => 'SUISSE', 'rating' => 5, 'comment' => 'La bibliothèque VOD est énorme ! Mes enfants adorent et j\'apprécie les infos en direct.', 'date' => 'Il y a 1 semaine'),
    array('name' => 'Jean-Luc R.', 'location' => 'FRANCE', 'rating' => 5, 'comment' => 'Excellent rapport qualité-prix. L\'abonnement annuel est une vraie aubaine.', 'date' => 'Il y a 2 semaines'),
    array('name' => 'Claire B.', 'location' => 'CANADA', 'rating' => 5, 'comment' => 'Enfin un fournisseur qui ne me freeze pas aux heures de pointe. La qualité fait la différence.', 'date' => 'Il y a 3 semaines'),
    array('name' => 'Antoine K.', 'location' => 'LUXEMBOURG', 'rating' => 5, 'comment' => 'L\'accès annuel était la meilleure décision. Un seul paiement, plus de soucis.', 'date' => 'Il y a 1 mois'),
);
?>

<section class="py-20 bg-zinc-900/40 border-y border-zinc-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
            <div class="flex items-center justify-center gap-1 mb-3 text-amber-400">
                <?php for ($i = 0; $i < 5; $i++): ?>
                    <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
                <?php endfor; ?>
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                Ce Que Disent <span class="text-cyan-400">Nos Abonnés</span>
            </h2>
            <p class="text-zinc-400 text-sm sm:text-base font-medium">
                Note moyenne de 4.9/5 sur plus de 1 200 avis clients vérifiés en France, Belgique et Suisse.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($reviews as $r): ?>
                <div class="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div>
                                <h4 class="text-sm font-bold text-white"><?php echo esc_html($r['name']); ?></h4>
                                <span class="text-[10px] font-extrabold uppercase text-cyan-400 tracking-wider"><?php echo esc_html($r['location']); ?></span>
                            </div>
                            <div class="flex items-center gap-0.5 text-amber-400">
                                <?php for ($i = 0; $i < $r['rating']; $i++): ?>
                                    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
                                <?php endfor; ?>
                            </div>
                        </div>
                        <p class="text-xs text-zinc-300 font-medium leading-relaxed mb-4">
                            "<?php echo esc_html($r['comment']); ?>"
                        </p>
                    </div>
                    <span class="text-[10px] font-semibold text-zinc-500"><?php echo esc_html($r['date']); ?></span>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
