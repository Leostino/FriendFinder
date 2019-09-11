
// connect to friends object in friends.js file

const friends = require("../data/friends");

// test to see if connected

console.log(friends[1].scores);

// Get api route function with app as parameter because no express dependency on this page

function apiRoutes(app) {

  // get method

  app.get("/api/friends", function(req, res) {

    res.json(friends);

  });

  // post method if user posts there input

  app.post("/api/friends", function(req, res) {
        
    let newFriend = {
    name: req.body.name,
    photo:req.body.photo,
    scores:[]
    };

    // new array to filter user's input

    let scoresArray = [];

    // loop throught user's input and push user's scores into the scores array in friends obj

    for (let i = 0; i < req.body.scores.length; i++) {

    
            
      scoresArray.push(parseInt(req.body.scores[i]));

    }

    newFriend.scores = scoresArray;

    // Cross check the new friend entry with the existing ones
      
    var scoreComparisionArray = [];
       
    for(let i=0; i < friends.length; i++){

      // Check each friend's scores and sum difference in points
        
      let currentComparison = 0;
      
      for(let j=0; j < newFriend.scores.length; j++){
          
        currentComparison += Math.abs(newFriend.scores[j] - friends[i].scores[j] );
        
      }

      // Push each comparison between friends to array
        
      scoreComparisionArray.push(currentComparison);
    
    }

    // Determine the best match using the postion of best match in the friends array
      
    let bestMatch = 0; // assume its the first person to start
    
    for(let i = 1; i < scoreComparisionArray.length; i++) {
      
      // Lower number in comparison difference means better match
        
      if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatch]){
        
        bestMatch = i;
      
      }

    
    }

    // ***NOTE*** If the 2 friends have the same comparison, then the NEWEST entry in the friends array is chosen
    
    let bestFriendMatch = friends[bestMatch];



    // Reply with a JSON object of the best match
     
    res.json(bestFriendMatch);

    // Push the new friend to the friends data array for storage
    
    friends.push(newFriend);

  })

}


// export the api route function

module.exports = apiRoutes;