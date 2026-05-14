/**
 * Portfolio projects data for Maria Vaquero Coira.
 *
 * Each entry describes one grid / lightbox item.
 *
 * Fields:
 *   type    – 'image' | 'mp4' | 'gif' | 'vimeo'
 *   src     – URL (or relative path inside /assets for local files)
 *   vimeoId – Vimeo video ID (only for type:'vimeo')
 *   sound   – boolean; whether the mp4 has intentional audio (only for type:'mp4')
 *   label   – caption shown in grid and lightbox
 *   client  – used for potential future filtering
 *   ratio   – CSS aspect-ratio string, e.g. '16/9'
 */
const projects = [
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776741563/Maria-vaquero-iphone16lineup.mp4',                        sound: false, label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776705411/maria-vaquero-WWDC-25.jpg',                                             label: 'WWDC25, Apple',                 client: 'Apple',        ratio: '2647/3530' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776706423/Maria-vaquero-wwdc-25-glass.mp4',                         sound: false, label: 'WWDC25, Apple',                 client: 'Apple',        ratio: '16/9' },
  { type: 'gif',   src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776713447/Maria-vaquero-nikeathletesmindset.gif',                                 label: 'Nike, The New Company',         client: 'Nike',         ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776704842/maria-vaquero-personal-illustration-oranges.jpg',                       label: 'Personal Illustration',         client: 'Personal',     ratio: '1/1' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701939/Maria-vaquero-postmates-jelly-bum.jpg',                                 label: 'Postmates, The New Company',    client: 'Postmates',    ratio: '133/90' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776741599/Maria-Vaquero-iPhone16-01.mp4',                           sound: false, label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776726174/maria-vaquero-Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero.jpg',          label: 'iPhone 14 Pro, Apple',          client: 'Apple',        ratio: '375/211' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776741588/Maria-Vaquero-carbon-neutral-apple-animation.mp4',        sound: false, label: 'Carbon Neutral Watch, Apple',   client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701937/maria-vaquero-iphone17e-lineup.jpg',                                    label: 'iPhone 17e, Apple',             client: 'Apple',        ratio: '1363/784' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776830461/maria-vaquero-theathletesmindset-intro_q4pn1v.mp4',       sound: true,  label: 'Nike, The New Company',         client: 'Nike',         ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776917213/maria-vaquero-nike-newvictors2_vg8q4o.jpg',                             label: 'Nike, The New Company',         client: 'Nike',         ratio: '581/638' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776713778/Maria-vaquero-wwdc25-tim.jpg',                                          label: 'WWDC25, Apple',                 client: 'Apple',        ratio: '2500/1667' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776706555/Maria-vaquero-pin-50.jpg',                                              label: '50th Anniversary, Apple',       client: 'Apple',        ratio: '365/218' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701939/Maria-vaquero-picsart-flower-girl.jpg',                                 label: 'Picsart, The New Company',      client: 'Picsart',      ratio: '3/2' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776713071/Maria-vaquero-iphone16-green-vertical.jpg',                             label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '665/946' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776710327/Maria-vaquero-stubhub-illustration.png',                                label: 'Stubhub, GS&P',                 client: 'Stubhub',      ratio: '129/70' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701937/Maria-vaquero-iphone14-pro-vertical.jpg',                               label: 'iPhone 14 Pro, Apple',          client: 'Apple',        ratio: '247/244' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776833245/maria-vaquero-50anniversary-ambient_udne5k.mp4',          sound: true,  label: '50th Anniversary, Apple',       client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776707668/Maria-vaquero-personal-illustration-oranges-ashtray.jpg',               label: 'Personal Illustration',         client: 'Personal',     ratio: '1/1' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776741552/Maria-vaquero-iphone16-capture.mp4',                      sound: false, label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776704710/maria-vaquero-Apple-Watch-S9.jpg',                                      label: 'Apple Watch S9, Apple',         client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776706945/maria-vaquero-nicolefarhi-letterhead.png',                              label: 'Nicole Farhi',                  client: 'Nicole Farhi', ratio: '932/565' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701849/Maria-Vaquero-far-out-logo.jpg',                                        label: 'Far Out Event, Apple',          client: 'Apple',        ratio: '1250/703' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776706577/Maria-vaquero-herstory-app-gsp.png',                                    label: 'Herstory App, GS&P',            client: 'GS&P',         ratio: '500/351' },
  { type: 'gif',   src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776703736/maria-vaquero-nike-the-athletes-mindset-gif.gif',                       label: 'Nike, The New Company',         client: 'Nike',         ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701939/Maria-vaquero-postmates-pizza-nose.jpg',                                label: 'Postmates, The New Company',    client: 'Postmates',    ratio: '133/180' },
  { type: 'gif',   src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776712182/Maria-vaquero-face-animation.gif',                                      label: 'Personal Illustration',         client: 'Personal',     ratio: '500/469' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776725933/maria-vaquero-iphone16-hands.jpg',                                      label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '751/540' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776713567/Maria-vaquero-picsart-cactus.jpg',                                      label: 'Picsart, The New Company',      client: 'Picsart',      ratio: '3/2' },
  { type: 'gif',   src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776707109/maria-vaquero-herstory-gsp.gif',                                        label: 'Herstory App, GS&P',            client: 'GS&P',         ratio: '16/9' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776741552/Maria-vaquero-a18chip.mp4',                               sound: false, label: 'A18 Chip, Apple',               client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776707624/maria-vaquero-Green_Thumb-tote.jpg',                                    label: 'Green Thumb, The New Company',  client: 'Green Thumb',  ratio: '3/4' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776711020/Maria-vaquero-san-francisco-illustration.png',                          label: 'Personal Illustration',         client: 'Personal',     ratio: '1/1' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776833232/maria-vaquero-store-animation_i8ap3x.mp4',                sound: true,  label: '50th Anniversary, Apple',       client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776705860/Maria-vaquero-wwdc25pins.png',                                          label: 'WWDC25, Apple',                 client: 'Apple',        ratio: '1500/2009' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776704848/maria-vaquero-Venmo_Card_hands.jpg',                                    label: 'Venmo, The New Company',        client: 'Venmo',        ratio: '16/9' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776741558/Maria-vaquero-iphone16AI.mp4',                            sound: false, label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776726869/Maria-vaquero-50-event.jpg',                                            label: '50th Anniversary, Apple',       client: 'Apple',        ratio: '83/89' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776711720/Maria-vaquero-steak-club.png',                                          label: 'Personal Illustration',         client: 'Personal',     ratio: '2397/1402' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776707625/maria-vaquero-Green_Thumb-tshirt.jpg',                                  label: 'Green Thumb, The New Company',  client: 'Green Thumb',  ratio: '757/897' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776705758/maria-vaquero-PreShow_wwdc25.mp4',                        sound: false, label: 'WWDC25, Apple',                 client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776706947/maria-vaquero-nicole-farhi.png',                                        label: 'Nicole Farhi',                  client: 'Nicole Farhi', ratio: '37/46' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776707707/Maria-vaquero-picsart-gamer.jpg',                                       label: 'Picsart, The New Company',      client: 'Picsart',      ratio: '3/4' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776832563/maria-vaquero-nike-the-athletesmindset-cover_si3cwj.png',               label: 'Nike, The New Company',         client: 'Nike',         ratio: '1/1' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776706282/Maria-vaquero-wwdc25-pins.mp4',                           sound: false, label: 'WWDC25, Apple',                 client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701938/Maria-vaquero-personal-illustration-california-cup.jpg',                label: 'Personal Illustration',         client: 'Personal',     ratio: '1/1' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776707668/Maria-vaquero-personal-illustration-wine-pizza.jpg',                    label: 'Personal Illustration',         client: 'Personal',     ratio: '1/1' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776707665/Maria-vaquero-personal-illustration-butter-eggs.jpg',                   label: 'Personal Illustration',         client: 'Personal',     ratio: '1/1' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776725864/Maria-vaquero-venmocard-newco.mp4',                       sound: true,  label: 'Venmo, The New Company',        client: 'Venmo',        ratio: '3/4' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776726578/Maria-vaquero-far-out-event-motion.mov',                  sound: false, label: 'Far Out Event, Apple',          client: 'Apple',        ratio: '1/1' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776916993/maria-vaquero-xfinity-gsp2_ufw44v.png',                                label: 'Xfinity, GS&P + Man vs Machine', client: 'GS&P',         ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776919807/maria-vaquero-Apple-Watch-S9-new-Nike-Sport-Loop_hbnv0a.jpg',           label: 'Watch S9, Apple',               client: 'Apple',        ratio: '16/9' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776915986/maria-vaquero-apple-homepage_o9f1tr.mp4',                 sound: false, label: '50th Anniversary, Apple',       client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776921796/maria-vaquero-website-carbon-neutral_mx9dsg.jpg',                       label: 'Carbon Neutral logo, Apple',    client: 'Apple',        ratio: '16/9' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776742733/logomotion_720p_delaf2.mp4',                              sound: false, label: 'Carbon Neutral logo, Apple',    client: 'Apple',        ratio: '16/9' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776725866/Maria-vaquero-athletesmindset-nike.mp4',                  sound: false, label: 'Nike, The New Company',         client: 'Nike',         ratio: '16/9' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776713845/Maria-vaquero-iphone16-allcolors.mp4',                    sound: false, label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701939/Maria-vaquero-nike-athletes-mindset.jpg',                               label: 'Nike, The New Company',         client: 'Nike',         ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701769/Maria-Vaquero-carbon-neutral-watch.jpg',                                label: 'Watch S9, Apple',               client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776916314/maria-vaquero-iphone17e-packaging.001_k6dnn5.jpg',                     label: 'iPhone 17e, Apple',             client: 'Apple',        ratio: '16/9' },
  { type: 'mp4',   src: 'https://res.cloudinary.com/diurl6jzx/video/upload/q_auto,w_1280/v1776704038/maria-vaquero-Apple-Watch-S9-SiP.mp4',                    sound: false, label: 'Watch S9, Apple',               client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776916994/maria-vaquero-xfinity-gsp_n6ldxe.png',                                 label: 'Xfinity, GS&P + Man vs Machine', client: 'GS&P',         ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776919806/maria-vaquero-Apple-Watch-S9-new-bands-FineWoven-Modern-Buckle_v2gm0b.jpg', label: 'Watch S9, Apple',           client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776919805/maria-vaquero-Apple-Watch-S9-display_kzzlen.jpg',                       label: 'Watch S9, Apple',               client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701940/Maria-vaquero-wwdc25-horizontal-logo.jpg',                              label: 'WWDC25, Apple',                 client: 'Apple',        ratio: '16/9' },
  { type: 'image', src: 'https://res.cloudinary.com/diurl6jzx/image/upload/v1776701936/Maria-Vaquero-iphone16-horizontal.jpg',                                 label: 'iPhone 16, Apple',              client: 'Apple',        ratio: '16/9' },
];

/**
 * Re-sorts the flat projects array so that the masonry columns read
 * left-to-right when the grid has `columnCount` columns.
 *
 * The original JS did this at runtime; here we expose it as a pure
 * helper so it can be called in getStaticProps or at component level.
 */
export function sortForMasonry(items, columnCount = 4) {
  const n = items.length;
  const rows = Math.ceil(n / columnCount);
  const sorted = new Array(n);

  items.forEach((item, visualIndex) => {
    const col = visualIndex % columnCount;
    const row = Math.floor(visualIndex / columnCount);
    const storageIndex = col * rows + row;
    if (storageIndex < n) sorted[storageIndex] = item;
  });

  return sorted.filter(Boolean);
}

export default projects;
