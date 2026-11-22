const heading = document.querySelector('h1');
console.log(heading)

const paragraphs = document.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
if(lastParagraph){
    lastParagraph.remove();
}

const subheading = document.querySelector('h2');
subheading.addEventListener('click',function(){
    subheading.style.backgroundColor = 'red';
} );

const headingH3 = document.querySelector('h3');
headingH3.addEventListener('click',function(){
    headingH3.style.display = 'none';
} );


const boldBtn = document.createElement('button');
boldBtn.textContent = 'to make bold';
document.body.prepend(boldBtn);

boldBtn.addEventListener('click', function(){
    const allParagraphs = document.querySelectorAll('p');

    allParagraphs.forEach(function(paragraph){
        paragraph.style.fontWeight = 'bold';
    });
})

const headingg = document.querySelector('h1');
headingg.addEventListener('mouseenter', function(){
    const randomSize = Math.floor(Math.random() * 101);
    headingg.style.fontSize = randomSize + 'px';
})

const allpara = document.querySelectorAll('p');
const secondpara = allpara[1];

if(secondpara){
    secondpara.style.transition = 'opacity 0.5s ease';

    secondpara.addEventListener('mouseenter', function(){
        secondpara.style.opacity = '0';
    });

    secondpara.addEventListener('mouseleave', function(){
        secondpara.style.opacity = '1';
    });
}

