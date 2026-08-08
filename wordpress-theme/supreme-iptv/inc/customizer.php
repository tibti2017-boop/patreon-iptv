<?php
/**
 * Seller IPTV Theme Customizer
 *
 * @package Seller_IPTV
 */

function seller_iptv_customize_register(  ) {
    // Section: IPTV Contact & Settings
    ->add_section( 'seller_iptv_contact', array(
        'title'    => __( 'IPTV WhatsApp & Contact', 'seller-iptv' ),
        'priority' => 30,
    ) );

    ->add_setting( 'seller_iptv_whatsapp', array(
        'default'           => '+33700000000',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    ->add_control( 'seller_iptv_whatsapp', array(
        'label'    => __( 'Numéro WhatsApp (avec indicatif +33)', 'seller-iptv' ),
        'section'  => 'seller_iptv_contact',
        'type'     => 'text',
    ) );
}
add_action( 'customize_register', 'seller_iptv_customize_register' );
