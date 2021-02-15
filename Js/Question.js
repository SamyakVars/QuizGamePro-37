class Question{
    constructor(){
        this.title = createElement("h3")
        this.question = createElement("h3")
        this.questionCon = createElement("h3")
        this.option1 = createElement("h3")
        this.option2 = createElement("h3")
        this.option3 = createElement("h3")
        this.option4 = createElement("h3")
        this.inputName = createInput("Name")
        this.inputAnswer = createInput("Correct Answer No.")
        this.button = createButton("Submit")
    }

    display(){
        this.title.html("My Quiz Game")
        this.title.position(350, 0)

        this.question.html("Question: Mr. and Mrs. Smith have 5 daughters, each of the daughters have 1 brother.")
        this.question.position(100, 80)

        this.questionCon.html("How many members does the Smith family have?")
        this.questionCon.position(100, 110)

        this.option1.html("(1.) 10")
        this.option1.position(100, 175)

        this.option2.html("(2.) 12")
        this.option2.position(100, 225)

        this.option3.html("(3.) 8")
        this.option3.position(250, 175)

        this.option4.html("(4.) 9")
        this.option4.position(250, 225)

        this.inputName.position(200, 320)
        this.inputAnswer.position(400, 320)

        this.button.position(360, 360)
        this.button.mousePressed(()=>{
            this.title.hide()
            this.inputName.hide()
            this.inputAnswer.hide()
            this.button.hide()

            contestant.name = this.inputName.value()
            contestant.answer = this.inputAnswer.value()

            contestantCount += 1
            contestant.index = contestantCount  
            contestant.update()        
            contestant.updateCount(contestantCount)
            


        })
    }

    hide(){
        this.title.hide()
        this.inputName.hide()
        this.inputAnswer.hide()
        this.button.hide()
    }
}