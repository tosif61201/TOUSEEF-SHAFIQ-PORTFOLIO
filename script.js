// tun page on clicking btn
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index)=>{
    el.onclick =()=>{
        const pageTurnId = el.getAttribute('data-page')
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }

        else{
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})

//Contect Me Button
const pages = document.querySelectorAll('.book-page.page-right')
const contectMeBtn = document.querySelector('.btn.contect-me')

contectMeBtn.onclick = ()=>{
    pages.forEach((page, index)=>{
        setTimeout(()=>{
            page.classList.add('turn');

            setTimeout(()=>{
                page.style.zIndex = 200 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

//Reverse Index Function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages -1;
    }
}

//back Profile Button
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () =>{
    pages.forEach((_, index)=>{
        setTimeout(()=>
        {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    },(index + 1) * 200 + 100 )
    })
}