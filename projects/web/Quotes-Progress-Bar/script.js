const progress  = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const quote = document.querySelector('#quote')
const by = document.querySelector('#by')

const quotes = [
    {
        "quote":'“Creativity Is Intelligence Having Fun.”',
        "by":'– Albert Einstein'
    },
    {
        "quote":'“What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.”',
        "by":'– Don Zimmer'
    },
    {
        "quote":'“You Are Never Too Old To Set Another Goal Or To Dream A New Dream.”',
        "by":'– C.S. Lewis'
    },
    {
        "quote":'“Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.”',
        "by":'– Brian Tracy'
    }

]

let currentActive = 1

next.addEventListener('click', ()=>{
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})


prev.addEventListener('click', ()=>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }

    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    var progress_width = (actives.length-1)/(circles.length-1)*100 + "%"
    progress.style.width = progress_width

    if(currentActive === 1){
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }

    document.querySelector('.quote').classList.remove('fadeIn');
    document.querySelector('.quote').classList.add('fadeOut');
    setTimeout(()=>{
        quote.innerHTML = quotes[currentActive-1]["quote"]
        by.innerHTML = quotes[currentActive-1]["by"]
        document.querySelector('.quote').classList.remove('fadeOut');
        document.querySelector('.quote').classList.add('fadeIn');
    },400)
    


}

