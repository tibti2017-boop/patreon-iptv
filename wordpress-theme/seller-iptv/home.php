<?php
/**
 * The blog posts page template
 *
 * @package Seller_IPTV
 */

get_header();
?>

<div class="pt-32 pb-20 bg-zinc-950 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header class="mb-12 text-center">
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                GUIDES & NEWS
            </span>
            <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3 mb-3">
                Blog <span class="text-cyan-400">Seller IPTV</span>
            </h1>
            <p class="text-zinc-400 text-sm max-w-xl mx-auto">
                Toutes les astuces de configuration, guides Smart TV, Firestick et actualités des compétitions sportives.
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-zinc-900 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col justify-between'); ?>>
                        <div>
                            <?php if (has_post_thumbnail()) : ?>
                                <a href="<?php the_permalink(); ?>" class="block aspect-video overflow-hidden">
                                    <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover hover:scale-105 transition-transform duration-300')); ?>
                                </a>
                            <?php endif; ?>
                            <div class="p-6">
                                <span class="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 mb-2 block">
                                    <?php the_category(', '); ?>
                                </span>
                                <h2 class="text-lg font-bold text-white hover:text-cyan-400 transition-colors mb-2 leading-snug">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                <p class="text-xs text-zinc-400 line-clamp-3 mb-4">
                                    <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                                </p>
                            </div>
                        </div>
                        <div class="px-6 pb-6 pt-0 border-t border-zinc-800/50 mt-auto flex items-center justify-between text-[11px] text-zinc-500">
                            <span><?php echo get_the_date(); ?></span>
                            <a href="<?php the_permalink(); ?>" class="text-cyan-400 font-bold uppercase tracking-wider hover:underline">Lire →</a>
                        </div>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <div class="col-span-full bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
                    <p class="text-zinc-400 font-medium">Aucun article publié pour le moment.</p>
                </div>
            <?php endif; ?>
        </div>

    </div>
</div>

<?php
get_footer();
