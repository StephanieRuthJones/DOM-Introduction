


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has been fully loaded')
    console.table(animals)

    //select header by id
    //write code on whiteboard

    //console.log(header) what do you think you'll see?

    //change color of header text
    //write code on whiteboard


    //select card container div by class
    //write code on whiteboard


    //console.log cardContainer to ensure it has been selected accurately

    //map through the data
    animals.map(animal => {
        //create variables to reference pieces of data
        const animalName = animal.name
        const animalDescription = animal.description
        const animalImage = animal.image

        //create <div> element for card
        //write code on whiteboard

        //console.log card

        //add "card" class to card div
        //write code on whiteboard

        //console.log card

        //append "card" div to cardContainer
        //write code on whiteboard

        //console.log cardContainer

        //create image element

        //console.log image

        //add class name attribute to image element

        //console.log image

        //add src to image element
        //write code on whiteboard


        //append image to parent (card div)

        //Check to ensure images rendered w console.log

        //create div with class "card-body"


        //give card-body div a class of "card-body"


        //append card-body div to card div


        //create h5 tag for card title


        //add "card-title" class to card title


        //add title of animal's name


        //append h5 tag to card body div



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