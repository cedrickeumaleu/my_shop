<?php



require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;

$woocommerce = new Client(
    'http://linsayshoes', 
    'ck_e411267e0930ffe405fc0c9527e60fd4938da84a', 
    'cs_4f603092339f3a0c4dc4f02e82e8050c3e8c2952',
    [
        'version' => 'wc/v3',
    ]
);
$products = $woocommerce->get('products');

$myproducts = json_encode($products);

?>
