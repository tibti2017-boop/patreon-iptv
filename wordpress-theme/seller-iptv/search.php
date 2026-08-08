<?php
/**
 * The search results template
 *
 * @package Seller_IPTV
 */

get_header();
?>

<div class="pt-32 pb-20 bg-zinc-950 min-h-screen">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header class="mb-12 text-center">
            <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                Résultats de recherche pour : <span class="text-cyan-400">"<?php echo get_search_query(); ?>"</span>
            </h1>
        </header>

        <div class="space-y-4">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4'); ?>>
                        <div>
                            <h2 class="text-lg font-bold text-white hover:text-cyan-400 transition-colors mb-1">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <p class="text-xs text-zinc-400 line-clamp-2">
                                <?php echo wp_trim_words(get_the_excerpt(), 25); ?>
                            </p>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="shrink-0 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider text-center">
                            Accéder
                        </a>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
                    <p class="text-zinc-400 mb-4">Aucun résultat ne correspond à votre recherche.</p>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider">
                        Retour à l'accueil
                    </a>
                </div>
            <?php endif; ?>
        </div>

    </div>
</div>

<?php
get_footer();
