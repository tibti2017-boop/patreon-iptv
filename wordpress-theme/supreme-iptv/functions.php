<?php
/**
 * Seller IPTV 4K - Functions & Theme Setup
 *
 * @package Seller_IPTV
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function seller_iptv_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Menu Principal Header', 'seller-iptv'),
        'footer'  => __('Menu Pied de Page', 'seller-iptv'),
    ));

    // HTML5 markup support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Custom Logo support
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 220,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Gutenberg wide alignment
    add_theme_support('align-wide');
}
add_action('after_setup_theme', 'seller_iptv_setup');

/**
 * Enqueue Scripts & Styles
 */
function seller_iptv_scripts() {
    // Google Fonts
    wp_enqueue_style('seller-iptv-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Playfair+Display:wght@600;800&display=swap', array(), null);

    // Tailwind CSS via CDN for full styling fidelity in WP 6.8+
    wp_enqueue_style('tailwind-cdn', 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css', array(), '2.2.19');

    // Theme main stylesheet
    wp_enqueue_style('seller-iptv-style', get_stylesheet_uri(), array('tailwind-cdn'), '1.0.0');

    // Lucide Icons (Vanilla JS / SVG helper)
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);

    // Main Theme JavaScript
    wp_enqueue_script('seller-iptv-js', get_template_directory_uri() . '/assets/js/theme.js', array('jquery'), '1.0.0', true);

    // Pass PHP data to JS
    wp_localize_script('seller-iptv-js', 'sellerIPTVData', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('seller_iptv_nonce'),
        'whatsapp' => get_theme_mod('seller_iptv_whatsapp', '+33700000000'),
    ));
}
add_action('wp_enqueue_scripts', 'seller_iptv_scripts');

/**
 * Register Widget Areas
 */
function seller_iptv_widgets_init() {
    register_sidebar(array(
        'name'          => __('Barre Latérale Principale', 'seller-iptv'),
        'id'            => 'sidebar-1',
        'description'   => __('Barre latérale par défaut pour les articles et pages.', 'seller-iptv'),
        'before_widget' => '<div id="%1$s" class="widget %2$s bg-zinc-900 border border-zinc-800 p-6 rounded-2xl mb-6">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="text-lg font-bold text-white mb-4 border-b border-zinc-800 pb-2">',
        'after_title'   => '</h3>',
    ));

    for ($i = 1; $i <= 4; $i++) {
        register_sidebar(array(
            'name'          => sprintf(__('Pied de Page Colonne %d', 'seller-iptv'), $i),
            'id'            => 'footer-' . $i,
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4 class="text-xs font-bold text-white uppercase tracking-wider mb-4">',
            'after_title'   => '</h4>',
        ));
    }
}
add_action('widgets_init', 'seller_iptv_widgets_init');

/**
 * Theme Customizer Settings
 */
function seller_iptv_customize_register($wp_customize) {
    // Section SELLER IPTV GENERAL
    $wp_customize->add_section('seller_iptv_general', array(
        'title'    => __('Coordonnées & WhatsApp', 'seller-iptv'),
        'priority' => 30,
    ));

    // WhatsApp
    $wp_customize->add_setting('seller_iptv_whatsapp', array(
        'default'           => '+33700000000',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('seller_iptv_whatsapp', array(
        'label'   => __('Numéro WhatsApp (avec indicatif +33)', 'seller-iptv'),
        'section' => 'seller_iptv_general',
        'type'    => 'text',
    ));

    // Support Email
    $wp_customize->add_setting('seller_iptv_email', array(
        'default'           => 'support@seller-iptv.fr',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('seller_iptv_email', array(
        'label'   => __('Email de Support', 'seller-iptv'),
        'section' => 'seller_iptv_general',
        'type'    => 'email',
    ));

    // Section HERO
    $wp_customize->add_section('seller_iptv_hero', array(
        'title'    => __('Bannière d\'Accueil (Hero)', 'seller-iptv'),
        'priority' => 35,
    ));

    // Hero Title
    $wp_customize->add_setting('seller_iptv_hero_title', array(
        'default'           => 'Le Meilleur Abonnement IPTV France en 4K',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('seller_iptv_hero_title', array(
        'label'   => __('Titre Principal Hero', 'seller-iptv'),
        'section' => 'seller_iptv_hero',
        'type'    => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('seller_iptv_hero_subtitle', array(
        'default'           => '+25 000 chaînes en direct, +60 000 films et séries en HD/4K. Sport, cinéma et divertissement sur tous vos appareils avec 99,9% de disponibilité.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('seller_iptv_hero_subtitle', array(
        'label'   => __('Sous-titre Hero', 'seller-iptv'),
        'section' => 'seller_iptv_hero',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'seller_iptv_customize_register');

/**
 * Custom Post Types Registration (Forfaits, Chaînes, VOD, FAQ, Avis, Guides)
 */
function seller_iptv_register_cpts() {
    // Forfaits IPTV
    register_post_type('iptv_plan', array(
        'labels' => array(
            'name'          => __('Forfaits IPTV', 'seller-iptv'),
            'singular_name' => __('Forfait IPTV', 'seller-iptv'),
        ),
        'public'      => true,
        'has_archive' => true,
        'menu_icon'   => 'dashicons-tickets-alt',
        'supports'    => array('title', 'editor', 'custom-fields'),
    ));

    // Chaînes TV
    register_post_type('iptv_channel', array(
        'labels' => array(
            'name'          => __('Chaînes TV', 'seller-iptv'),
            'singular_name' => __('Chaîne TV', 'seller-iptv'),
        ),
        'public'      => true,
        'menu_icon'   => 'dashicons-format-video',
        'supports'    => array('title', 'thumbnail'),
    ));

    // VOD
    register_post_type('iptv_vod', array(
        'labels' => array(
            'name'          => __('Catalogue VOD', 'seller-iptv'),
            'singular_name' => __('Contenu VOD', 'seller-iptv'),
        ),
        'public'      => true,
        'menu_icon'   => 'dashicons-video-alt2',
        'supports'    => array('title', 'editor', 'thumbnail'),
    ));

    // FAQ
    register_post_type('iptv_faq', array(
        'labels' => array(
            'name'          => __('FAQ', 'seller-iptv'),
            'singular_name' => __('Question FAQ', 'seller-iptv'),
        ),
        'public'      => true,
        'menu_icon'   => 'dashicons-editor-help',
        'supports'    => array('title', 'editor'),
    ));
}
add_action('init', 'seller_iptv_register_cpts');

/**
 * Helper: Get Subscription Plans (WP CPT or Hardcoded Default Fallback)
 */
function seller_iptv_get_plans() {
    $plans = array(
        array(
            'id' => '1-month',
            'name' => 'Essentiel',
            'durationMonths' => 1,
            'pricePerMonth' => 10.99,
            'totalPrice' => 10.99,
            'features' => array(
                'Streaming HD & 4K Ultra',
                'Plus de 25 000 chaînes TV mondiales',
                'Catalogue 60 000+ films et séries',
                'Assistance technique Seller IPTV 24/7/24',
                'Tous appareils compatibles',
                'Contenus pour adultes disponibles'
            )
        ),
        array(
            'id' => '3-months',
            'name' => 'Confort',
            'durationMonths' => 3,
            'pricePerMonth' => 8.66,
            'totalPrice' => 25.99,
            'discountBadge' => '-45%',
            'features' => array(
                'Streaming HD & 4K Ultra',
                'Plus de 25 000 chaînes TV mondiales',
                'Catalogue 60 000+ films et séries',
                'Assistance technique Seller IPTV 24/7/24',
                'Tous appareils compatibles',
                'Contenus pour adultes disponibles'
            )
        ),
        array(
            'id' => '6-months',
            'name' => 'Privilège',
            'durationMonths' => 6,
            'pricePerMonth' => 6.66,
            'totalPrice' => 39.99,
            'discountBadge' => '-58%',
            'isPopular' => true,
            'features' => array(
                'Streaming HD & 4K Ultra',
                'Plus de 25 000 chaînes TV mondiales',
                'Catalogue 60 000+ films et séries',
                'Assistance technique Seller IPTV 24/7/24',
                'Tous appareils compatibles',
                'Contenus pour adultes disponibles'
            )
        ),
        array(
            'id' => '12-months',
            'name' => 'Prestige',
            'durationMonths' => 12,
            'pricePerMonth' => 4.16,
            'totalPrice' => 49.99,
            'discountBadge' => '-68%',
            'features' => array(
                'Streaming HD & 4K Ultra',
                'Plus de 25 000 chaînes TV mondiales',
                'Catalogue 60 000+ films et séries',
                'Assistance technique Seller IPTV 24/7/24',
                'Tous appareils compatibles',
                'Contenus pour adultes disponibles'
            )
        ),
        array(
            'id' => '24-months',
            'name' => 'Suprême',
            'durationMonths' => 24,
            'pricePerMonth' => 3.74,
            'totalPrice' => 89.99,
            'discountBadge' => '-80%',
            'features' => array(
                'Streaming HD & 4K Ultra',
                'Plus de 25 000 chaînes TV mondiales',
                'Catalogue 60 000+ films et séries',
                'Assistance technique Seller IPTV 24/7/24',
                'Tous appareils compatibles',
                'Contenus pour adultes disponibles'
            )
        )
    );
    return $plans;
}

/**
 * Helper: Get VOD Catalogue
 */
function seller_iptv_get_vod() {
    return array(
        array('id'=>'wednesday','title'=>'Wednesday','type'=>'series','genre'=>'Comédie','poster'=>'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80','rating'=>'8.1','year'=>'2023','quality'=>'4K HDR','synopsis'=>'Intelligente, sarcastique et un peu morte à l\'intérieur, Mercredi Addams enquête sur une série de meurtres tout en se faisant des amis à Nevermore.'),
        array('id'=>'house-of-dragon','title'=>'House of the Dragon','type'=>'series','genre'=>'Aventure','poster'=>'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80','rating'=>'8.4','year'=>'2024','quality'=>'4K HDR','synopsis'=>'L\'histoire de la maison Targaryen 200 ans avant Game of Thrones.'),
        array('id'=>'the-last-of-us','title'=>'The Last of Us','type'=>'series','genre'=>'Drame','poster'=>'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80','rating'=>'8.8','year'=>'2023','quality'=>'4K HDR','synopsis'=>'Joel, un survivant cynique, doit faire sortir Ellie, 14 ans, d\'une zone de quarantaine oppressante.'),
        array('id'=>'severance','title'=>'Severance','type'=>'series','genre'=>'Sci-Fi','poster'=>'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80','rating'=>'8.7','year'=>'2024','quality'=>'4K HDR','synopsis'=>'Des employés de bureau dont les souvenirs ont été séparés chirurgiement entre vie pro et vie privée.'),
        array('id'=>'the-witcher','title'=>'The Witcher','type'=>'series','genre'=>'Aventure','poster'=>'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500&auto=format&fit=crop&q=80','rating'=>'8.2','year'=>'2023','quality'=>'4K Ultra','synopsis'=>'Geralt de Riv, un chasseur de monstres mutant dans un monde impitoyable.'),
        array('id'=>'the-bear','title'=>'The Bear','type'=>'series','genre'=>'Drame','poster'=>'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80','rating'=>'8.6','year'=>'2024','quality'=>'4K Ultra','synopsis'=>'Un jeune chef de haute gastronomie revient à Chicago pour reprendre la sandwicherie familiale.')
    );
}

/**
 * Helper: Get FAQs
 */
function seller_iptv_get_faqs() {
    return array(
        array('q' => 'Qu\'est-ce que Seller IPTV et quel est son fonctionnement ?', 'a' => 'Seller IPTV est un service de diffusion TV par Internet haut de gamme vous permettant d\'accéder à plus de 25 000 chaînes direct HD/4K et 60 000 VODs sur tous vos appareils.'),
        array('q' => 'Combien d\'écrans peuvent diffuser en simultané ?', 'a' => 'Par défaut chaque forfait inclut 1 écran. Vous pouvez sélectionner lors de votre commande des options multi-écrans de 2 à 5 écrans simultanés.'),
        array('q' => 'Quels équipements supportent le service ?', 'a' => 'Compatible 100% avec Amazon Firestick, Smart TV (Samsung, LG, Sony), Android TV, Apple TV, iPhone, Android, PC, Mac, MAG, Formuler, etc.'),
        array('q' => 'Existe-t-il une garantie satisfait ou remboursé ?', 'a' => 'Oui ! Nous proposons une garantie intégrale de 7 jours satisfait ou remboursé sans justification.'),
        array('q' => 'Comment procéder à l\'installation ?', 'a' => 'La configuration prend moins de 3 minutes. Après commande, vous recevez vos identifiants Xtream / M3U avec un guide illustré pas-à-pas.')
    );
}

/**
 * Helper: Get Device Guides
 */
function seller_iptv_get_device_guides() {
    return array(
        array('id'=>'firestick', 'name'=>'Firestick / Fire TV', 'category'=>'AMAZON TV', 'downloaderCode'=>'289142', 'recommendedApp'=>'IPTV Smarters Pro / Tivimate', 'steps'=>array('Téléchargez l\'application Downloader.','Saisissez le code rapide d\'installation fourni.','Installez l\'application IPTV Smarters Pro ou Tivimate.','Entrez vos identifiants reçus par email.')),
        array('id'=>'android-tv', 'name'=>'Android TV / Box / Mobile', 'category'=>'BOX / MOBILE', 'recommendedApp'=>'Tivimate / IPTV Smarters / XCIPTV', 'steps'=>array('Allez dans le Google Play Store.','Installez Tivimate ou IPTV Smarters Pro.','Sélectionnez Connexion Xtream Codes API.','Entrez vos codes d\'accès Seller IPTV.')),
        array('id'=>'apple-ios', 'name'=>'Apple iOS / Apple TV', 'category'=>'IPHONE / IPAD / APPLE TV', 'recommendedApp'=>'Smarters Player Lite / IBO Player', 'steps'=>array('Ouvrez l\'App Store sur iPhone/iPad/Apple TV.','Recherchez Smarters Player Lite.','Installez l\'application.','Entrez vos accès M3U / Xtream.')),
        array('id'=>'smart-tv', 'name'=>'Smart TV (Samsung / LG)', 'category'=>'SAMSUNG / LG / SONY', 'recommendedApp'=>'IBO Player / Smart IPTV', 'steps'=>array('Recherchez IBO Player dans le Store de votre TV.','Notez l\'adresse MAC affichée.','Transmettez votre MAC à notre support.','Profitez de toutes vos chaînes en 4K.'))
    );
}

/**
 * Schema.org Generator
 */
function seller_iptv_schema() {
    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'Product',
        'name' => 'Seller IPTV 4K',
        'description' => 'Abonnement IPTV 4K Premium en France avec plus de 25 000 chaînes TV et 60 000 films VOD.',
        'brand' => array(
            '@type' => 'Brand',
            'name' => 'Seller IPTV'
        ),
        'offers' => array(
            '@type' => 'AggregateOffer',
            'lowPrice' => '3.74',
            'highPrice' => '10.99',
            'priceCurrency' => 'EUR'
        ),
        'aggregateRating' => array(
            '@type' => 'AggregateRating',
            'ratingValue' => '4.9',
            'reviewCount' => '1250'
        )
    );
    echo '<script type="application/ld+json">' . wp_json_encode($schema) . '</script>';
}
add_action('wp_head', 'seller_iptv_schema');
