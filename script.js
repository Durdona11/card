let all = document.getElementsByTagName("*");
for (let index = 0; index < all.length; index++) {
   all[index].style.margin = "0";
   all[index].style.padding = "0";
   all[index].style.boxSizing = "bor_card-box";
    
}
let body = document.querySelector("#root");



let card = document.createElement("div");
card.style.backgroundColor="#141519";
card.style.width = "100vw";
card.style.height="100vh";
card.style.backgroundSize = "cover";
card.style.display="flex";
card.style.alignItems="center";
card.style.justifyContent="center";

body.appendChild(card);


let badge = document.createElement("div");
badge.style.background = "linear-gradient(180deg, #222933 0%, #171E28 100%)";
badge.style.width="380px";
badge.style.height="380px";
badge.style.fontFamily="Inter";
badge.style.borderRadius = "30px";
badge.style.padding="31px";
card.appendChild(badge);

let cards=document.createElement("div");
cards.style.width="50px";
cards.style.height="50px";
cards.style.borderRadius="50%";
cards.style.backgroundColor="#262F38";
// cards.style.backgroundSize="cover";
// cards.style.backgroundPosition="center";
// ellipse.style.display = "flex";
cards.style.alignItems = "center";
cards.style.justifyContent = "center";
badge.appendChild(cards);

let ellipse_img = document.createElement("img");
ellipse_img.src = `./images/Vector (1).png`;
ellipse_img.style.padding="16px";
cards.appendChild(ellipse_img);

let h1_word=document.createElement("div");
h1_word.textContent="How did we do?";
h1_word.style.fontSize="26px";
h1_word.style.fontWeight="700";
h1_word.style.color="#fff";
h1_word.style.marginTop="41px";
h1_word.style.fontFamily="Inter";
h1_word.style.letterSpacing="3.5px";

badge.appendChild(h1_word);

let p_word=document.createElement("div");
p_word.textContent="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
p_word.style.fontSize="14px";
p_word.style.width="300px";
p_word.style.fontWeight="500";
p_word.style.color="#7B818D";
p_word.style.lineHeight="169%";
p_word.style.marginTop="15px";
badge.appendChild(p_word);

let bor_card=document.createElement("div");
bor_card.style.display="flex";
bor_card.style.gap="21px";
bor_card.style.marginTop="27px";
// bor_card.style.color="#707883";
// bor_card.style.fontSize="18px";
// bor_card.style.lineHeight="169%";
// bor_card.style.fontWeight="500";
// bor_card.style.bor_card="1px solid red";

badge.appendChild(bor_card);

let bor1=document.createElement("button");
bor1.style.width="53px";
bor1.style.height="53px";
bor1.style.borderRadius="50%";
bor1.textContent="1";
bor1.style.background="#262F38";
bor1.style.textAlign="center";
bor1.style.color="#707883";
bor1.style.border="none";
bor_card.appendChild(bor1);

let bor2=document.createElement("button");
bor2.style.width="53px";
bor2.style.height="53px";
bor2.style.borderRadius="50%";
bor2.style.background="#262F38";
bor2.textContent="2";
bor2.style.textAlign="center";
bor2.style.color="#707883";
bor2.style.border="none";
bor_card.appendChild(bor2);

let bor3=document.createElement("button");
bor3.style.width="53px";
bor3.style.height="53px";
bor3.style.borderRadius="50%";
bor3.style.background="#262F38";
bor3.textContent="3";
bor3.style.textAlign="center";
bor3.style.color="#707883";
bor3.style.border="none";
// let bor3=document.createElement("button:hover");
// bor3.style.color="pink";
bor_card.appendChild(bor3);

let bor4=document.createElement("button");
bor4.style.width="53px";
bor4.style.height="53px";
bor4.style.borderRadius="50%";
bor4.style.background="#262F38";
bor4.textContent="4";
bor4.style.textAlign="center";
bor4.style.color="#707883";
bor4.style.border="none";
bor_card.appendChild(bor4);

let bor5=document.createElement("button");
bor5.style.width="53px";
bor5.style.border="none";
bor5.style.height="53px";
bor5.style.borderRadius="50%";
bor5.style.background="#262F38";
bor5.textContent="5";
bor5.style.textAlign="center";
bor5.style.color="#707883";
bor_card.appendChild(bor5);



let subwith=document.createElement("div");
subwith.style.marginTop="45px";
badge.appendChild(subwith);

let sumbtn=document.createElement("button");
sumbtn.style.width="342px";
sumbtn.style.height="45px";
sumbtn.textContent="SUBMIT";
sumbtn.style.background="#FC7613";
sumbtn.style.borderRadius="32px";
sumbtn.style.border="none";
sumbtn.style.color="#fff";
sumbtn.style.fontSize="15px";
sumbtn.style.fontWeight="700";
sumbtn.style.letterSpacing="1.725px";
sumbtn.style.lineHeight="169%";
subwith.appendChild(sumbtn);



let show = true;
sumbtn.addEventListener("click", () => {
  show = !show;
  box_2.style.display = "block";
  badge.style.display = "none";
});

let box_2 = document.createElement("div");
box_2.style.display = "none";
box_2.style.backgroundColor = " #171E28";
box_2.style.maxWidth = "415px";
box_2.style.borderRadius = "30px";
box_2.style.textAlign = "center";
box_2.style.padding = `44px 40px 49px 39px`;
card.appendChild(box_2);

let illustration = document.createElement("img");
illustration.src = `./images/illustration.svg`;
box_2.appendChild(illustration);



let btn_2 = document.createElement("div");
btn_2.style.display = "flex";
btn_2.style.alignItems = "center";
btn_2.style.justifyContent = "center";
btn_2.style.marginTop = "32px";
btn_2.style.marginBottom = "33px";
box_2.appendChild(btn_2);

let btn_21 = document.createElement("button");
btn_21.style.width = "193px";
btn_21.style.height = "32px";
btn_21.style.borderRadius = "36px";
btn_21.style.backgroundColor = "#262F38";
btn_21.style.border = "none";
btn_21.style.display = "flex";
btn_21.style.alignItems = "center";
btn_21.style.justifyContent = "center";
btn_2.appendChild(btn_21);


let  text_2 = document.createElement("h3");
text_2.textContent = "You selected 4 out of 5";
text_2.style.color = "#FC7614";
text_2.style.fontSize = "15px";
text_2.style.fontWeight = "700px";
text_2.style.lineHeight = "24pxpx";
btn_21.appendChild(text_2);

let h1_2 = document.createElement("h1");
h1_2.textContent = "Thank you!";
h1_2.style.color = "#fff";
h1_2.style.fontSize = "26px";
h1_2.style.fontWeight = "700px";
h1_2.style.marginBottom = "14px";
box_2.appendChild(h1_2);


let p_2 = document.createElement("p");
p_2.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate toget in touch!`;
p_2.style.width = "295px";
p_2.style.color = "#7B818D";
p_2.style.fontSize = "14px";
p_2.style.fontWeight = "500";
p_2.style.lineHeight = "169%";
p_2.style.marginBottom = "27px";
box_2.appendChild(p_2);

