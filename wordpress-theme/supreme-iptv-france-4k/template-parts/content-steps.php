<?php
/**
 * Template Part: 4 Easy Steps
 *
 * @package Seller_IPTV
 */
$steps = array(
    array('num' => '01', 'title' => 'Choisissez Votre Forfait', 'desc' => 'Sélectionnez la durée (1, 3, 6, 12 ou 24 mois) et le nombre d\'écrans simultanés souhaité.'),
    array('num' => '02', 'title' => 'Paiement Chiffré Sécurisé', 'desc' => 'Validez votre commande par Carte Bancaire, PayPal ou Crypto via nos passerelles chiffrées SSL.'),
    array('num' => '03', 'title' => 'Réception des Accès 24/7', 'desc' => 'Recevez vos identifiants Xtream Codes & Liens M3U instantanément par Email et sur WhatsApp.'),
    array('num' => '04', 'title' => 'Profitez en 4K Ultra HD', 'desc' => 'Entrez vos identifiants dans votre application IPTV et profitez immédiatement de vos chaînes.')
);
?>

<section class="py-20 bg-zinc-950 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                SIMPLICITÉ & RAPIDITÉ
            </span>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-4">
                Activez Votre Service en <span class="text-cyan-400">4 Étapes Simples</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php foreach ($steps as $s): ?>
                <div class="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 relative group hover:border-cyan-500/40 transition-all">
                    <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
                        <?php echo esc_html($s['num']); ?>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        <?php echo esc_html($s['title']); ?>
                    </h3>
                    <p class="text-xs text-zinc-400 leading-relaxed font-medium">
                        <?php echo esc_html($s['desc']); ?>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
