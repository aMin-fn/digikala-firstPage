
let a = document.querySelector('.footer-container .fifth .btn');
let d = document.getElementById('less-link');
let svgs = document.querySelector('.footer-container-xs .third #headingOne svg');
let a_svg = document.querySelector('.footer-container-xs .third #headingOne a')
let svgs2 = document.querySelector('.footer-container-xs .third #headingTwo svg');
let a_svg2 = document.querySelector('.footer-container-xs .third #headingTwo a')
let svgs3 = document.querySelector('.footer-container-xs .third #headingThree svg');
let a_svg3 = document.querySelector('.footer-container-xs .third #headingThree a')
let svgs4 = document.querySelector('.footer-container-xs .third #headingfour svg');
let a_svg4 = document.querySelector('.footer-container-xs .third #headingfour a')

a_svg.addEventListener('click', () =>
{
    svgs.classList.toggle('transform-icon');
});
a_svg2.addEventListener('click', () =>
{
    svgs2.classList.toggle('transform-icon');
});
a_svg3.addEventListener('click', () =>
{
    svgs3.classList.toggle('transform-icon');
});
a_svg4.addEventListener('click', () =>
{
    svgs4.classList.toggle('transform-icon');
});

a.addEventListener('click', function(){
    a.style.display = 'none';
    d.style.display = 'flex';



});
d.addEventListener('click', function(){
    d.style.display = 'none';
    a.style.display = 'flex';


});
let a2 = document.querySelector('.footer-container-xs .fifth .btn');
let d2 = document.getElementById('less-link2');
a2.addEventListener('click', function(){
    a2.style.display = 'none';
    d2.style.display = 'flex';



});
d2.addEventListener('click', function(){
    d2.style.display = 'none';
    a2.style.display = 'flex';


});

let temp ;
let item1 = document.querySelector('.header-bottom .kala-container .right-1 .item1');
let left1 = document.querySelector('.left-1');


item1.addEventListener("mouseover", (event) => {
    if(temp!=null)
    {
        temp.style.display = 'none';
        left1.style.display = 'block';


    }
    else
    {
        temp = left1;
        left1.style.display = 'block';
    }

});

item1.addEventListener("mouseout", (event) => {
    left1.style.display = 'none';
});
left1.addEventListener("mouseover", (event) => {
    left1.style.display = 'block';
});
left1.addEventListener("mouseout", (event) => {
    left1.style.display = 'none';
});

let item2 = document.querySelector('.header-bottom .kala-container .right-1 .item2');
let left2 = document.querySelector('.left-2');

item2.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left2.style.display = 'block';
    
    
        }
        else
            temp = left2;
});
left2.addEventListener("mouseover", (event) => {

    
    left2.style.display = 'block';
});
left2.addEventListener("mouseout", (event) => {
    left2.style.display = 'none';
});
item2.addEventListener("mouseout", (event) => {
        left2.style.display = 'none';
});
let item3 = document.querySelector('.header-bottom .kala-container .right-1 .item3');
let left3 = document.querySelector('.left-3');

item3.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left3.style.display = 'block';
    
    
        }
        else
            temp = left3;
});
left3.addEventListener("mouseover", (event) => {
    left3.style.display = 'block';
});
item3.addEventListener("mouseout", (event) => {
        left3.style.display = 'none';
});
left3.addEventListener("mouseout", (event) => {
    left3.style.display = 'none';
});
let item4 = document.querySelector('.header-bottom .kala-container .right-1 .item4');
let left4 = document.querySelector('.left-4');

item4.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left4.style.display = 'block';
    
    
        }
        else
            temp = left4;
});
item4.addEventListener("mouseout", (event) => {
        left4.style.display = 'none';
});
left4.addEventListener("mouseover", (event) => {
    left4.style.display = 'block';
});

left4.addEventListener("mouseout", (event) => {
    left4.style.display = 'none';
});
let item5 = document.querySelector('.header-bottom .kala-container .right-1 .item5');
let left5 = document.querySelector('.left-5');

item5.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left5.style.display = 'block';
    
    
        }
        else
            temp = left5;
});
item5.addEventListener("mouseout", (event) => {
    left5.style.display = 'none';
});
left5.addEventListener("mouseover", (event) => {
    left5.style.display = 'block';
});

left5.addEventListener("mouseout", (event) => {
    left5.style.display = 'none';
});
let item6 = document.querySelector('.header-bottom .kala-container .right-1 .item6');
let left6 = document.querySelector('.left-6');

item6.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left6.style.display = 'block';
    
    
        }
        else
            temp = left6;
});
item6.addEventListener("mouseout", (event) => {
    left6.style.display = 'none';
});
left6.addEventListener("mouseover", (event) => {
    left6.style.display = 'block';
});

left6.addEventListener("mouseout", (event) => {
    left6.style.display = 'none';
});
let item7 = document.querySelector('.header-bottom .kala-container .right-1 .item7');
let left7 = document.querySelector('.left-7');

item7.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left7.style.display = 'block';
    
    
        }
        else
            temp = left7;
});
item7.addEventListener("mouseout", (event) => {
    left7.style.display = 'none';
});
left7.addEventListener("mouseover", (event) => {
    left7.style.display = 'block';
});

left7.addEventListener("mouseout", (event) => {
    left7.style.display = 'none';
});
let item8 = document.querySelector('.header-bottom .kala-container .right-1 .item8');
let left8 = document.querySelector('.left-8');

item8.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left8.style.display = 'block';
    
    
        }
        else
            temp = left8;
});
item8.addEventListener("mouseout", (event) => {
    left8.style.display = 'none';
});
left8.addEventListener("mouseover", (event) => {
    left8.style.display = 'block';
});

left8.addEventListener("mouseout", (event) => {
    left8.style.display = 'none';
});
let item9 = document.querySelector('.header-bottom .kala-container .right-1 .item9');
let left9 = document.querySelector('.left-9');

item9.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left9.style.display = 'block';
    
    
        }
        else
            temp = left9;
});
item9.addEventListener("mouseout", (event) => {
    left9.style.display = 'none';
});
left9.addEventListener("mouseover", (event) => {
    left9.style.display = 'block';
});

left9.addEventListener("mouseout", (event) => {
    left9.style.display = 'none';
});
let item10 = document.querySelector('.header-bottom .kala-container .right-1 .item10');
let left10 = document.querySelector('.left-10');

item10.addEventListener("mouseover", (event) => {
    if(temp!=null)
        {
            temp.style.display = 'none';
            left10.style.display = 'block';
    
    
        }
        else
            temp = left10;
});
item10.addEventListener("mouseout", (event) => {
    left10.style.display = 'none';
});
left10.addEventListener("mouseover",(event) => {
    left10.style.display = 'block';
});

left10.addEventListener("mouseout",(event) => {
    left10.style.display = 'none';
});


let menu = document.querySelector('.header-bottom .menu');
let kala = document.querySelector('.header-bottom .kala-container');

menu.addEventListener("mouseover", (event) => {
    kala.style.display = 'flex';
});
menu.addEventListener("mouseout", (event) => {
    kala.style.display = 'none';
});
function convertToPersian(number) {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return number.toString().split('').map(digit => persianDigits[digit]).join('');
        }
        
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("first-hour").innerHTML = hours;
  document.getElementById("first-min").innerHTML = minutes;
  document.getElementById("first-sec").innerHTML = seconds;
  document.getElementById("sec-hour").innerHTML = hours;
  document.getElementById("sec-min").innerHTML = minutes;
  document.getElementById("sec-sec").innerHTML = seconds;

  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("first-hour").innerHTML ="exp"
    document.getElementById("first-min").innerHTML = "exp"
    document.getElementById("first-sec").innerHTML = "exp"
  }
}, 1000);

let dastebandi_container = document.getElementById("dastebandi-container");
let body = document.getElementById("body");
let dastebandi = document.getElementById("dastebandi");
let main_body = document.getElementById("body-container");
let header_b = document.querySelector("#dastebandi-container #header-b");
let dastebandiSvg  = document.querySelector("#dastebandi svg");
let home  = document.getElementById("home");
let homeSvg  = document.querySelector("#home svg");
dastebandi.addEventListener("click", (event) => {
    homeSvg.style.fill  = '#a1a3a8'; 
    dastebandiSvg.style.fill = '#424750';
     main_body.style.display = 'none';
     dastebandi_container.style.height='500px'; 
     dastebandi_container.style.display='block'; 
     header_b.style.paddingBottom = '10px !important';
     header_b.style.margin = '0';
     
});

home.addEventListener("click", (event) => {

        dastebandiSvg.style.fill = '#a1a3a8';
    homeSvg.style.fill  = '#424750'; 
     main_body.style.display = 'block';
     dastebandi_container.style.height='0'; 
     dastebandi_container.style.display='none'; 
});
let sec_svgs = document.querySelector('#dastebandi-container #headingone svg');
let sec_a_svg = document.querySelector('#dastebandi-container #headingone a')
let sec_svgs2 = document.querySelector('#dastebandi-container #headingtwo svg');
let sec_a_svg2 = document.querySelector('#dastebandi-container #headingtwo a')
let sec_svgs3 = document.querySelector('#dastebandi-container #headingthree svg');
let sec_a_svg3 = document.querySelector('#dastebandi-container #headingthree a')
let sec_svgs4 = document.querySelector('#dastebandi-container #headingfour svg');
let sec_a_svg4 = document.querySelector('#dastebandi-container #headingfour a')
let sec_svgs5 = document.querySelector('#dastebandi-container #headingfive svg');
let sec_a_svg5 = document.querySelector('#dastebandi-container #headingfive a')
let sec_svgs6 = document.querySelector('#dastebandi-container #headingsix svg');
let sec_a_svg6 = document.querySelector('#dastebandi-container #headingsix a')
let sec_svgs7 = document.querySelector('#dastebandi-container #headingseven svg');
let sec_a_svg7 = document.querySelector('#dastebandi-container #headingseven a')
let sec_svgs8 = document.querySelector('#dastebandi-container #headingeight svg');
let sec_a_svg8 = document.querySelector('#dastebandi-container #headingeight a')
let sec_svgs9 = document.querySelector('#dastebandi-container #headingnine svg');
let sec_a_svg9 = document.querySelector('#dastebandi-container #headingnine a')
let sec_svgs10 = document.querySelector('#dastebandi-container #headingten svg');
let sec_a_svg10 = document.querySelector('#dastebandi-container #headingten a')

sec_a_svg.addEventListener('click', () =>
{
    sec_svgs.classList.toggle('transform-icon');
});
sec_a_svg2.addEventListener('click', () =>
{
    sec_svgs2.classList.toggle('transform-icon');
});
sec_a_svg3.addEventListener('click', () =>
{
    sec_svgs3.classList.toggle('transform-icon');
});
sec_a_svg4.addEventListener('click', () =>
{
    sec_svgs4.classList.toggle('transform-icon');
});
sec_a_svg5.addEventListener('click', () =>
{
    sec_svgs5.classList.toggle('transform-icon');
});
sec_a_svg6.addEventListener('click', () =>
{
    sec_svgs6.classList.toggle('transform-icon');
});
sec_a_svg7.addEventListener('click', () =>
{
    sec_svgs7.classList.toggle('transform-icon');
});
sec_a_svg8.addEventListener('click', () =>
{
    sec_svgs8.classList.toggle('transform-icon');
});
sec_a_svg9.addEventListener('click', () =>
{
    sec_svgs9.classList.toggle('transform-icon');
});
sec_a_svg10.addEventListener('click', () =>
{
    sec_svgs10.classList.toggle('transform-icon');
});




let sec_item1 = document.querySelector('#dastebandi-container .item1');
let sec_left1 = document.querySelector('#dastebandi-container .left1');
let sec_item1_a = document.querySelector('#dastebandi-container .item1 a');
let sec_item1_svg = document.querySelector('#dastebandi-container .item1 svg');
let prev_svg = sec_item1_svg;
let prev_a =sec_item1_a ;
let prev_left; 
let prev_item = sec_item1;
    prev_left = sec_left1;
sec_item1.addEventListener('click', () =>
{
     sec_item1_svg.style.fill = '#ef4056';
    sec_item1_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item1_a;
     prev_svg = sec_item1_svg;
    prev_a = sec_item1_a;
     prev_svg = sec_item1_svg;
     sec_item1.style.backgroundColor ='white';
    prev_item.style.backgroundColor ='#f0f0f1';
  
     prev_left.style.display = 'none';
    prev_left = sec_left1;
     prev_item = sec_item1
     

    sec_left1.style.display = 'block';


});
let sec_item2 = document.querySelector('#dastebandi-container .item2');
let sec_left2 = document.querySelector('#dastebandi-container .left2');
let sec_item2_a = document.querySelector('#dastebandi-container .item2 a');
let sec_item2_svg = document.querySelector('#dastebandi-container .item2 svg');

sec_item2.addEventListener('click', () =>
{
     sec_item2_svg.style.fill = '#ef4056';
    sec_item2_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item2_a;
     prev_svg = sec_item2_svg;
    prev_a = sec_item2_a;
     prev_svg = sec_item2_svg;
        sec_item2.style.backgroundColor ='white';
    prev_left.style.display = 'none';
    prev_item.style.backgroundColor ='#f0f0f1';

    prev_left = sec_left2;
    prev_item = sec_item2
    sec_left2.style.display = 'block';

});
let sec_item3 = document.querySelector('#dastebandi-container .item3');
let sec_left3 = document.querySelector('#dastebandi-container .left3');
let sec_item3_a = document.querySelector('#dastebandi-container .item3 a');
let sec_item3_svg = document.querySelector('#dastebandi-container .item3 svg');

sec_item3.addEventListener('click', () =>
{
     sec_item3_svg.style.fill = '#ef4056';
    sec_item3_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item3_a;
     prev_svg = sec_item3_svg;
    prev_a = sec_item3_a;
     prev_svg = sec_item3_svg;
        sec_item3.style.backgroundColor ='white';
            prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left3;
        prev_item = sec_item3

    sec_left3.style.display = 'block';
});
let sec_item4 = document.querySelector('#dastebandi-container .item4');
let sec_left4 = document.querySelector('#dastebandi-container .left4');
let sec_item4_a = document.querySelector('#dastebandi-container .item4 a');
let sec_item4_svg = document.querySelector('#dastebandi-container .item4 svg');

sec_item4.addEventListener('click', () =>
{
     sec_item4_svg.style.fill = '#ef4056';
    sec_item4_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item4_a;
     prev_svg = sec_item4_svg;
    prev_a = sec_item4_a;
     prev_svg = sec_item4_svg;
        sec_item4.style.backgroundColor ='white';
        prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left4;
    prev_item = sec_item4

    sec_left4.style.display = 'block';
});
let sec_item5 = document.querySelector('#dastebandi-container .item5');
let sec_left5 = document.querySelector('#dastebandi-container .left5');
let sec_item5_a = document.querySelector('#dastebandi-container .item5 a');
let sec_item5_svg = document.querySelector('#dastebandi-container .item5 svg');
sec_item5.addEventListener('click', () =>
{
     sec_item5_svg.style.fill = '#ef4056';
    sec_item5_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item5_a;
     prev_svg = sec_item5_svg;
    prev_a = sec_item5_a;
     prev_svg = sec_item5_svg;
        sec_item5.style.backgroundColor ='white';
        prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left5;
    prev_item = sec_item5;

    sec_left5.style.display = 'block';
});
let sec_item6 = document.querySelector('#dastebandi-container .item6');
let sec_left6 = document.querySelector('#dastebandi-container .left6');
let sec_item6_a = document.querySelector('#dastebandi-container .item6 a');
let sec_item6_svg = document.querySelector('#dastebandi-container .item6 svg');

sec_item6.addEventListener('click', () =>
{
     sec_item6_svg.style.fill = '#ef4056';
    sec_item6_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item6_a;
     prev_svg = sec_item6_svg;
    prev_a = sec_item6_a;
     prev_svg = sec_item6_svg;
        sec_item6.style.backgroundColor ='white';
        prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left6;
    prev_item = sec_item6;

    sec_left6.style.display = 'block';
});
let sec_item7 = document.querySelector('#dastebandi-container .item7');
let sec_left7 = document.querySelector('#dastebandi-container .left7');
let sec_item7_a = document.querySelector('#dastebandi-container .item7 a');
let sec_item7_svg = document.querySelector('#dastebandi-container .item7 svg');

sec_item7.addEventListener('click', () =>
{
     sec_item7_svg.style.fill = '#ef4056';
    sec_item7_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item7_a;
     prev_svg = sec_item7_svg;
    prev_a = sec_item7_a;
     prev_svg = sec_item7_svg;
        sec_item7.style.backgroundColor ='white';
        prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left7;
    prev_item = sec_item7;

    sec_left7.style.display = 'block';
});
let sec_item8 = document.querySelector('#dastebandi-container .item8');
let sec_left8 = document.querySelector('#dastebandi-container .left8');
let sec_item8_a = document.querySelector('#dastebandi-container .item8 a');
let sec_item8_svg = document.querySelector('#dastebandi-container .item8 svg');

sec_item8.addEventListener('click', () =>
{
     sec_item8_svg.style.fill = '#ef4056';
    sec_item8_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item8_a;
     prev_svg = sec_item8_svg;
    prev_a = sec_item8_a;
     prev_svg = sec_item8_svg;
        sec_item8.style.backgroundColor ='white';
        prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left8;
    prev_item = sec_item8;

    sec_left8.style.display = 'block';
});
let sec_item9 = document.querySelector('#dastebandi-container .item9');
let sec_left9 = document.querySelector('#dastebandi-container .left9');
let sec_item9_a = document.querySelector('#dastebandi-container .item9 a');
let sec_item9_svg = document.querySelector('#dastebandi-container .item9 svg');

sec_item9.addEventListener('click', () =>
{
     sec_item9_svg.style.fill = '#ef4056';
    sec_item9_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item9_a;
     prev_svg = sec_item9_svg;
    prev_a = sec_item9_a;
     prev_svg = sec_item9_svg;
        sec_item9.style.backgroundColor ='white';
        prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left9;
    prev_item = sec_item9;

    sec_left9.style.display = 'block';
});
let sec_item10 = document.querySelector('#dastebandi-container .item10');
let sec_left10 = document.querySelector('#dastebandi-container .left10');
let sec_item10_a = document.querySelector('#dastebandi-container .item10 a');
let sec_item10_svg = document.querySelector('#dastebandi-container .item10 svg');
sec_item10.addEventListener('click', () =>
{
     sec_item10_svg.style.fill = '#ef4056';
    sec_item10_a.style.color = '#ef4056';
     prev_svg.style.fill = 'black';
    prev_a.style.color = 'black';
    prev_a = sec_item10_a;
     prev_svg = sec_item10_svg;
    prev_a = sec_item10_a;
     prev_svg = sec_item10_svg;
        sec_item10.style.backgroundColor ='white';
        prev_item.style.backgroundColor ='#f0f0f1';

        prev_left.style.display = 'none';

    prev_left = sec_left10;
    prev_item = sec_item10

    sec_left10.style.display = 'block';
});

