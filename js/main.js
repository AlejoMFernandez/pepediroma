/* Pepe Di Roma — demo web · JS puro */
(function () {
  "use strict";
  var LOGO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 602 335" role="img" aria-label="Pepe Di Roma"><path fill="currentColor" fill-rule="evenodd" d="M527.8 186.3 523.2 188.6 518.8 191.6 514.0 195.5 509.4 200.5 506.2 205.0 502.8 211.2 500.5 217.2 499.1 222.8 498.5 227.2 498.2 231.2 498.2 327.2 498.6 329.0 499.3 329.9 500.8 330.2 510.2 330.2 511.2 329.8 511.8 329.0 512.0 328.0 512.0 291.5 512.5 286.5 513.5 281.5 514.7 278.2 516.9 273.8 519.0 270.5 522.5 266.2 525.8 263.4 529.8 260.7 533.2 258.8 537.8 257.0 541.5 256.1 546.5 255.5 550.0 255.5 554.8 256.1 558.2 257.0 562.2 258.4 567.0 260.9 569.5 262.6 573.0 265.5 576.1 268.8 578.6 272.2 581.2 277.0 582.8 281.2 583.6 284.8 584.2 289.5 584.2 325.8 584.6 328.8 585.3 329.8 587.0 330.2 595.5 330.2 596.5 330.1 597.4 329.2 597.8 328.0 597.8 228.0 597.4 224.0 596.2 218.8 595.1 215.0 592.9 210.0 591.1 206.5 587.9 201.8 585.2 198.5 582.0 195.2 579.0 192.6 575.2 189.9 569.8 186.8 565.2 185.0 559.8 183.3 555.2 182.4 551.8 182.0 544.5 182.0 541.0 182.4 535.5 183.6 530.5 185.2ZM518.5 211.2 520.4 208.8 523.8 205.2 529.2 200.9 532.2 199.3 536.0 197.7 541.8 196.1 548.2 195.5 554.5 196.1 558.2 197.0 561.5 198.1 567.8 201.4 570.8 203.6 573.8 206.3 576.9 210.0 580.4 215.5 582.5 220.5 583.6 224.8 584.2 229.5 584.4 251.8 583.9 254.7 583.2 255.2 582.2 255.1 574.5 249.4 568.8 246.3 564.8 244.7 561.2 243.5 557.5 242.6 549.5 241.8 546.5 241.8 537.8 242.9 532.8 244.2 529.8 245.4 522.5 248.9 514.8 254.7 513.8 255.1 513.0 255.0 512.2 254.0 512.0 252.5 512.0 231.2 512.5 226.5 513.3 222.5 515.1 217.2ZM308.4 197.5 304.4 202.8 302.6 206.0 300.6 210.2 298.4 217.5 297.5 224.8 297.5 327.8 297.8 329.0 298.2 329.6 298.8 330.1 299.8 330.2 309.2 330.2 310.7 329.8 311.4 328.5 311.5 226.5 311.9 222.2 312.8 218.2 314.6 213.8 317.2 209.2 320.2 205.5 324.0 202.3 328.0 199.8 332.2 197.9 336.2 196.9 341.5 196.2 347.0 196.7 351.5 197.8 354.8 199.1 360.0 202.0 364.8 206.1 367.1 208.8 369.4 212.0 371.6 216.5 372.6 220.0 373.0 224.2 373.0 233.0 372.8 235.2 372.8 328.2 373.1 329.0 373.8 329.8 375.2 330.2 384.5 330.2 385.8 330.0 386.4 329.6 386.8 329.0 387.0 328.0 387.0 222.5 387.8 218.0 389.8 213.2 392.3 209.2 397.0 204.2 400.0 201.8 402.8 200.1 407.2 197.9 411.8 196.6 416.5 196.0 420.8 196.2 426.2 197.2 430.2 198.8 435.8 202.0 438.8 204.5 441.7 207.8 444.4 211.8 446.3 216.0 447.6 220.5 448.2 225.0 448.3 328.2 448.9 329.6 449.5 330.1 450.5 330.2 460.0 330.2 461.0 330.1 461.8 329.6 462.2 329.0 462.5 327.8 462.5 224.5 462.1 220.5 461.2 216.0 460.3 213.0 458.2 207.8 454.8 201.8 451.9 198.0 449.0 194.8 446.2 192.4 441.8 189.1 439.0 187.6 434.5 185.4 429.8 183.8 424.8 182.7 421.2 182.2 412.2 182.4 408.0 183.1 403.8 184.2 400.2 185.5 395.0 188.1 389.2 192.1 384.5 196.8 381.4 200.4 380.0 201.2 378.5 200.5 375.0 196.2 370.8 192.2 367.0 189.4 362.0 186.6 356.2 184.2 350.8 182.9 346.0 182.2 341.5 182.1 338.5 182.3 333.0 183.1 327.2 184.7 322.8 186.6 318.5 188.9 315.2 191.1 311.2 194.5ZM191.2 182.0 183.5 182.9 177.8 184.1 172.2 185.7 164.5 188.8 159.0 191.6 152.2 196.0 145.5 201.7 140.5 206.8 136.0 212.2 131.9 218.5 128.1 226.0 125.7 232.0 123.8 238.2 122.4 245.5 121.8 253.0 121.8 259.2 122.4 266.8 123.6 272.8 126.2 281.8 128.8 288.0 132.4 294.8 135.5 299.5 139.7 304.8 145.5 310.8 151.8 315.9 157.8 319.9 164.0 323.2 170.2 325.8 176.2 327.7 183.5 329.3 192.5 330.2 199.5 330.2 206.5 329.6 213.5 328.2 222.8 325.3 229.2 322.4 235.2 319.1 240.5 315.5 244.8 312.0 250.2 306.8 255.9 299.8 258.6 295.8 262.2 289.5 266.1 280.2 268.2 272.8 269.3 266.8 270.0 260.0 270.0 252.2 269.4 245.5 268.2 239.5 266.3 232.8 263.4 225.5 260.1 219.0 256.2 213.0 252.3 208.0 247.8 203.0 240.8 197.1 234.8 192.9 228.0 189.2 222.8 186.9 215.5 184.5 208.2 182.9 200.8 182.0ZM193.5 196.0 197.8 196.0 206.0 196.9 211.2 198.1 215.8 199.4 222.8 202.4 226.8 204.7 231.8 208.1 237.2 212.8 240.0 215.5 244.0 220.2 247.6 225.8 250.7 231.8 252.3 235.8 254.2 242.0 255.1 246.2 255.8 252.0 255.8 259.8 255.3 264.5 254.2 270.0 251.8 277.8 249.4 283.0 246.6 288.0 242.6 293.5 238.5 298.2 234.5 301.9 230.0 305.2 224.5 308.7 219.0 311.4 212.2 313.8 206.5 315.1 200.0 316.0 196.2 316.2 191.5 316.0 185.0 315.1 180.0 313.9 173.2 311.6 168.5 309.4 163.5 306.6 158.8 303.1 154.5 299.5 148.9 293.2 146.3 289.8 142.8 284.0 140.4 279.0 138.0 272.0 137.1 268.5 136.4 264.5 135.8 257.2 136.0 250.8 136.9 244.8 138.0 240.0 139.9 234.2 141.6 230.5 144.7 224.8 147.6 220.5 151.8 215.5 155.5 211.8 161.0 207.3 166.2 203.9 171.2 201.3 175.2 199.7 181.2 197.8 185.5 196.9ZM4.8 182.7 4.2 183.5 4.0 184.5 4.0 328.0 4.4 329.4 5.2 330.1 6.2 330.2 15.5 330.2 16.9 329.8 17.7 328.8 18.0 327.0 18.0 287.2 19.1 281.5 19.9 278.8 21.1 276.2 23.8 271.8 26.0 269.0 29.8 265.4 32.8 263.2 37.8 260.3 41.8 258.8 47.0 257.4 52.2 256.8 54.0 256.8 58.5 257.2 62.8 258.0 66.8 259.4 71.8 261.9 74.2 263.6 77.2 266.0 80.9 269.8 83.6 273.5 85.4 276.8 87.3 281.2 88.4 285.2 89.0 289.5 89.0 326.5 89.4 329.0 90.3 329.9 91.5 330.2 100.8 330.2 102.4 329.8 103.1 329.0 103.2 328.0 103.2 289.0 102.4 282.8 100.3 275.5 98.4 271.0 95.3 265.5 91.9 260.8 88.8 257.2 83.5 252.8 79.2 249.9 72.8 246.4 71.9 245.7 71.6 245.0 71.9 243.8 75.1 239.0 76.9 235.8 78.1 233.0 79.9 226.8 80.5 221.8 80.5 217.5 79.2 210.0 77.3 204.8 76.2 202.2 74.6 199.5 70.8 194.5 68.5 192.2 65.0 189.3 59.0 185.7 55.8 184.4 51.2 183.1 47.5 182.4 42.5 182.0 7.2 182.0 5.8 182.2ZM55.2 199.9 58.5 202.4 61.7 206.0 63.9 209.8 64.8 211.8 65.7 214.8 66.2 218.5 66.2 221.8 65.9 224.8 64.8 228.8 62.8 232.8 59.5 236.8 57.0 238.8 54.2 240.4 49.5 242.5 40.0 244.5 34.0 246.6 30.0 248.6 26.8 250.4 20.2 255.2 19.5 255.4 18.8 255.3 18.3 254.8 18.0 253.5 18.0 199.0 18.5 197.3 19.5 196.5 21.0 196.2 43.2 196.2 47.0 196.7 49.5 197.2 52.8 198.6ZM452.9 94.8 450.8 100.8 449.1 107.0 448.2 112.2 447.5 120.2 447.5 150.2 447.8 151.7 448.8 152.6 451.5 153.0 594.5 153.0 596.5 152.7 597.1 152.3 597.7 151.5 598.0 149.5 598.0 145.2 597.8 143.0 597.8 116.8 597.3 112.5 596.4 106.8 594.7 100.2 592.9 95.0 590.0 88.5 586.3 82.0 583.2 77.5 577.0 70.2 573.0 66.5 569.5 63.5 561.5 58.1 556.8 55.6 550.0 52.6 544.5 50.8 536.2 48.9 529.0 48.0 521.2 47.8 514.5 48.2 508.5 49.1 504.5 50.0 498.5 51.8 493.0 53.9 488.2 56.1 480.0 61.0 473.5 65.9 468.0 71.2 464.6 75.0 461.5 79.0 458.7 83.2 455.8 88.2ZM463.6 108.8 465.4 102.5 467.6 97.2 470.2 92.2 473.5 87.0 476.9 82.8 481.0 78.5 486.8 73.8 491.0 70.9 498.0 67.3 502.8 65.4 509.0 63.6 513.5 62.7 520.0 62.0 525.2 62.0 532.2 62.7 536.8 63.6 544.0 65.7 549.5 68.1 554.2 70.6 558.0 73.1 563.5 77.5 567.8 81.8 571.7 86.5 574.3 90.2 576.2 93.5 579.4 100.2 581.0 104.8 582.6 111.5 583.5 118.8 583.4 136.8 582.9 137.7 582.2 138.2 579.8 138.8 464.0 138.6 463.2 138.3 462.5 137.5 462.0 135.8 462.0 120.0 462.7 113.5ZM447.5 8.0 447.5 16.0 447.7 17.5 448.2 18.4 448.8 18.8 450.8 19.2 594.8 19.2 596.2 19.0 597.1 18.6 597.6 17.8 597.8 16.8 597.8 11.5 598.0 8.5 597.6 6.0 597.1 5.3 596.2 4.8 592.5 4.5 451.0 4.5 449.2 4.8 448.4 5.2 447.8 6.2ZM336.5 7.2 331.8 9.3 328.0 11.5 322.8 15.8 319.7 19.0 317.0 22.5 314.6 26.5 312.4 31.5 311.3 35.0 310.6 38.0 310.0 43.8 310.0 46.5 310.6 52.5 311.3 55.8 312.2 58.5 314.3 63.5 317.5 68.8 320.8 72.8 325.7 77.3 326.3 78.5 326.2 79.2 325.7 80.0 321.0 84.5 316.7 90.0 312.9 97.2 311.3 102.2 310.3 107.2 310.0 113.8 310.6 119.8 311.5 123.2 313.0 127.5 314.6 131.0 316.7 134.5 319.4 138.2 322.0 141.1 325.8 144.4 329.2 146.8 333.8 149.2 337.5 150.7 344.0 152.4 351.0 153.0 386.0 153.0 387.5 152.8 389.8 153.0 392.2 152.6 393.1 151.9 393.5 150.8 393.5 141.0 393.2 139.8 392.2 138.9 391.2 138.8 351.8 138.8 344.8 137.9 340.2 136.4 336.0 134.0 332.0 130.8 328.4 126.2 326.4 122.5 324.9 117.5 324.2 112.5 324.6 108.2 325.7 104.2 327.3 100.2 329.3 97.0 332.5 93.2 335.2 91.0 338.5 89.0 342.0 87.4 345.8 86.4 353.8 85.8 378.8 85.8 379.5 85.6 380.2 85.0 380.7 83.8 380.8 74.5 380.2 72.6 379.5 71.9 378.5 71.6 349.2 71.5 344.2 70.7 338.5 68.5 335.2 66.5 332.0 63.7 329.3 60.5 327.6 58.0 326.4 55.5 325.3 52.2 324.6 49.2 324.3 45.0 324.7 41.2 325.3 38.2 326.1 35.8 328.1 31.8 329.9 29.2 332.2 26.5 335.2 24.0 337.8 22.4 340.2 21.1 344.2 19.8 348.8 19.0 390.8 19.0 392.0 18.8 393.1 18.1 393.5 16.8 393.5 7.0 393.3 6.0 392.2 4.9 390.2 4.5 350.0 4.5 342.5 5.4ZM261.2 5.6 258.0 4.9 253.2 4.5 217.0 4.5 214.5 4.9 213.8 5.6 213.4 6.2 213.2 7.5 213.2 150.2 213.7 151.9 215.0 152.7 217.0 153.0 225.2 152.8 226.6 152.3 227.3 151.2 227.5 149.8 227.5 109.2 228.1 104.2 229.0 100.8 230.3 97.5 232.8 93.2 235.0 90.5 239.2 86.6 241.5 85.2 246.5 82.6 253.5 80.1 260.5 78.5 266.0 76.8 271.0 74.7 275.0 72.2 279.0 69.0 281.4 66.5 283.2 64.2 284.9 61.5 286.7 58.0 288.2 53.8 289.4 49.0 289.8 45.8 289.8 39.0 289.5 36.5 288.9 33.2 287.8 29.5 285.9 25.0 282.5 19.5 279.8 16.2 277.0 13.6 272.2 10.1 267.8 7.8 265.0 6.7ZM264.8 22.4 268.5 25.3 271.3 28.5 273.7 32.8 275.2 37.0 275.8 40.5 275.8 44.2 275.4 47.2 274.4 51.0 272.1 55.5 269.2 59.0 266.2 61.5 264.2 62.7 259.5 64.8 249.2 67.0 243.2 69.1 240.2 70.6 235.8 73.2 230.0 77.5 229.0 77.9 228.3 77.7 227.6 77.0 227.4 76.2 227.4 21.2 227.9 20.0 229.0 19.1 230.5 18.8 253.0 18.8 256.5 19.1 259.0 19.8 261.8 20.8ZM125.8 7.6 121.5 9.7 117.5 12.3 113.5 15.5 110.1 19.0 107.5 22.5 105.1 26.5 102.9 31.5 102.0 34.2 101.1 38.2 100.5 43.5 100.5 47.0 101.4 53.8 102.9 59.0 104.8 63.5 108.0 68.8 111.2 72.8 116.2 77.3 116.8 78.5 116.8 79.2 116.3 79.9 111.5 84.5 107.1 90.0 103.9 96.0 101.8 102.0 101.1 105.0 100.8 108.2 100.5 114.0 101.1 119.8 102.9 126.0 105.1 131.0 108.3 136.2 111.0 139.5 113.8 142.2 116.8 144.7 120.2 147.1 125.0 149.5 129.5 151.2 135.5 152.6 141.5 153.0 174.0 153.0 183.0 152.6 183.7 151.9 184.1 150.8 184.2 142.8 183.8 140.0 182.8 139.0 181.5 138.8 142.8 138.8 136.2 138.1 130.8 136.4 128.2 135.1 125.8 133.5 122.0 130.2 118.9 126.2 117.3 123.5 116.4 121.5 115.1 116.5 114.8 113.0 115.1 108.2 116.0 104.5 117.6 100.8 119.5 97.5 123.0 93.3 125.8 91.0 129.0 88.9 132.0 87.7 136.5 86.4 139.8 86.0 145.2 85.8 169.0 85.8 170.0 85.6 170.8 84.9 171.2 84.0 171.2 74.5 170.7 72.6 170.0 71.9 169.0 71.6 139.5 71.5 136.8 71.1 134.0 70.5 129.8 68.9 125.8 66.5 122.5 63.8 120.9 62.0 118.4 58.5 116.9 55.5 115.8 52.2 115.1 49.5 114.8 45.2 115.1 41.0 115.8 38.2 116.6 35.8 118.6 31.8 120.4 29.2 122.8 26.5 125.8 24.0 128.2 22.4 130.8 21.2 134.0 20.0 136.5 19.4 139.5 19.0 182.5 18.9 183.2 18.5 183.8 17.8 184.2 15.2 184.2 9.0 183.8 6.0 183.4 5.3 182.8 4.9 180.8 4.5 140.0 4.5 133.0 5.4 129.5 6.2ZM51.8 5.6 48.5 4.9 43.5 4.5 7.8 4.5 5.0 5.0 4.4 5.5 4.1 6.2 4.0 150.8 4.4 152.1 5.5 152.8 7.2 153.0 15.8 152.8 17.2 152.3 17.8 151.2 18.0 150.0 18.0 108.8 19.0 102.8 20.2 99.0 21.7 95.8 23.8 92.5 27.0 89.0 30.0 86.5 32.5 84.9 37.0 82.6 42.2 80.6 52.0 78.2 56.8 76.8 62.8 73.9 65.5 72.2 69.5 69.0 73.5 64.5 76.4 59.8 78.5 54.8 80.1 47.8 80.5 43.8 80.5 40.0 80.1 36.5 79.2 32.2 78.1 28.8 76.4 25.0 73.7 20.5 71.4 17.5 69.0 15.0 66.0 12.4 60.0 8.6 56.8 7.2ZM55.2 22.4 58.2 24.8 61.7 28.5 64.2 32.8 65.5 36.2 66.2 41.0 66.1 45.8 65.5 49.0 64.8 51.0 63.1 54.8 61.1 57.5 59.8 59.0 57.0 61.3 54.2 62.9 50.0 64.8 39.8 67.0 33.8 69.1 27.0 72.7 20.5 77.5 19.8 77.8 18.8 77.7 18.2 77.0 18.0 76.0 18.0 21.5 18.4 20.0 19.5 19.1 21.0 18.8 43.5 18.8 47.0 19.1 49.5 19.8 52.8 21.1Z"/></svg>';
  var WA = "https://api.whatsapp.com/message/WBGK5C2JN6REC1?autoload=1&app_absent=0";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var isTouch = window.matchMedia("(hover: none)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fmt = function (n) { return "$ " + n.toLocaleString("es-AR"); };
  function icon(id) {
    var d = window.PASTA_ICONS[id]; if (!d) return "";
    return '<svg viewBox="' + d.vb + '" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="' + d.d + '"/></svg>';
  }
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("on");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("on"); }, 3000);
  }
  $$("[data-logo],[data-logo-red],[data-logo-white]").forEach(function (el) { el.innerHTML = LOGO; });
  $$("i[data-icon]").forEach(function (el) { el.innerHTML = icon(el.dataset.icon); });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- intro D ---------- */
  var heroStarted = false;
  function startSite() {
    if (heroStarted) return; heroStarted = true;
    document.body.classList.remove("intro-on", "lock");
    requestAnimationFrame(function () { document.body.classList.add("ready"); });
    startReveal(); heroCycle();
  }
  (function () {
    var el = $("#intro"), seen = false;
    try { seen = sessionStorage.getItem("pdr-intro") === "1"; } catch (e) {}
    function finish() {
      el.classList.add("out"); startSite();
      setTimeout(function () { el.classList.add("gone"); }, 1100);
      try { sessionStorage.setItem("pdr-intro", "1"); } catch (e) {}
    }
    if (reduce || seen) { el.classList.add("gone"); startSite(); return; }
    document.body.classList.add("lock");
    requestAnimationFrame(function () { el.classList.add("play"); });
    var t = setTimeout(finish, 2600);
    $("#introSkip").addEventListener("click", function () { clearTimeout(t); finish(); });
  })();

  /* ---------- reveal ---------- */
  var io;
  function startReveal() {
    io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(function (r) { io.observe(r); });
  }

  /* ---------- nav ---------- */
  var nav = $("#nav"), burger = $("#burger"), fab = $("#fab");
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > window.innerHeight * 0.6);
    var c = $("#caja").getBoundingClientRect();
    fab.classList.toggle("on", y > window.innerHeight * 0.8 && !(c.top < window.innerHeight && c.bottom > 0));
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  function closeNav() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); document.body.classList.remove("lock"); }
  burger.addEventListener("click", function () {
    var o = !nav.classList.contains("open");
    nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", String(o)); document.body.classList.toggle("lock", o);
  });
  $$("#navLinks a").forEach(function (a) { a.addEventListener("click", closeNav); });

  /* ---------- hero: fotos que rotan (probar cuál queda) ---------- */
  var heroTimer;
  function heroCycle() {
    var imgs = $$("#heroBg img"), dots = $("#heroDots"), i = 0;
    var q = parseInt(new URLSearchParams(location.search).get("foto"), 10);
    dots.innerHTML = imgs.map(function (im, k) { return '<button type="button" aria-label="Foto ' + (k + 1) + '" aria-current="' + (k === 0) + '"></button>'; }).join("");
    function show(k) {
      imgs[i].classList.remove("on"); i = k; imgs[i].classList.add("on");
      $$("button", dots).forEach(function (b, j) { b.setAttribute("aria-current", String(j === i)); });
    }
    if (q >= 1 && q <= imgs.length) { show(q - 1); return; }   // ?foto=N fija una
    var go = function () { heroTimer = setInterval(function () { show((i + 1) % imgs.length); }, 7000); };
    dots.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      clearInterval(heroTimer); show($$("button", dots).indexOf(b)); go();
    });
    go();
  }

  /* ---------- lightbox genérico ---------- */
  var LB = { list: [], i: 0 };
  var lb = $("#lightbox");
  function lbOpen(list, i) { LB.list = list; LB.i = (i + list.length) % list.length; $("#lbImg").src = "img/" + list[LB.i][0] + ".webp"; $("#lbImg").alt = list[LB.i][1]; $("#lbCap").textContent = list[LB.i][1]; lb.hidden = false; document.body.classList.add("lock"); $("#lbPrev").hidden = $("#lbNext").hidden = list.length < 2; }
  function lbClose() { lb.hidden = true; document.body.classList.remove("lock"); }
  $("#lbClose").addEventListener("click", lbClose);
  $("#lbPrev").addEventListener("click", function () { lbOpen(LB.list, LB.i - 1); });
  $("#lbNext").addEventListener("click", function () { lbOpen(LB.list, LB.i + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.tagName === "FIGURE") lbClose(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") lbClose(); if (e.key === "ArrowLeft") lbOpen(LB.list, LB.i - 1); if (e.key === "ArrowRight") lbOpen(LB.list, LB.i + 1);
  });
  var tx = 0; lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { var d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50 && LB.list.length > 1) lbOpen(LB.list, LB.i + (d < 0 ? 1 : -1)); });

  /* ---------- fatto a mano ---------- */
  var PASOS = [["paso-1", "01 · Il ripieno — el relleno, a manga y uno por uno"], ["paso-2", "02 · La sfoglia — masa al huevo, estirada fina"], ["paso-3", "03 · La piega — se dobla sobre el relleno"], ["paso-4", "04 · Il gesto — un pliegue más y nace la forma"], ["paso-5", "05 · Il fuoco — sartén, vapor y oliva"], ["paso-6", "06 · Il verde — hojas frescas para terminar"], ["paso-7", "07 · Il piatto — y a la mesa"]];
  $$(".cs").forEach(function (f) { f.addEventListener("click", function () { lbOpen(PASOS, +f.dataset.i); }); });

  /* ---------- carta ---------- */
  (function () {
    var M = window.MENU, keys = ["colazione", "pranzo", "mostrador", "bar", "vini"];
    var DEF = { colazione: ["sfogliatelle", "Sfogliatella"], pranzo: ["cappelletti-ossobuco", "Cappelletti di ossobuco"], mostrador: ["caja-anolini", "Anolini para llevar"], bar: ["interior-lampara", "La casa"], vini: ["plato-delantal", "Della casa"] };
    var cur = "pranzo", open = 0, list = $("#cartaList"), tabs = $("#tabs"), search = $("#search");
    tabs.innerHTML = keys.map(function (k) { return '<button type="button" class="tab" role="tab" aria-selected="' + (k === cur) + '" data-k="' + k + '">' + M[k].label + "</button>"; }).join("");
    function itemHTML(it, g) {
      var o = it[3] || {}, tags = "";
      if (o.tags && o.tags.indexOf("p") > -1) tags += '<span class="tag tag-p">picante</span>';
      if (o.tags && o.tags.indexOf("v") > -1) tags += '<span class="tag tag-v">veggie</span>';
      return '<div class="item' + (o.img ? ' has-img" data-img="' + o.img : "") + '" data-name="' + it[0] + '">' +
        (g ? '<span class="item-g">' + g + "</span>" : "") +
        '<div class="item-top"><span class="item-name">' + it[0] + tags + '</span><span class="item-dots"></span><span class="item-price">' + fmt(it[2]) + "</span></div>" +
        (it[1] ? '<p class="item-desc">' + it[1] + "</p>" : "") + "</div>";
    }
    function groupImg(g) { for (var i = 0; i < g.items.length; i++) { var o = g.items[i][3]; if (o && o.img) return [o.img, g.items[i][0]]; } return DEF[cur]; }
    function render() {
      var gs = M[cur].groups;
      list.innerHTML = '<div class="acc">' + gs.map(function (g, i) {
        return '<div class="acc-sec' + (i === open ? " open" : "") + '" data-i="' + i + '"><button type="button" class="acc-btn" aria-expanded="' + (i === open) + '"><span class="t">' + g.t + (g.s ? "<small>" + g.s + "</small>" : "") + '</span><span class="n">' + g.items.length + '</span><span class="pm" aria-hidden="true"></span></button>' +
          '<div class="acc-body"><div class="acc-inner"><div class="items">' + g.items.map(function (it) { return itemHTML(it); }).join("") + "</div>" + (g.note ? '<p class="results-label" style="font-size:18px;padding:0 6px 20px">' + g.note + "</p>" : "") + "</div></div></div>";
      }).join("") + "</div>";
      stagger();
      var gi = open != null ? groupImg(gs[open]) : DEF[cur]; setVisual(gi[0], gi[1]);
    }
    function stagger() { $$(".acc-sec.open .item", list).forEach(function (el, i) { el.style.transitionDelay = Math.min(i * 0.04, 0.5) + "s"; }); }
    function renderSearch(q) {
      var res = [], ql = q.toLowerCase();
      keys.forEach(function (k) { M[k].groups.forEach(function (g) { g.items.forEach(function (it) {
        var o = it[3] || {}, hay = (it[0] + " " + it[1] + " " + (o.tags && o.tags.indexOf("v") > -1 ? "veggie vegetariano" : "") + (o.tags && o.tags.indexOf("p") > -1 ? " picante" : "")).toLowerCase();
        if (hay.indexOf(ql) > -1) res.push(itemHTML(it, M[k].label + " · " + g.t));
      }); }); });
      list.innerHTML = '<div class="results"><p class="results-label">' + (res.length ? res.length + (res.length === 1 ? " resultado" : " resultados") + " para “" + q + "”" : "Nada con “" + q + "”. Probá otra palabra.") + '</p><div class="items">' + res.join("") + "</div></div>";
    }
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest(".tab"); if (!b) return;
      cur = b.dataset.k; open = 0; search.value = "";
      $$(".tab", tabs).forEach(function (t) { t.setAttribute("aria-selected", String(t === b)); });
      b.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      render();
    });
    list.addEventListener("click", function (e) {
      var b = e.target.closest(".acc-btn");
      if (b) {
        var sec = b.parentNode, i = +sec.dataset.i, was = sec.classList.contains("open");
        $$(".acc-sec", list).forEach(function (s) { s.classList.remove("open"); $(".acc-btn", s).setAttribute("aria-expanded", "false"); });
        open = was ? null : i;
        if (!was) { sec.classList.add("open"); b.setAttribute("aria-expanded", "true"); stagger(); var gi = groupImg(M[cur].groups[i]); setVisual(gi[0], gi[1]);
          setTimeout(function () { var r = sec.getBoundingClientRect(); if (r.top < 70 || r.top > window.innerHeight * 0.7) window.scrollTo({ top: window.scrollY + r.top - 90, behavior: "smooth" }); }, 120); }
        return;
      }
      var it = e.target.closest(".has-img");
      if (it && (isTouch || window.innerWidth < 900)) lbOpen([[it.dataset.img, it.dataset.name]], 0);
    });
    var st; search.addEventListener("input", function () {
      clearTimeout(st); var q = search.value.trim();
      st = setTimeout(function () { if (q.length > 1) renderSearch(q); else render(); }, 120);
    });
    // visual lateral
    var arch = $("#cvArch"), cap = $("#cvCap"), shown = "";
    function setVisual(img, name) {
      if (img === shown) return; shown = img;
      var imgs = $$("img", arch), on = imgs[0].classList.contains("on") ? imgs[0] : imgs[1], off = on === imgs[0] ? imgs[1] : imgs[0];
      off.onload = function () { off.classList.add("on"); on.classList.remove("on"); };
      off.src = "img/" + img + ".webp";
      cap.style.opacity = 0; setTimeout(function () { cap.textContent = name; cap.style.opacity = 1; }, 300);
    }
    list.addEventListener("mouseover", function (e) { var it = e.target.closest(".has-img"); if (it && !isTouch) setVisual(it.dataset.img, it.dataset.name); });
    render();
  })();

  /* ---------- le paste: catálogo + fondo hirviendo ---------- */
  var TIME = { anolini: "4′ a 5′", cappelacci: "4′ a 5′", caramelle: "4′ a 5′", casoncelli: "4′ a 5′", tortelloni: "4′ a 5′", agnolotti: "4′ a 5′", capelletti: "4′ a 5′", tortelli: "4′ a 5′", spaghetti: "2′ a 3′", mafaldine: "3′ a 4′", radiatori: "2′ a 3′", maccheroni: "3′ a 4′", fusilli: "2′ a 3′", mezze_maniche: "3′ a 4′", gnocchi: "2′" };
  var G = window.MENU.mostrador.groups;
  var RIPIENE = G[0].items.filter(function (i) { return i[3] && i[3].shape; });
  var SEMPLICI = G[1].items;
  (function () {
    var boil = $("#boil"), h = "";
    var shapes = ["spaghetti", "anolini", "mafaldine", "caramelle", "fusilli", "tortelli", "radiatori", "cappelacci"];
    for (var i = 0; i < 14; i++) { var s = 8 + (i * 7) % 22; h += '<span class="b" style="left:' + ((i * 37) % 100) + "%;width:" + s + "px;height:" + s + "px;animation-duration:" + (9 + (i % 5) * 2.5) + "s;animation-delay:-" + (i * 1.3) + 's"></span>'; }
    shapes.forEach(function (k, i) { h += '<span class="f" style="left:' + (4 + i * 12.5) + "%;top:" + (12 + ((i * 29) % 70)) + "%;width:" + (60 + (i % 3) * 30) + "px;--r:" + ((i * 47) % 90 - 45) + "deg;animation-duration:" + (5 + i % 4) + "s;animation-delay:-" + i + 's">' + icon(k) + "</span>"; });
    boil.innerHTML = h;
    var grid = $("#pgrid"), kind = "ripiene";
    function card(it, i) {
      var o = it[3] || {}, simple = kind === "semplici";
      return '<div class="pcard" style="animation-delay:' + (i * 0.05) + 's"><div class="pcard-in">' +
        '<div class="pface pfront"><span class="pflip" aria-hidden="true">i</span><div class="ic">' + icon(o.shape) + "</div><h3>" + it[0] + "</h3><p>" + (it[1] || "Pasta extruida en bronce") + "</p></div>" +
        '<div class="pface pback"><h3>' + it[0] + "</h3><dl>" +
        (simple ? "<dt>Tipo</dt><dd>Extruida en bronce</dd>" : "<dt>Relleno</dt><dd>" + it[1] + "</dd>") +
        "<dt>Porción</dt><dd>" + (simple ? "180 g" : "200 g") + "</dd><dt>Cocción</dt><dd>" + TIME[o.shape] + "</dd><dt>Heladera</dt><dd>" + (simple ? "4 días" : "2 días") + "</dd><dt>Freezer</dt><dd>3 meses</dd></dl>" +
        '<p class="price">' + fmt(it[2]) + '</p></div></div></div>';
    }
    function render() { var arr = kind === "ripiene" ? RIPIENE : SEMPLICI; grid.innerHTML = arr.map(card).join(""); }
    $("#ptabs").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return; kind = b.dataset.k;
      $$("#ptabs button").forEach(function (t) { t.setAttribute("aria-selected", String(t === b)); }); render();
    });
    grid.addEventListener("click", function (e) {
      var c = e.target.closest(".pcard"); if (c && (isTouch || window.innerWidth < 900)) {
        var was = c.classList.contains("flip"); $$(".pcard.flip", grid).forEach(function (x) { x.classList.remove("flip"); }); if (!was) c.classList.add("flip");
      }
    });
    render();
  })();

  /* ---------- armá tu caja (con límite) ---------- */
  (function () {
    var cats = [RIPIENE, SEMPLICI, G[2].items], cat = 0, size = 4, slots = [], potes = [], MAXP = 2;
    function find(n) { for (var c = 0; c < cats.length; c++) for (var i = 0; i < cats[c].length; i++) if (cats[c][i][0] === n) return { it: cats[c][i], sauce: c === 2 }; }
    function full() { return slots.length >= size; }
    function list() {
      $("#pickList").innerHTML = cats[cat].map(function (it) {
        var o = it[3] || {}, sauce = cat === 2, dis = sauce ? potes.length >= MAXP || potes.indexOf(it[0]) > -1 : full();
        return '<li class="pick"><span class="ic' + (sauce ? " pote" : "") + '">' + (sauce ? it[0].charAt(0) : icon(o.shape)) + "</span><span><b>" + it[0] + "</b><small>" + (it[1] || (cat === 1 ? "Extruida en bronce · 180 g" : "")) + '</small></span><span class="pr">' + fmt(it[2]) + '</span><button type="button" class="add" aria-label="Sumar ' + it[0] + '" data-n="' + it[0] + '"' + (dis ? " disabled" : "") + ">+</button></li>";
      }).join("");
    }
    function draw(animIdx) {
      var h = "";
      for (var i = 0; i < size; i++) {
        var s = slots[i];
        h += s ? '<div class="slot full">' + (i === animIdx ? icon(s.shape) : icon(s.shape).replace("<svg", '<svg style="animation:none"')) + '<span class="lbl">' + s.n + '</span><button type="button" class="x" aria-label="Quitar ' + s.n + '" data-i="' + i + '">×</button></div>' : '<div class="slot"></div>';
      }
      $("#slots").innerHTML = h;
      $("#slots").style.gridTemplateColumns = "repeat(4,minmax(0,1fr))";
      $("#potes").innerHTML = potes.map(function (p, i) { return '<span class="pote">Salsa ' + p + ' <button type="button" class="x" aria-label="Quitar salsa ' + p + '" data-p="' + i + '">×</button></span>'; }).join("");
      $("#boxCount").textContent = slots.length + " / " + size;
      var tot = slots.reduce(function (a, s) { return a + s.p; }, 0) + potes.reduce(function (a, p) { return a + find(p).it[2]; }, 0);
      $("#total").textContent = fmt(tot);
      $("#send").disabled = !slots.length && !potes.length;
      $("#boxMsg").textContent = full() ? (size === 4 ? "Caja llena. Pasá a la caja grande o sacá una porción." : "Caja llena. Para pedidos más grandes, escribinos por WhatsApp.") : (slots.length ? "Te quedan " + (size - slots.length) + (size - slots.length === 1 ? " lugar." : " lugares.") : "Elegí hasta " + size + " porciones y hasta 2 salsas.");
      list();
    }
    window.PDR_addToBox = function (n, fromCatalog) {
      var f = find(n); if (!f) return;
      if (f.sauce) { if (potes.length < MAXP && potes.indexOf(n) < 0) potes.push(n); draw(); return; }
      if (full()) { toast("Tu caja ya está llena (" + size + " porciones)."); return; }
      slots.push({ n: n, p: f.it[2], shape: f.it[3].shape }); draw(slots.length - 1);
      if (fromCatalog) toast(n + " sumado a tu caja · " + slots.length + "/" + size);
    };
    $("#pickTabs").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return; cat = +b.dataset.k;
      $$("#pickTabs button").forEach(function (t) { t.setAttribute("aria-selected", String(t === b)); }); list();
    });
    $("#pickList").addEventListener("click", function (e) { var b = e.target.closest(".add"); if (b && !b.disabled) window.PDR_addToBox(b.dataset.n); });
    $("#box").addEventListener("click", function (e) {
      var x = e.target.closest(".x"); if (!x) return;
      if (x.dataset.i != null) slots.splice(+x.dataset.i, 1); else potes.splice(+x.dataset.p, 1);
      draw();
    });
    $("#sizes").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return; size = +b.dataset.s;
      if (slots.length > size) { slots = slots.slice(0, size); toast("Quedaron las primeras " + size + " porciones."); }
      $$("#sizes button").forEach(function (t) { t.setAttribute("aria-checked", String(t === b)); }); draw();
    });
    $("#send").addEventListener("click", function () {
      var count = {}; slots.forEach(function (s) { count[s.n] = (count[s.n] || 0) + 1; });
      var t = "¡Hola Pepe Di Roma! Quiero una caja " + (size === 4 ? "chica (4 porciones)" : "grande (8 porciones)") + " para retirar:\n";
      Object.keys(count).forEach(function (k) { t += "• " + count[k] + " × " + k + "\n"; });
      potes.forEach(function (p) { t += "• Salsa " + p + "\n"; });
      t += "Total estimado: " + $("#total").textContent + "\n¿Me confirman disponibilidad y horario de retiro? ¡Gracias!";
      var done = function () { toast("Pedido copiado. Pegalo en el chat de WhatsApp."); setTimeout(function () { window.open(WA, "_blank", "noopener"); }, 700); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(done, done);
      else { var ta = document.createElement("textarea"); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) {} ta.remove(); done(); }
    });
    draw();
  })();

  /* ---------- gnocchi del 29 ---------- */
  (function () {
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var now = new Date(), s, label;
      if (now.getDate() === 29) {
        s = Math.floor((new Date(now.getFullYear(), now.getMonth(), 30) - now) / 1000); label = "¡Hoy es 29! Hay gnocchi del 29.";
      } else {
        var t; for (var k = 0; k < 14; k++) { var d = new Date(now.getFullYear(), now.getMonth() + k, 29); if (d.getDate() === 29 && d > now) { t = d; break; } }
        s = Math.floor((t - now) / 1000); label = "para el próximo 29 · " + t.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" });
      }
      $("#cdD").textContent = pad(Math.floor(s / 86400)); $("#cdH").textContent = pad(Math.floor(s / 3600) % 24);
      $("#cdM").textContent = pad(Math.floor(s / 60) % 60); $("#cdS").textContent = pad(s % 60); $("#cdLabel").textContent = label;
    }
    tick(); setInterval(tick, 1000);
  })();

  /* ---------- la tavola ---------- */
  (function () {
    var T = [["cappelletti-ossobuco", "Cappelletti di ossobuco"], ["focacce-torre", "Le schiacciate"], ["tiramisu-pistacchio", "Tiramisù al pistacchio"], ["interior-lampara", "La casa"],
      ["pizza-mortadella", "Pizza alla mortadella"], ["anolini-papel", "Anolini"], ["chef-pan", "Masa madre"], ["asparagi", "Asparagi alla carbonara"], ["focacce-silla", "Schiacciata, per portare via"],
      ["tagliata", "Tagliata di manzo"], ["cioccolato-kumquat", "Cioccolato 70% e kumquat"], ["mezzelune-papel", "Recién cerradas"], ["gnocchi-remolacha", "Gnocchi de remolacha"],
      ["sfogliatelle", "Sfogliatelle"], ["spaghetti-polpette", "Spaghetti al sugo di polpette"], ["pavlova", "Pavlova"], ["tortelli-bandeja", "Tortelli verdes"], ["cocinero", "En la cocina"], ["fiori", "Fiori de remolacha y cúrcuma"], ["crostata", "Crostata di formaggio"]];
    var strip = $("#strip");
    strip.innerHTML = T.map(function (g, i) { return '<figure class="tile" data-i="' + i + '"><div class="ph-w"><img src="img/' + g[0] + '.webp" alt="' + g[1] + '" loading="lazy" draggable="false"></div><p>' + g[1] + "</p></figure>"; }).join("");
    var down = false, sx = 0, sl = 0, moved = 0, v = 0, lx = 0, raf;
    strip.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; moved = 0; sx = lx = e.clientX; sl = strip.scrollLeft; v = 0; cancelAnimationFrame(raf); strip.classList.add("drag"); });
    window.addEventListener("pointermove", function (e) { if (!down) return; var dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); v = e.clientX - lx; lx = e.clientX; strip.scrollLeft = sl - dx; });
    window.addEventListener("pointerup", function () { if (!down) return; down = false; strip.classList.remove("drag"); (function glide() { v *= 0.94; strip.scrollLeft -= v; if (Math.abs(v) > 0.5) raf = requestAnimationFrame(glide); })(); });
    strip.addEventListener("click", function (e) { var t = e.target.closest(".tile"); if (t && moved < 6) lbOpen(T, +t.dataset.i); });
  })();
})();
