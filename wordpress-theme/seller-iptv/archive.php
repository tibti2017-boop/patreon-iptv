<?php
/**
 * The archive page template
 *
 * @package Seller_IPTV
 */

get_header();
?>

<div class="pt-32 pb-20 bg-zinc-950 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header class="mb-12 text-center">
            <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
                <?php the_archive_title(); ?>
            </h1>
            <div class="text-zinc-400 text-sm max-w-xl mx-auto">
                <?php the_archive_description(); ?>
            </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all'); ?>>
                        <h2 class="text-lg font-bold text-white hover:text-cyan-400 transition-colors mb-2">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>
                        <p class="text-xs text-zinc-400 line-clamp-3 mb-4">
                            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                        </p>
                        <a href="<?php the_permalink(); ?>" class="text-xs text-cyan-400 font-bold uppercase tracking-wider">Voir &rarr;</a>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <div class="col-span-full bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center text-zinc-400">
                    <p>Aucun contenu trouvé dans cette archive.</p>
                </div>
            <?php endif; ?>
        </div>

    </div>
</div>

<?php
get_footer();
