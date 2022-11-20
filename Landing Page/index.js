if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
}

function ready() {
    let sobreBtn = document.getElementById('about')
    sobreBtn.addEventListener('click', scrollSobre);
    
    let communityBtn = document.getElementById('community')
    communityBtn.addEventListener('click', scrollCommunity);

    let contactBtn = document.getElementById('contact')
    contactBtn.addEventListener('click', scrollContact);

    let submitBtn = document.getElementsByClassName('submit-btn')
    submitBtn[0].addEventListener('click', notCompleteAlert);
}

function scrollSobre(event) {
    let sobreSection = document.getElementById('abtSection')
    sobreSection.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

function scrollCommunity(event) {
    let communitySection = document.getElementById('comSection')
    communitySection.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

function scrollContact(event) {
    let contactSection = document.getElementById('contSection')
    contactSection.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

function notCompleteAlert(event) {
    alert('ESSA PARTE NÃO ESTÁ COMPLETA, ISSO É APENAS UM LAYOUT!');
}