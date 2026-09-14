export interface PhotoEntry {
  src: string;
  alt: string;
  /** Real pixel dimensions so the strip can size each photo's box to its
   * actual aspect ratio instead of cropping it to fit a fixed shape. */
  width: number;
  height: number;
}

/**
 * Photos section (after Services on the homepage) — a scrollable strip
 * the owner can keep adding to at any time. To add a new photo or poster:
 * 1. Drop the image file into public/gallery/everyday/
 * 2. Add an entry below (anywhere — order is display order, top to
 *    bottom = left to right in the strip). Get width/height from the
 *    file itself (e.g. `sips -g pixelWidth -g pixelHeight <file>` on
 *    macOS) so the photo displays uncropped at its real proportions.
 * alt text isn't shown on screen (just used for accessibility), so it
 * can stay short and functional.
 */
export const photos: PhotoEntry[] = [
  { src: "/gallery/everyday/1-infant-playing-with-a-toy-windmill.jpg", alt: "1 infant playing with a toy windmill", width: 1518, height: 1599 },
  { src: "/gallery/everyday/1-infant-playing-with-cut-out-shape-board.jpg", alt: "1 infant playing with cut out shape board", width: 1600, height: 900 },
  { src: "/gallery/everyday/1-infant-reading.jpg", alt: "1 infant reading", width: 1600, height: 1200 },
  { src: "/gallery/everyday/1-infant-sitting-and-reading.jpg", alt: "1 infant sitting and reading", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-infant-sleeping-in-cradle.jpg", alt: "1 infant sleeping in cradle", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-infant-sliding-down-slide.jpg", alt: "1 infant sliding down slide", width: 1600, height: 1200 },
  { src: "/gallery/everyday/1-kid-building-a-tower-with-jenga-blocks.jpg", alt: "1 kid building a tower with jenga blocks", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-kid-eating-funny.jpg", alt: "1 kid eating funny", width: 1600, height: 1200 },
  { src: "/gallery/everyday/1-kid-making-a-block-tower.jpg", alt: "1 kid making a block tower", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-kid-playing-doctor-with-a-doll.jpg", alt: "1 kid playing doctor with a doll", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-kid-playing-in-ball-pit.jpg", alt: "1 kid playing in ball pit", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-kid-showing-baby-doll-smiling.jpg", alt: "1 kid showing baby doll smiling", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-kid-smiling-for-camera-in-front-of-birthday-celebration.jpg", alt: "1 kid smiling for camera in front of birthday celebration", width: 1600, height: 1200 },
  { src: "/gallery/everyday/1-kid-throwing-soccer-ball.jpg", alt: "1 kid throwing soccer ball", width: 1200, height: 1600 },
  { src: "/gallery/everyday/1-kid-tower-build.jpg", alt: "1 kid tower build", width: 1200, height: 1600 },
  { src: "/gallery/everyday/2-girls-feeding-a-baby-doll.jpg", alt: "2 girls feeding a baby doll", width: 1200, height: 1600 },
  { src: "/gallery/everyday/2-infants-crawling-and-playing-together.jpg", alt: "2 infants crawling and playing together", width: 1200, height: 1600 },
  { src: "/gallery/everyday/2-kids-hugging-and-smiling-for-the-camera-on-a-chair.jpg", alt: "2 kids hugging and smiling for the camera on a chair", width: 1243, height: 1600 },
  { src: "/gallery/everyday/2-kids-hugging-and-smiling-for-the-camera-on-top-of-a-toy-car.jpg", alt: "2 kids hugging and smiling for the camera on top of a toy car", width: 1200, height: 1600 },
  { src: "/gallery/everyday/2-kids-peaking-through-the-windows-of-outdoor-mini-house.jpg", alt: "2 kids peaking through the windows of outdoor mini house", width: 1200, height: 1600 },
  { src: "/gallery/everyday/2-kids-playing-in-diy-ball-pool.jpg", alt: "2 kids playing in diy ball pool", width: 1600, height: 1200 },
  { src: "/gallery/everyday/2-kids-playing-in-outdoor-mini-house.jpg", alt: "2 kids playing in outdoor mini house", width: 1600, height: 1200 },
  { src: "/gallery/everyday/2-kids-waiting-to-go-home-in-jackets.jpg", alt: "2 kids waiting to go home in jackets", width: 1200, height: 1600 },
  { src: "/gallery/everyday/3-girls-hugging-and-smiling-for-the-camera.jpg", alt: "3 girls hugging and smiling for the camera", width: 1160, height: 1599 },
  { src: "/gallery/everyday/3-kids-hugging-and-smiling-for-the-camera.jpg", alt: "3 kids hugging and smiling for the camera", width: 1600, height: 1200 },
  { src: "/gallery/everyday/3-kids-playing-outside-1-peaking-at-the-camera.jpg", alt: "3 kids playing outside 1 peaking at the camera", width: 1200, height: 1600 },
  { src: "/gallery/everyday/4-kids-playing-in-outdoor-mini-house.jpg", alt: "4 kids playing in outdoor mini house", width: 1600, height: 1200 },
  { src: "/gallery/everyday/4-kids-reading.jpg", alt: "4 kids reading", width: 1600, height: 1200 },
  { src: "/gallery/everyday/5-kids-playing-outside.jpg", alt: "5 kids playing outside", width: 1600, height: 1200 },
  { src: "/gallery/everyday/5-kids-with-goodie-bags.jpg", alt: "5 kids with goodie bags", width: 1600, height: 1200 },
  { src: "/gallery/everyday/birthday-girl-cutting-cake.jpg", alt: "Birthday girl cutting cake", width: 1200, height: 1600 },
  { src: "/gallery/everyday/blocks-on-all-5-fingers.jpg", alt: "Blocks on all 5 fingers", width: 1200, height: 1600 },
  { src: "/gallery/everyday/chuchu-train-with-chairs-and-kids.jpg", alt: "Chuchu train with chairs and kids", width: 1600, height: 1208 },
  { src: "/gallery/everyday/dinosaur-attacking-fort-build-by-kids.jpg", alt: "Dinosaur attacking fort build by kids", width: 1600, height: 1200 },
  { src: "/gallery/everyday/funny-eating-photo-single-kid.jpg", alt: "Funny eating photo single kid", width: 934, height: 1600 },
  { src: "/gallery/everyday/funny-picture-of-infant-putting-cup-inside-tea-pot.jpg", alt: "Funny picture of infant putting cup inside tea pot", width: 1200, height: 1600 },
  { src: "/gallery/everyday/funny-picture-of-kid-eating.jpg", alt: "Funny picture of kid eating", width: 1200, height: 1600 },
  { src: "/gallery/everyday/infant-colouring.jpg", alt: "Infant colouring", width: 1200, height: 1600 },
  { src: "/gallery/everyday/infant-cutting-up-toy-vegetables.jpg", alt: "Infant cutting up toy vegetables", width: 1200, height: 1600 },
  { src: "/gallery/everyday/infant-doodling.jpg", alt: "Infant doodling", width: 1200, height: 1600 },
  { src: "/gallery/everyday/infant-playing-with-cut-out-shape-board.jpg", alt: "Infant playing with cut out shape board", width: 1200, height: 1600 },
  { src: "/gallery/everyday/infant-playing-with-tower-of-hanoi.jpg", alt: "Infant playing with tower of hanoi", width: 1200, height: 1600 },
  { src: "/gallery/everyday/infant-standing-in-activity-table.jpg", alt: "Infant standing in activity table", width: 1600, height: 1200 },
  { src: "/gallery/everyday/kid-crawling-through-tunnel.jpg", alt: "Kid crawling through tunnel", width: 1200, height: 1600 },
  { src: "/gallery/everyday/kid-face-dirty-playing-with-doll-funny.jpg", alt: "Kid face dirty playing with doll funny", width: 900, height: 1600 },
  { src: "/gallery/everyday/kid-hugging-infant-and-smiling-for-camera-with-gift-in-hand.jpg", alt: "Kid hugging infant and smiling for camera with gift in hand", width: 1200, height: 1600 },
  { src: "/gallery/everyday/kid-in-cradle.jpg", alt: "Kid in cradle", width: 1600, height: 1200 },
  { src: "/gallery/everyday/kid-playing-with-toy-kitchen.jpg", alt: "Kid playing with toy kitchen", width: 1600, height: 1200 },
  { src: "/gallery/everyday/kids-making-alphabet-train.jpg", alt: "Kids making alphabet train", width: 1200, height: 1600 },
  { src: "/gallery/everyday/kids-on-top-of-outdoor-caterpillar-tunnel.jpg", alt: "Kids on top of outdoor caterpillar tunnel", width: 1600, height: 1200 },
  { src: "/gallery/everyday/kids-playing-game.jpg", alt: "Kids playing game", width: 1331, height: 928 },
  { src: "/gallery/everyday/old-graduation-picture-of-one-of-the-kids.jpg", alt: "Old graduation picture of one of the kids", width: 1200, height: 1600 },
  { src: "/gallery/everyday/photo-collage-of-kids-hugging-and-smiling-for-the-camera-together.jpg", alt: "Photo collage of kids hugging and smiling for the camera together", width: 1281, height: 1600 },
  { src: "/gallery/everyday/playing-with-rocks-3-girls.jpg", alt: "Playing with rocks 3 girls", width: 1600, height: 1200 },
  { src: "/gallery/everyday/two-kids-staring-at-each-other-funny.jpg", alt: "Two kids staring at each other funny", width: 1200, height: 1600 },
];
