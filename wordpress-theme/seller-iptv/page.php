<?php
/**
 * The template for displaying all pages
 *
 * @package Seller_IPTV
 */

get_header();
?>

<div class="pt-32 pb-20 bg-zinc-950 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl'); ?>>
                <header class="mb-8 border-b border-zinc-800 pb-6">
                    <h1 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <div class="prose prose-invert max-w-none text-zinc-300 space-y-4 text-sm sm:text-base leading-relaxed">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>

    </div>
</div>

<?php
get_footer();
