


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has been fully loaded')
    console.table(animals)

    //select header by id
    const $header = document.getElementById('header')

    //console.log(header) what do you think you'll see?
    console.log($header)

    //change color of header text
    $header.style = "color: red"

    //select card container div by class
    const $cardContainer = document.querySelector('.card-container')


    //console.log cardContainer to ensure it has been selected accurately

    //map through the data
    animals.map(animal => {
        //create variables to reference pieces of data
        const animalName = animal.name
        const animalDescription = animal.description
        const animalImage = animal.image

        //create <div> element for card
        const $card = document.createElement('div')


        //add "card" class to card div
        //write code on whiteboard
        $card.className = 'card'


        //append "card" div to cardContainer
        $cardContainer.appendChild($card)

        //create image element
        const $image = document.createElement('img')

        //console.log image

        //add class name attribute to image element
        $image.className = 'image'

        //console.log image

        //add src to image element
        //write code on whiteboard
        $image.src = animalImage

        //append image to parent (card div)
        $card.appendChild($image)
        //Check to ensure images rendered w console.log

        //create card-body div 
        const $cardBody = document.createElement('div')

        //give card-body div a class of "card-body"
        $cardBody.className = 'card-body'

        //append card-body div to card div
        $card.appendChild($cardBody)

        //create h5 tag for card title
        const cardTitle = document.createElement('h5')


        //add "card-title" class to card title
        cardTitle.className = 'card-title'

        //add title of animal's name
        cardTitle.innerText = animalName

        //append h5 tag to card body div
        $cardBody.appendChild(cardTitle)


        //can stop here unless you would like to keep going
        
        //create p tag 

        //add "card-text" class to p tag

        //add inner HTML of animal description to p tag

        //append p tag to card-body

        //create a element


        //add class of "btn btn-primary"


        //add inner HTML of "Go somewhere"


        //append button to card-body

    })
})