let userInput = document.getElementById('date');
let user = userInput.max = new Date().toISOString().split("T")[0]       
let result = document.getElementById('result')



function calculateAge() {
    
    let namefetch = document.getElementById('name').value


    let birthDate = new Date(userInput.value)

    let d1 = birthDate.getDate();
    console.log('D1', d1);
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date() 

    let d2 = today.getDate();
    console.log('D2', d2);
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();
    console.log('Y222', y2);

    

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1
    }else{
        y3--;
        m3 = 12 + m2 -ml
    }

    if (d2 >= d1) {
        d3 = d2 - d1; 
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `Hey <span>${namefetch}</span> You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.
    <br> Note that leap years have not been included here, If you want you to add leap years you can add yourself`
    
   

    const utter = new SpeechSynthesisUtterance();
    utter.text = document.querySelector('#result').innerHTML
    utter.lang = 'hi-IN'
    let voices = speechSynthesis.getVoices()
    utter.voice = voices.find(voice => voice.lang === 'hi-IN')
    speechSynthesis.speak(utter)

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate()
    }
}