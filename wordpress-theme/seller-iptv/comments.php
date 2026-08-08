<?php
/**
 * The template for displaying comments
 *
 * @package Seller_IPTV
 */

if (post_password_required()) {
    return;
}
?>

<div id="comments" class="comments-area bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 mt-10">

    <?php if (have_comments()) : ?>
        <h3 class="comments-title text-xl font-black text-white mb-6 border-b border-zinc-800 pb-4">
            <?php
            $comments_number = get_comments_number();
            if ('1' === $comments_number) {
                printf(_x('1 Commentaire', 'comments title', 'seller-iptv'));
            } else {
                printf(
                    _nx(
                        '%1$s Commentaire',
                        '%1$s Commentaires',
                        $comments_number,
                        'comments title',
                        'seller-iptv'
                    ),
                    number_format_i18n($comments_number)
                );
            }
            ?>
        </h3>

        <ol class="comment-list space-y-6 mb-8">
            <?php
            wp_list_comments(array(
                'style'      => 'ol',
                'short_ping' => true,
                'avatar_size'=> 48,
            ));
            ?>
        </ol>

        <?php the_comments_navigation(); ?>

    <?php endif; ?>

    <?php
    comment_form(array(
        'class_form'           => 'space-y-4',
        'title_reply'          => 'Laisser un commentaire',
        'title_reply_to'       => 'Répondre à %s',
        'class_submit'         => 'px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider cursor-pointer border-0',
        'comment_notes_before' => '<p class="text-xs text-zinc-400 mb-4">Votre adresse e-mail ne sera pas publiée.</p>',
    ));
    ?>

</div>
