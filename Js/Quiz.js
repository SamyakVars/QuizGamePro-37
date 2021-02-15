class Quiz{
    constructor(){
        this.title = createElement("h3")
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
          });

    }
    reset(state, count){
        database.ref('/').update({
            gameState: state,
            contestantCount: count
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant()
            var contestantCountRef = await database.ref('contestantCount').once("value")
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val()
                contestant.getCount()
            }
            question = new Question()
            question.display()
        }
    }

    play(){
       question.hide()
       background("yellow")
       this.title.html("Results of the Quiz")
       this.title.position(350, 0)

       contestant.getContestantInfo()
       //resetB.mousePressed(quiz.reset(0, 0))
       //quiz.update()
       

       if(allcontestants !== undefined){

        text("*Note: Contestants who answered correctly are highlighted with green", 350, 160)
        var y = 170;
           for(var plr in allcontestants){
               var correctAns = "2"
               
               if(correctAns == allcontestants[plr].answer){
                   fill("green")
               }
               else{
                   fill("red")
               }

               y += 20
            
                textSize(15)
                text(allcontestants[plr].name + ": " + allcontestants[plr].answer, 350, y)


            }
       }
    }
}
