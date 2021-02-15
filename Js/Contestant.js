class Contestant {
    constructor(){
      this.index = 0;
      this.name = null;
      this.answer = "";
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name: this.name,
        answer: this.answer
      });
    }
  
    getContestantInfo(){
      var contestantInfoRef = database.ref("contestants")
      contestantInfoRef.on("value", (data)=>{
        allcontestants = data.val()
      })
    }
  }
  