
const Hello = document.getElementById('Hello')
const minusbtn = document.querySelector('#minubtn')
const addbtn = document.querySelector('#addbtn')
const Counter = document.querySelector('#Ncounter')
const amount = document.querySelector('#Total_amount')
Hello.src = localStorage.getItem('ID')




addbtn.addEventListener('click',()=>{
  
  const conv = parseInt(Counter.textContent);
  const add = conv + 1;
  if(add === 21){
    alert('You reach the maximum amount!')
    return;
  }
  Counter.textContent = add
})

minusbtn.addEventListener('click',()=>{
  const shesh = Counter.textContent;
  const conv = parseInt(shesh);
  const con = conv - 1;
  if(con === 0){  
    return;
  }
  Counter.textContent = con;
})

const price = () => {
  const GG = parseInt(amount.textContent);
  let trigger = null;
  let nothin = null;

  addbtn.addEventListener('click', () => {
    const txt = parseInt(amount.textContent);
    let base = parseInt(Counter.textContent);

    if (base === 20) {
      if (!trigger) {
        trigger = txt; // Lock the value when base reaches 20
      }
      if (!nothin) {
        const triggered = parseInt(trigger);
        const sum = triggered + GG;
        nothin = sum;
      }
      amount.textContent = nothin;
    } else {
      // If base is not 20, continue normal addition
      const adding = txt + GG;
      amount.textContent = adding;
    }
  });
};

const shesh = () =>{
  const bar = amount.textContent
  const conv = parseInt(bar)
  minusbtn.addEventListener('click',()=>{
    const Y = amount.textContent
    const X = parseInt(Y)
    if(X === conv){
      return;
    }
    const G = X - conv
    amount.textContent = G
    
  })
}
// Github Link

const Orangez = 'https://reymarkdequito.github.io/GG/Drinks/Mango%20smoothie.png';
const Milkteaz = 'https://reymarkdequito.github.io/GG/Drinks/Milktea_1.png'
const avocadoz = 'https://reymarkdequito.github.io/GG/Drinks/avocado%20smoohie.png'
const melonz = 'https://reymarkdequito.github.io/GG/Drinks/Menon%20smoothie.png'
const Blueberryz = 'https://reymarkdequito.github.io/GG/Drinks/Blueberry%20muffin%20smoothie.png'
const Rasberyz = 'https://reymarkdequito.github.io/GG/Drinks/rasberry%20mid%20wine.png'


const burgerz = 'https://reymarkdequito.github.io/GG/Foods/burger.png'
const steakz = 'https://reymarkdequito.github.io/GG/Foods/steak.png'
const pizzaz = 'https://reymarkdequito.github.io/GG/Foods/BbQ%20Pizza.png'
const Crabsz = 'https://reymarkdequito.github.io/GG/Foods/roasted%20crabs.png'
const BBQz = 'https://reymarkdequito.github.io/GG/Foods/barbeque%20leg%20of%20lamb.png'
const optopusz = 'https://reymarkdequito.github.io/GG/Foods/Sous%20vide%20octopus.png'


const Freakshaez ='https://reymarkdequito.github.io/GG/Desert/Freakshake.png'
const chocorioz ='https://reymarkdequito.github.io/GG/Desert/Ultimate%20chocorio.png'
const Cheesestickz = 'https://reymarkdequito.github.io/GG/Desert/Goey%20Cheese%20Stick.png'
const Fruitiesz = 'https://reymarkdequito.github.io/GG/Desert/Fruities.png'
const Bananaz = 'https://reymarkdequito.github.io/GG/Desert/Banana%20Chips.png'
const pancakesz = 'https://reymarkdequito.github.io/GG/Desert/Stuffed%20Pancakes.png'

// Mobile Link
const Orange = 'http://192.168.55.100:5501/Drinks/Mango%20smoothie.png';

const Milktea = 'http://192.168.55.100:5501/Drinks/Milktea_1.png';

const avocado = 'http://192.168.55.100:5501/Drinks/avocado%20smoohie.png';


// Pc Link
const Oranges = 'http://127.0.0.1:5501/Drinks/Mango%20smoothie.png'

const Milkteas = 'http://127.0.0.1:5501/Drinks/Milktea_1.png'

const avocados = 'http://127.0.0.1:5501/Drinks/avocado%20smoohie.png'

const melons = 'http://127.0.0.1:5501/Drinks/Menon%20smoothie.png';


const Blueberys = 'http://127.0.0.1:5501/Drinks/Blueberry%20muffin%20smoothie.png'

const Rasberys = 'http://127.0.0.1:5501/Drinks/rasberry%20mid%20wine.png'

const Burger = 'http://127.0.0.1:5501/Foods/burger.png'

const Steak = 'http://127.0.0.1:5501/Foods/steak.png'

const Pizza = 'http://127.0.0.1:5501/Foods/BbQ%20Pizza.png'

const Crabs = 'http://127.0.0.1:5501/Foods/roasted%20crabs.png'

const BBQ = 'http://127.0.0.1:5501/Foods/barbeque%20leg%20of%20lamb.png'

const OCTOPUS = 'http://127.0.0.1:5501/Foods/Sous%20vide%20octopus.png'


switch (localStorage.getItem('ID')){
  // Github
  case Orangez:
    amount.textContent = 87;
    price();  
    shesh();    
    break;
  case Milkteaz:
    amount.textContent = 63;
    price(); 
    shesh();
    break;
  case avocadoz:
    amount.textContent = 120;
    price(); 
    shesh();
    break;
  case melonz:
    amount.textContent = 62;
    price(); 
    shesh();
    break; 
  case Blueberryz:
      amount.textContent = 117;
      price(); 
      shesh();
      break;
  case Rasberyz:
    amount.textContent = 125;
    price(); 
    shesh();
    break;
  case burgerz:
    amount.textContent = 63;
    price(); 
    shesh();
    break;
  case steakz:
    amount.textContent = 87;
    price(); 
    shesh();
    break;
  case pizzaz:
    amount.textContent = 120;
    price(); 
    shesh();
    break;
  case Crabsz:
    amount.textContent = 62;
    price(); 
    shesh();
    break;
  case BBQz :
    amount.textContent = 117;
    price(); 
    shesh();
    break;
  case optopusz:
    amount.textContent = 125;
    price(); 
    shesh();
    break;
  case Freakshaez:
    amount.textContent = 78;
    price(); 
    shesh();
    break;
  case chocorioz:
    amount.textContent = 62;
    price(); 
    shesh();
    break;
  case Cheesestickz:
    amount.textContent = 45;
    price(); 
    shesh();
    break;
  case Fruitiesz:
    amount.textContent = 58;
    price(); 
    shesh();
    break;
  case Bananaz:
    amount.textContent = 95;
    price(); 
    shesh();
    break;
  case pancakesz:
    amount.textContent = 77;
    price(); 
    shesh();
    break;

  // Mobile
  case Orange:
    amount.textContent = 87;
    price();  
    shesh();    
    break;

  // Pc
  case Oranges:
    amount.textContent = 87;
    price();  
    shesh(); 
    break;
  case Milktea:
    amount.textContent = 63;
    price(); 
    shesh();
    break;
  case Milkteas:
    amount.textContent = 63;
    price(); 
    shesh();
    break;
  case avocado:
    amount.textContent = 120;
    price(); 
    shesh();
    break;
  case avocados:
      amount.textContent = 120;
      price(); 
      shesh();
      break;
  case melons:
    amount.textContent = 62;
    price(); 
    shesh();
    break; 
  case Blueberys:
    amount.textContent = 117;
    price(); 
    shesh();
    break;
  case Rasberys:
    amount.textContent = 125;
    price(); 
    shesh();
    break;
  case Burger:
    amount.textContent = 63;
    price(); 
    shesh();
    break;
  case Steak:
    amount.textContent = 87;
    price(); 
    shesh();
    break;
  case Pizza:
    amount.textContent = 120;
    price(); 
    shesh();
    break;
  case Crabs:
    amount.textContent = 62;
    price(); 
    shesh();
    break;
  case BBQ:
    amount.textContent = 117;
    price(); 
    shesh();
    break; 
  case OCTOPUS:
    amount.textContent = 125;
    price(); 
    shesh();
    break;    
  default: console.log('Error')
}

// Vouchers Functionalities
const Voucherappearance =document.querySelector('#VRappear')
const SetVR1 = document.querySelector('#setvoucher-1')
const SetVR2 = document.querySelector('#setvoucher-2')
const SetVR3 = document.querySelector('#setvoucher-3')
const SetVR4 = document.querySelector('#setvoucher-4')
const VA1 = document.querySelector('#VA1')
const VA2 = document.querySelector('#VA2')
const VA3 = document.querySelector('#VA3')
const VA4 = document.querySelector('#VA4')
const ekis = document.querySelector('.ekis')

ekis.addEventListener('click',()=>{
  const pm = document.querySelector('#PMshows')
  Voucherappearance.style.display ='none'
  ekis.style.display = 'none'
  pm.style.display = 'none'
})

let check = true

function checking (){
  if(!localStorage.getItem('HR1') && !localStorage.getItem('HR2') && !localStorage.getItem('HR3') && !localStorage.getItem('HR4')){
    const newP = document.createElement('p');
    newP.textContent ='You dont have any voucher to use.';
    if(check){
      Voucherappearance.appendChild(newP);
      check = false
    }
  }
}

function VouchersAppear(){
  Voucherappearance.style.display = 'block'
  ekis.style.display = 'block';
  if(!localStorage.getItem('HR1')){
    VA1.style.display = 'none'
  }else{
    SetVR1.src = localStorage.getItem('HR1')
  }
  
  if(!localStorage.getItem('HR2')){
    VA2.style.display = 'none'
  }else{
    SetVR2.src = localStorage.getItem('HR2')
  }

  if(!localStorage.getItem('HR3')){
    VA3.style.display = 'none'
  }else{
    SetVR3.src = localStorage.getItem('HR3')
  }

  if(!localStorage.getItem('HR4')){
    VA4.style.display = 'none'
  }else{
    SetVR4.src = localStorage.getItem('HR4')
  }
  checking()
  
}

function unclickable(){
  minusbtn.disabled = true;
  addbtn.disabled = true;
}

const vrbtn1 = document.querySelector('#vrbtn1')
const vrbtn2 = document.querySelector('#vrbtn2')
const vrbtn3 = document.querySelector('#vrbtn3')
const vrbtn4 = document.querySelector('#vrbtn4')

let OnceUse = true

vrbtn1.addEventListener('click',()=>{
  

  if(OnceUse){
    const value = parseInt(amount.textContent)
    const percent = parseInt(localStorage.getItem('VR1'))
    const minus = (percent / 100) * value
    const overall = value - minus
    amount.textContent = overall
    localStorage.removeItem('HR1')
    localStorage.removeItem('VR1')
    VA1.remove();
    OnceUse = false
  }else {
    console.log('you can only use one voucher per order')
    alert('you can only use one voucher per order')
  }
  
  checking()
  unclickable()
})

vrbtn2.addEventListener('click',()=>{
  
  if(OnceUse){
  const value = parseInt(amount.textContent)
  const percent = parseInt(localStorage.getItem('VR2'))
  const minus = (percent / 100) * value
  let overall = value - minus
  const round = Math.round(overall * 100) / 100;
  amount.textContent = round
  console.log(round)
  localStorage.removeItem('HR2')
  localStorage.removeItem('VR2')
  VA2.remove();
  OnceUse = false
  }else{
    console.log('you can only use one voucher per order')
    alert('you can only use one voucher per order')
  }
  checking()
  unclickable()
})

vrbtn3.addEventListener('click',()=>{
  
  if(OnceUse){
  const value = parseInt(amount.textContent)
  const percent = parseInt(localStorage.getItem('VR3'))
  const minus = (percent / 100) * value
  const overall = value - minus
  amount.textContent = overall
  VA3.remove();
  localStorage.removeItem('HR3')
  localStorage.removeItem('VR3')
  OnceUse = false
  }else {
    console.log('you can only use one voucher per order')
    alert('you can only use one voucher per order')
  }
  
  checking()
  unclickable()
})

vrbtn4.addEventListener('click',()=>{
  
  if(OnceUse){
  const value = parseInt(amount.textContent)
  const percent = parseInt(localStorage.getItem('VR4'))
  const minus = (percent / 100) * value
  const overall = value - minus
  amount.textContent = overall
  VA4.remove();
  localStorage.removeItem('HR4')
  localStorage.removeItem('VR4')
  OnceUse = false
  }else {
    console.log('you can only use one voucher per order')
    alert('you can only use one voucher per order')
  }
  
  checking()
  unclickable()
})

// Select Voucher Method

const PM = document.querySelector("#Payment_Method")
let CheckPM = false

PM.addEventListener('click', ()=>{
  const PMshow = document.querySelector('#PMshows')
  PMshow.style.display = 'block';
  ekis.style.display = 'block'
  
})
let paymentcheck = false;

function payment(){
  const btn = document.querySelectorAll('.gcashinput')
  btn.forEach(btns=>{
   btns.addEventListener('click',()=>{
    const PMshow = document.querySelector('#PMshows')
    
    PMshow.style.display = 'none';
    ekis.style.display = 'none'
    paymentcheck = true
   })

  });
}

payment()

// Finish the Order

const PO = document.querySelector('#PlaceOrder');
const confirms = document.querySelector('#verify')
const Cbtn = document.querySelector('#confirmbtn')

PO.addEventListener('click', ()=>{
  if(paymentcheck){
    const blur = document.querySelector('#blur')

    blur.style.display = 'block'
    confirms.style.display = 'block'

    Cbtn.addEventListener('click',()=>{
    window.location.href ="./Finish.html"
    })
  }else{
    alert('Select Payment method first!')
  }
})



