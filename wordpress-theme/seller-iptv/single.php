<?php
/**
 * The template for displaying single posts
 *
 * @package Seller_IPTV
 */

get_header();
?>

<div class="pt-32 pb-20 bg-zinc-950 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl mb-10'); ?>>
                <header class="mb-8">
                    <span class="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-4 inline-block">
                        <?php the_category(', '); ?>
                    </span>
                    <h1 class="text-2xl sm:text-4xl font-black text-white tracking-tight mt-2 mb-4 leading-tight">
                        <?php the_title(); ?>
                    </h1>
                    <div class="flex items-center gap-4 text-xs text-zinc-400 border-b border-zinc-800 pb-6">
                        <span>Publié le <?php echo get_the_date(); ?></span>
                        <span>•</span>
                        <span>Par <?php the_author(); ?></span>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="aspect-video w-full overflow-hidden rounded-xl mb-8 border border-zinc-800">
                        <?php the_post_thumbnail('full', array('class' => 'w-full h-full object-cover')); ?>
                    </div>
                <?php endif; ?>

                <div class="prose prose-invert max-w-none text-zinc-300 space-y-4 text-sm sm:text-base leading-relaxed mb-8">
                    <?php the_content(); ?>
                </div>

                <footer class="pt-6 border-t border-zinc-800 text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <?php the_tags('<span class="text-white font-bold mr-2">Mots-clés:</span> ', ', '); ?>
                    </div>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="text-cyan-400 font-bold uppercase tracking-wider hover:underline">
                        &larr; Retour à l'accueil
                    </a>
                </footer>
            </article>

            <!-- Comments -->
            <?php
            if (comments_open() || get_comments_number()) {
                comments_template();
            }
            ?>
        <?php endwhile; ?>

    </div>
</div>

<?php
get_footer();
