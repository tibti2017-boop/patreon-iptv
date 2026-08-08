<?php
/**
 * The main template file
 *
 * @package Seller_IPTV
 */

get_header();
?>

<div class="pt-32 pb-20 bg-zinc-950 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header class="mb-10 text-center">
            <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
                Blog & <span class="text-cyan-400">Actualités IPTV</span>
            </h1>
            <p class="text-zinc-400 text-sm max-w-2xl mx-auto">
                Retrouvez nos guides, tutoriels et actualités sur la télévision 4K et le streaming en France.
            </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-8">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all p-6'); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="aspect-video w-full overflow-hidden rounded-xl mb-4">
                                    <?php the_post_thumbnail('medium_large', array('class' => 'w-full h-full object-cover')); ?>
                                </div>
                            <?php endif; ?>
                            
                            <h2 class="text-xl font-bold text-white hover:text-cyan-400 mb-3 transition-colors">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="text-xs text-zinc-500 mb-4 flex items-center gap-4">
                                <span>Publié le <?php echo get_the_date(); ?></span>
                                <span>Par <?php the_author(); ?></span>
                            </div>
                            <div class="text-sm text-zinc-400 mb-4 line-clamp-3">
                                <?php the_excerpt(); ?>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider">
                                Lire la suite &rarr;
                            </a>
                        </article>
                    <?php endwhile; ?>

                    <div class="pt-6">
                        <?php the_posts_navigation(array(
                            'prev_text' => '&larr; Articles Précédents',
                            'next_text' => 'Articles Suivants &rarr;',
                        )); ?>
                    </div>
                <?php else : ?>
                    <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center text-zinc-400">
                        <p>Aucun article trouvé.</p>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Sidebar -->
            <aside class="space-y-6">
                <?php get_sidebar(); ?>
            </aside>
        </div>

    </div>
</div>

<?php
get_footer();
