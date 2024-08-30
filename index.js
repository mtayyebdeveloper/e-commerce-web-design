let sitehearts = document.getElementById('site-heart');
sitehearts.addEventListener('click', () => {
    sitehearts.style.color = 'red'
});

let productSearchbtn = document.getElementById('pro-btn');

productSearchbtn.addEventListener("click", () => {
    let searchbox = document.getElementById('site-search').value.toUpperCase();
    let ourproduocts = document.getElementById('our-products');
    let divs = ourproduocts.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        let pera = divs[i].getElementsByTagName("p")[0];

        if (pera) {
            let textv = pera.textContent || pera.innerHTML;

            if (textv.toUpperCase().indexOf(searchbox) > -1) {
                divs[i].style.display = "";
            } else {
                divs[i].style.display = "none"
            }
        }
    }
});
// menu open when max width is 800px
let menupoenicon = document.getElementById('open-menu-icon');
let menucloseicon = document.getElementById('menu-close-icon');
let sitemenu = document.getElementById('site-menus');

menupoenicon.addEventListener("click", ()=>{
    sitemenu.style.display ="block"
});
menucloseicon.addEventListener("click", ()=>{
    sitemenu.style.display ="none"
});

// contact form 

let btnsub = document.getElementById('btn-sub');
function btnsubf() {
    let emailf = document.getElementById('emailuser');
    let massagef = document.getElementById('textareauser');
    let namef = document.getElementById('nameuser');
    if (namef.value != "" && massagef.value != "" && emailf.value != "") {
        alert('Thank you so much....')
    } else {
        alert('Please fill the form!')
    }
}
