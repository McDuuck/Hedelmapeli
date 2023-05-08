const euroSymbol = '€';
const balance = "Balance: ";
const bet = "Bet: ";
const lock1 = document.getElementById('lock1');
const lock2 = document.getElementById('lock2');
const lock3 = document.getElementById('lock3');
const lock4 = document.getElementById('lock4');
const bet_button = document.getElementById('bet_button');
const jail = ['lmaoo/jail_time.png'];
const play_button = document.getElementById('play_button');

const bet_value = [1, 2, 3, 5];
let bet_money = 1;
let current_bet_index = 0;
let money = 500;
let locked1 = 0
let locked2 = 0
let locked3 = 0
let locked4 = 0
let lock_counts = 0
let win_counts = 0
document.getElementById('money').innerHTML = balance + money + euroSymbol;
document.getElementById('bet').innerHTML = bet + bet_value[0] + euroSymbol;
document.getElementById('wins').innerHTML = "Wins: ";


let imageCounter = 0;
let jailImages = {};

lock1.addEventListener('click', function(e) {
  if (lock1.getAttribute('data-visible') === "false") {
    
    lock1.setAttribute('data-visible', true);
    const img1 = document.getElementById('img1');
    const jailImage = new Image();
    jailImage.src = jail[0];
    jailImage.style.position = 'absolute';
    jailImage.setAttribute('id', 'jailImage' + imageCounter);
    img1.parentNode.appendChild(jailImage);
    jailImages['lock1'] = jailImage; 
    imageCounter++;
    
  } else {
    lock1.setAttribute('data-visible', false);
    const jailImage = jailImages['lock1']; 
    jailImage.parentNode.removeChild(jailImage);
    imageCounter--;
  }
});
lock2.addEventListener('click', function(e) {
  if (lock2.getAttribute('data-visible') === "false") {
    lock2.setAttribute('data-visible', true);
    const img2 = document.getElementById('img2');
    const jailImage = new Image();
    jailImage.src = jail[0];
    jailImage.style.position = 'absolute';
    jailImage.setAttribute('id', 'jailImage' + imageCounter);
    img2.parentNode.appendChild(jailImage);
    jailImages['lock2'] = jailImage; 
    imageCounter++;
  } else {
    lock2.setAttribute('data-visible', false);
    const jailImage = jailImages['lock2'];
    jailImage.parentNode.removeChild(jailImage);
    imageCounter--;
  }  
});

lock3.addEventListener('click', function(e) {
  if (lock3.getAttribute('data-visible') === "false") {
    lock3.setAttribute('data-visible', true);
    const img3 = document.getElementById('img3');
    const jailImage = new Image();
    jailImage.src = jail[0];
    jailImage.style.position = 'absolute';
    jailImage.setAttribute('id', 'jailImage' + imageCounter);
    img3.parentNode.appendChild(jailImage);
    jailImages['lock3'] = jailImage; 
    imageCounter++;
  } else {
    lock3.setAttribute('data-visible', false);
    const jailImage = jailImages['lock3'];
    jailImage.parentNode.removeChild(jailImage);
    imageCounter--;
  }  
});

lock4.addEventListener('click', function(e) {
  if (lock4.getAttribute('data-visible') === "false") {
    lock4.setAttribute('data-visible', true);
    const img4 = document.getElementById('img4');
    const jailImage = new Image();
    jailImage.src = jail[0];
    jailImage.style.position = 'absolute';
    jailImage.setAttribute('id', 'jailImage' + imageCounter);
    img4.parentNode.appendChild(jailImage);
    jailImages['lock4'] = jailImage; 
    imageCounter++;
  } else {
    lock4.setAttribute('data-visible', false);
    const jailImage = jailImages['lock4'];
    jailImage.parentNode.removeChild(jailImage);
    imageCounter--;
  }  
});



let selectedImages = [];
function changeImages() {
    
    if (lock_counts > 0 || win_counts > 0) {
      if (lock1.getAttribute('data-visible') === "true") {
        lock1.setAttribute('data-visible', false);
        const jailImage = jailImages['lock1']; 
        jailImage.parentNode.removeChild(jailImage);
        imageCounter--;
        lock_counts = 0;
        win_counts = 0;
        
        
      }
      if (lock2.getAttribute('data-visible') === "true") {
        lock2.setAttribute('data-visible', false);
        const jailImage = jailImages['lock2']; 
        jailImage.parentNode.removeChild(jailImage);
        imageCounter--;
        lock_counts = 0;
        
      }
      if (lock3.getAttribute('data-visible') === "true") {
        lock3.setAttribute('data-visible', false);
        const jailImage = jailImages['lock3']; 
        jailImage.parentNode.removeChild(jailImage);
        imageCounter--;
        lock_counts = 0;
        
      }
      if (lock4.getAttribute('data-visible') === "true") {
        lock4.setAttribute('data-visible', false);
        const jailImage = jailImages['lock4']; 
        jailImage.parentNode.removeChild(jailImage);
        imageCounter--;
        lock_counts = 0;
        
      }
    }
    
    
    document.getElementById('wins').innerHTML = "Wins: ";
    const images = ['lmaoo/fruit1.gif', 'lmaoo/fruit2.gif', 'lmaoo/fruit3.gif', 'lmaoo/fruit4.gif', 'lmaoo/fruit5.gif'];

    if (bet_money === 1) {
      if (money < 1) { 
        money -= 0;
      } else {
        if (lock1.getAttribute('data-visible') === 'true') {
          selectedImages[0] = locked1;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock2.getAttribute('data-visible') === 'true') {
          selectedImages[1] = locked2;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock3.getAttribute('data-visible') === 'true') {
          selectedImages[2] = locked3;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock4.getAttribute('data-visible') === 'true') {
          selectedImages[3] = locked4;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        while (selectedImages.length < 4) {
            const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
          }
          
        }
       
        money -= 1;
      }
    
    if (bet_money === 2) {
      if (money < 2) { 
        money -= 0;
      } else {
        if (lock1.getAttribute('data-visible') === 'true') {
          selectedImages[0] = locked1;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock2.getAttribute('data-visible') === 'true') {
          selectedImages[1] = locked2;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock3.getAttribute('data-visible') === 'true') {
          selectedImages[2] = locked3;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock4.getAttribute('data-visible') === 'true') {
          selectedImages[3] = locked4;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        while (selectedImages.length < 4) {
            const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
          }
          
        }
        money -= 2;
      
    }
    if (bet_money === 3) {
      if (money < 3) { 
        money -= 0;
      } else {
        if (lock1.getAttribute('data-visible') === 'true') {
          selectedImages[0] = locked1;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock2.getAttribute('data-visible') === 'true') {
          selectedImages[1] = locked2;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock3.getAttribute('data-visible') === 'true') {
          selectedImages[2] = locked3;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock4.getAttribute('data-visible') === 'true') {
          selectedImages[3] = locked4;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        while (selectedImages.length < 4) {
            const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
          }
          
        }
        money -= 3;
      
    }
    if (bet_money === 5) {
      if (money < 5) { 
        money -= 0;
      } else {
        if (lock1.getAttribute('data-visible') === 'true') {
          selectedImages[0] = locked1;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock2.getAttribute('data-visible') === 'true') {
          selectedImages[1] = locked2;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock3.getAttribute('data-visible') === 'true') {
          selectedImages[2] = locked3;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        if (lock4.getAttribute('data-visible') === 'true') {
          selectedImages[3] = locked4;
          lock_counts += 1
        } else {
          const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
        }
        while (selectedImages.length < 4) {
            const randomIndex = Math.floor(Math.random() * images.length);
            selectedImages.push(randomIndex);
          }
          
        }
        money -= 5;
      
      
    }
    if (money >= bet_money) {
      if (selectedImages.every(image => image === 0)) {
        if (bet_money === 1) {
          win_counts += 1;
          money += 3;
          document.getElementById('wins').innerHTML = "Wins: " + 3 + euroSymbol;
          
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }

        else if (bet_money === 2) {
          win_counts += 1
          money += 6;
          document.getElementById('wins').innerHTML = "Wins: " + 6 + euroSymbol;
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }
        else if (bet_money === 3) {
          win_counts += 1
          money += 9;
          document.getElementById('wins').innerHTML = "Wins: " + 9 + euroSymbol;
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }
        else if (bet_money === 5) {
          win_counts += 1
          money += 15;
          document.getElementById('wins').innerHTML = "Wins: " + 15 + euroSymbol;
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }

      }
  
      if (selectedImages.every(image => image === 1)) {
        if (bet_money === 1) {
          win_counts += 1
          money += 4;
          document.getElementById('wins').innerHTML = "Wins: " + 4 + euroSymbol;
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }
        else if (bet_money === 2) {
          win_counts += 1
          money += 8;
          document.getElementById('wins').innerHTML = "Wins: " + 8 + euroSymbol;
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }
        else if (bet_money === 3) {
          win_counts += 1
          money += 12;
          document.getElementById('wins').innerHTML = "Wins: " + 12 + euroSymbol;
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }
        else if (bet_money === 5) {
          win_counts += 1
          money += 20;
          document.getElementById('wins').innerHTML = "Wins: " + 20 + euroSymbol;
          var audio = new Audio('small_win.wav');
          audio.addEventListener('canplaythrough', function() {
            audio.play();
          });
        }

      }
      function playSound() {
        var audio = new Audio('small_win.wav');
        audio.play();
      }
      function playSoundBig() {
        var audio = new Audio('big_win.wav');
        audio.play();
      }


      if (selectedImages.every(image => image === 2)) {
        if (bet_money === 1) {
          win_counts += 1
          money += 5;
          document.getElementById('wins').innerHTML = "Wins: " + 5 + euroSymbol;
          playSound();
        }
        else if (bet_money === 2) {
          win_counts += 1
          money += 10;
          document.getElementById('wins').innerHTML = "Wins: " + 10 + euroSymbol;
          playSound();
        }
        else if (bet_money === 3) {
          win_counts += 1
          money += 15;
          document.getElementById('wins').innerHTML = "Wins: " + 15 + euroSymbol;
          playSound();
        }
        else if (bet_money === 5) {
          win_counts += 1
          money += 25;
          document.getElementById('wins').innerHTML = "Wins: " + 25 + euroSymbol;
          playSound();
        }

      }
  
      if (selectedImages.every(image => image === 3)) {
        if (bet_money === 1) {
          win_counts += 1
          money += 6;
          document.getElementById('wins').innerHTML = "Wins: " + 6 + euroSymbol;
          playSound();
        }
        else if (bet_money === 2) {
          win_counts += 1
          money += 12;
          document.getElementById('wins').innerHTML = "Wins: " + 12 + euroSymbol;
          playSound();
        }
        else if (bet_money === 3) {
          money += 18;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 18 + euroSymbol;
          playSound();
        }
        else if (bet_money === 5) {
          money += 30;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 30 + euroSymbol;
          playSound();
        }

      }
  
      if (selectedImages.every(image => image === 4)) {
        if (bet_money === 1) {
          money += 10;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 10 + euroSymbol;
          playSoundBig();
        }
        else if (bet_money === 2) {
          money += 20;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 20 + euroSymbol;
          playSoundBig();
        }
        else if (bet_money === 3) {
          money += 30;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 30 + euroSymbol;
          playSoundBig();
        }
        else if (bet_money === 5) {
          money += 50;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 50 + euroSymbol;
          playSoundBig();
        }

      }
  
      if (selectedImages.filter(image => image === 4).length === 3) {
        if (bet_money === 1) {
          money += 5;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 5 + euroSymbol;
          playSound();
        }
        else if (bet_money === 2) {
          money += 10;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 10 + euroSymbol;
          playSound();
        }
        else if (bet_money === 3) {
          money += 15;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 15 + euroSymbol;
          playSound();
        }
        else if (bet_money === 5) {
          money += 25;
          win_counts += 1
          document.getElementById('wins').innerHTML = "Wins: " + 25 + euroSymbol;
          playSound();
        }

      }
    }

    document.getElementById('img1').src = images[selectedImages[0]];
    document.getElementById('img2').src = images[selectedImages[1]];
    document.getElementById('img3').src = images[selectedImages[2]];
    document.getElementById('img4').src = images[selectedImages[3]];
    
    document.getElementById('money').innerHTML = balance + money + euroSymbol;
    console.log(selectedImages);
    locked1 = selectedImages[0];
    locked2 = selectedImages[1];
    locked3 = selectedImages[2];
    locked4 = selectedImages[3];
    selectedImages = [];
  }
bet_button.addEventListener('click', function(e) {
  current_bet_index = (current_bet_index + 1) % bet_value.length;
  document.getElementById('bet').innerHTML = bet + bet_value[current_bet_index] + euroSymbol;
  bet_money = bet_value[current_bet_index]

})
