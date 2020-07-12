console.log("hello");

/*let logos = [
    "fruit_icons/pear_v2.png", "fruit_icons/apple_v2.png", "fruit_icons/grape_v2.png", "fruit_icons/pineapple_v2.png"
];

logos.forEach((logo) => {
    $('#logo').append(`<img src="${logo}" class="logos"></img>`);
}); */

/*$('.logos').hover(
    function() { $.data(this, 'hover', true); },
    function() { $.data(this, 'hover', false); }
    ).data('hover', false);

if ($('.logos').data('hover')) {$('#fruits').text("hey")};*/

let description = [
    {
         number: 0,
         title: "Pear",
         text: "The pear (/ˈpɛər/) tree and shrub are a species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pear are valued for their edible fruit and juices while others are cultivated as trees. The tree is medium-sized and native to coastal as well as mildly temperate regions of Europe, north Africa and Asia. Pear wood is one of the preferred materials in the manufacture of high-quality woodwind instruments and furniture. About 3000 known varieties of pears are grown worldwide. The fruit is consumed fresh, canned, as juice, and dried.",
         quote: "“A lorry load of pears has crashed on the motorway. It’s caused a huge jam.”"
    },
    {
        number: 1,
        title: "Apple",
        text: "An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian tradition.",
        quote: "“Went to the shop today to buy some lemons and apples, but they didn’t have any. It was a fruitless trip.”"
   },
   {
        number: 2,
        title: "Grape",
        text: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, grape juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.",
        quote: "“Saw a grape in the bank. He was opening a currant account.”"
    },
    {
        number: 3,
        title: "Pineapple",
        text: "The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations. Further, it is the third most important tropical fruit in world production.",
        quote: "“Girl, if you were a fruit, you'd be a fineapple!”"
    },
]

$('#pear')
    .mouseenter(function() {
        $(`#fruits`).append(`<h2>${description[0].title}</h2>`);
        $(`#fruits`).append(`<p>${description[0].text}</p>`);
    })
    .mouseleave(function() {
        $(`#fruits`).empty()
});

    
//if ($('#pear').data(this, 'hover', true)) {$('#fruits').append(`hey`)};

$('#apple')
    .mouseenter(function() {
        $(`#fruits`).append(`<h2>${description[1].title}</h2>`);
        $(`#fruits`).append(`<p>${description[1].text}</p>`);
    })
    .mouseleave(function() {
        $(`#fruits`).empty()
});

$('#grape')
    .mouseenter(function() {
        $(`#fruits`).append(`<h2>${description[2].title}</h2>`);
        $(`#fruits`).append(`<p>${description[2].text}</p>`);
    })
    .mouseleave(function() {
        $(`#fruits`).empty()
});


$('#pineapple')
    .mouseenter(function() {
        $(`#fruits`).append(`<h2>${description[3].title}</h2>`);
        $(`#fruits`).append(`<p>${description[3].text}</p>`);
    })
    .mouseleave(function() {
        $(`#fruits`).empty()
});


$('#pear').click(() => {
        alert(description[0].quote)
});

$('#apple').click(() => {
    alert(description[1].quote)
});

$('#grape').click(() => {
    alert(description[2].quote)
});

$('#pineapple').click(() => {
    alert(description[3].quote)
});

