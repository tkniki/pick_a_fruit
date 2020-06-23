console.log("hello");

let logos = [
    "fruit_icons/pear_v2.png", "fruit_icons/apple_v2.png", "fruit_icons/grape_v2.png", "fruit_icons/pineapple_v2.png"
];

logos.forEach((logo) => {
    $('#logos').append(`<img src="${logo}" class="logos"></img>`);
});