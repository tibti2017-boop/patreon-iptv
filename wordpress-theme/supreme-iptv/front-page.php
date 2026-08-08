<?php
/**
 * Template Name: Page d'Accueil Seller IPTV
 * Description: Page d'accueil officielle avec toutes les sections interactives et animations.
 *
 * @package Seller_IPTV
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <?php get_template_part('template-parts/content', 'hero'); ?>

    <!-- Channels Live Ticker -->
    <?php get_template_part('template-parts/content', 'channels-banner'); ?>

    <!-- Sports Live Section -->
    <?php get_template_part('template-parts/content', 'sports'); ?>

    <!-- VOD Showcase Section -->
    <?php get_template_part('template-parts/content', 'vod'); ?>

    <!-- Features Advantages Grid -->
    <?php get_template_part('template-parts/content', 'features'); ?>

    <!-- Pricing Section with Multi-Screen Selector -->
    <?php get_template_part('template-parts/content', 'pricing'); ?>

    <!-- Devices Compatibility Section -->
    <?php get_template_part('template-parts/content', 'devices'); ?>

    <!-- 4 Easy Steps Section -->
    <?php get_template_part('template-parts/content', 'steps'); ?>

    <!-- Reviews Testimonials Section -->
    <?php get_template_part('template-parts/content', 'reviews'); ?>

    <!-- FAQ Accordion Section -->
    <?php get_template_part('template-parts/content', 'faq'); ?>

    <!-- Money Back Guarantee Banner -->
    <?php get_template_part('template-parts/content', 'guarantee'); ?>

</main>

<?php
get_footer();
