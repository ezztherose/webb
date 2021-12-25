const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let ww = window.innerWidth;
let hh = window.innerHeight;

let charArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "А",
  "В",
  "Г",
  "Д",
  "Є",
  "Ѕ",
  "З",
  "И",
  "Ѳ",
  "І",
  "К",
  "Л",
  "М",
  "Н",
  "Ѯ",
  "Ѻ",
  "П",
  "Ч",
  "Р",
  "С",
  "Т",
  "Ѵ",
  "Ф",
  "Х",
  "Ѱ",
  "Ѿ",
  "Ц",
];

let max_char_c = 300;
let fall_char_arr = [];
let font_size = 12;
let max_col = ww / font_size;
canvas.width = ww;
canvas.height = hh;

let frames = 0;

class FallingChar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.value =
      charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
    this.speed = (Math.random() * font_size * 3) / 4 + (font_size * 3) / 4;

    ctx.fillStyle = "rgba(0,255,0)";
    ctx.font = font_size + "px san-serif";
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;

    if (this.y > hh) {
      this.y = (Math.random() * hh) / 2 - 50;
      this.x = Math.floor(Math.random() * max_col) * font_size;
      this.speed = (-Math.random() * font_size * 3) / 4 + (font_size * 3) / 4;
    }
  }
}

let update = () => {
  if (fall_char_arr.length < max_char_c) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * max_col) * font_size,
      (Math.random() * hh) / 2 - 50
    );
    fall_char_arr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, ww, hh);
  for (let i = 0; i < fall_char_arr.length && frames % 2 == 0; i++) {
    fall_char_arr[i].draw(ctx);
  }

  requestAnimationFrame(update);
  frames++;
};

update();