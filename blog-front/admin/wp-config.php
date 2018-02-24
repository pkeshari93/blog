<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'blog');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'oQ)#oQ,Jif9ADUiw;b@9A|msYpp:UBgKGPqEnU=|C</Vmb)#@U~?F;w$hKbLY5WQ');
define('SECURE_AUTH_KEY',  ' | M~g0o1.UY!OPD ov[_D2q|vyd[V9`Q%zJA:ig7b,*L/kMow6S@|%((#T10.A)');
define('LOGGED_IN_KEY',    'uNCgpk{A1>HDv_oU@ rc!=cj`<<#j2kr+34H[$6GVn)Hk2efj*WjTW{|:x shy6^');
define('NONCE_KEY',        '49 Ykd)WyF`p!gsss1~jW&S_%[eXm^r*#d98Ku/?{;,?S^Zv&#()y#WM>YpB8c~8');
define('AUTH_SALT',        '/[|Hza[PeJv_kT=]n{;_b+uq(uQf{ (Q 39I!Q_1|S7E@b1`xP)ee|6,[fUv/cJz');
define('SECURE_AUTH_SALT', 'Y4xNC;a|[qi%?QKOA[E)333^&/0,t2[QISQyw*q!V(W8$B#TDF(KX{mH2sn=Vo8X');
define('LOGGED_IN_SALT',   'B>8W65>RkCXwDw$Vn*@ivY`_bKLuy! FPXg9VfJ6f>tKt)fAEFX_?6/N>`<L8Usu');
define('NONCE_SALT',       '3Y){YhW|bf}3[lkAb*H*2b:YH!52BW%rG5nwLzxi/jE:]KNDDv.#@%&WDH(Oex.8');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
