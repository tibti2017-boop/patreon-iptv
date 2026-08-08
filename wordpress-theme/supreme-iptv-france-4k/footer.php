<?php
/**
 * Seller IPTV Theme Footer
 */
$whatsapp = get_theme_mod('seller_iptv_whatsapp', '+33700000000');
$email = get_theme_mod('seller_iptv_email', 'support@seller-iptv.fr');
?>
    <!-- Footer Section -->
    <footer class="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400 text-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
                
                <!-- Col 1: Brand Info -->
                <div class="lg:col-span-2 space-y-4">
                    <div class="flex items-center gap-2.5">
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5">
                            <div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                                <i data-lucide="tv" class="w-4 h-4 text-cyan-400"></i>
                            </div>
                        </div>
                        <span class="text-lg font-black tracking-tight text-white">
                            SELLER <span class="text-cyan-400">IPTV</span>
                        </span>
                    </div>
                    <p class="text-xs text-zinc-400 leading-relaxed max-w-sm">
                        Fournisseur officiel d'abonnement IPTV en France et en Europe. Profitez de plus de 25 000 chaînes directes 4K Ultra HD et de 60 000 VODs avec serveurs stables anti-coupure.
                    </p>
                    <div class="flex items-center gap-3 pt-2">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            SERVEURS 99.9% UPTIME
                        </span>
                    </div>
                </div>

                <!-- Col 2: Navigation Rapide -->
                <div>
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-white mb-4">ACCÈS RAPIDE</h4>
                    <ul class="space-y-2.5 text-xs">
                        <li><a href="#sports" class="hover:text-cyan-400 transition-colors">Sport en Direct 4K</a></li>
                        <li><a href="#vod" class="hover:text-cyan-400 transition-colors">Films & Séries VOD</a></li>
                        <li><button type="button" onclick="openCatalogueModal()" class="hover:text-cyan-400 transition-colors text-left cursor-pointer">Catalogue 25 000+ Chaînes</button></li>
                        <li><a href="#pricing" class="hover:text-cyan-400 transition-colors">Tarifs & Forfaits IPTV</a></li>
                        <li><a href="#faq" class="hover:text-cyan-400 transition-colors">Foire Aux Questions</a></li>
                    </ul>
                </div>

                <!-- Col 3: Compatibilité -->
                <div>
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-white mb-4">APPAREILS COMPATIBLES</h4>
                    <ul class="space-y-2.5 text-xs">
                        <li><span class="text-zinc-300">Amazon Firestick 4K</span></li>
                        <li><span class="text-zinc-300">Smart TV Samsung & LG</span></li>
                        <li><span class="text-zinc-300">Android TV & Box</span></li>
                        <li><span class="text-zinc-300">Apple TV, iPhone & iPad</span></li>
                        <li><span class="text-zinc-300">PC Windows & Mac</span></li>
                        <li><span class="text-zinc-300">MAG, Formuler & Enigma2</span></li>
                    </ul>
                </div>

                <!-- Col 4: Assistance 24/7 -->
                <div>
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-white mb-4">ASSISTANCE & CLIENTS</h4>
                    <ul class="space-y-3 text-xs">
                        <li>
                            <a href="https://wa.me/<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $whatsapp)); ?>" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold hover:bg-emerald-500/20 transition-all">
                                <i data-lucide="message-circle" class="w-4 h-4"></i>
                                WhatsApp Support 24/7
                            </a>
                        </li>
                        <li class="text-zinc-400">Email: <?php echo esc_html($email); ?></li>
                        <li class="text-[11px] text-zinc-400">Paiements 100% sécurisés SSL par CB, PayPal & Crypto.</li>
                    </ul>
                </div>

            </div>

            <!-- Bottom Disclaimer & Copyright -->
            <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Tous droits réservés.</p>
                <div class="flex items-center gap-6">
                    <a href="#" class="hover:text-zinc-300">Conditions Générales</a>
                    <a href="#" class="hover:text-zinc-300">Politique de Confidentialité</a>
                    <a href="#" class="hover:text-zinc-300">Mentions Légales</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <div class="fixed bottom-6 right-6 z-40">
        <a href="https://wa.me/<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $whatsapp)); ?>?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20l'abonnement%20Seller%20IPTV." target="_blank" rel="noopener" class="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform">
            <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-zinc-950 animate-ping"></span>
            <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-zinc-950"></span>
            <i data-lucide="message-circle" class="w-7 h-7"></i>
        </a>
    </div>

    <!-- Render Reusable Modals -->
    <?php get_template_part('template-parts/modal', 'order'); ?>
    <?php get_template_part('template-parts/modal', 'trial'); ?>
    <?php get_template_part('template-parts/modal', 'catalogue'); ?>
    <?php get_template_part('template-parts/modal', 'guide'); ?>

</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
