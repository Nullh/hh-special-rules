/*module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    //const responseMessage = name
    //    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const connstr = CosmosDBConnectionString;

    context.res = {
        body: responseMessage
    };
}
*/
module.exports = async function (context, req, rules) {


    var returnMessge = `<html><head><title>Special Rules</title><style>
    .collapsible {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 3.25vw;
        font-weight: bold;
      }
      
      /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
      .active, .collapsible:hover {
        background-color: #ccc;
      }
      
      /* Style the collapsible content. Note: hidden by default */
      .content {
        padding: 0 18px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }
    
      .collapsible:after {
        content: "${"\\02795"}"; /* Unicode character for "plus" sign (+) */
        font-size: 3vw;
        color: white;
        float: right;
        margin-left: 5px;
      }
      
      .active:after {
        content: "${"\\2796"}"; /* Unicode character for "minus" sign (-) */
      }
    
    .flavour {
        font-style: italic;
        font-size: 1.5vw;
    }
    
    .source {
        font-style: italic;
        font-size: 1vw;
    }
    
    .button {
        font-weight: bold;
    }

    .rule-text {
        font-size: 2.5vw;
    }
    
    body {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    </style></head><body>`;

    returnMessge += "<h1>Horus Heresy: Age of Darkness Special Rules</h1>\n";
    var colourFlip = true
    rules.forEach(rule => {
        var bgColour = colourFlip ? "Gainsboro" : "DarkGrey"
        returnMessge += `<button type="button" class="collapsible" style="background-color:${bgColour}">${rule.name}</button>\n<div class="content">\n<p class="flavour">${rule.flavour}</p>\n<div class="rule-text">${rule.text}</div><p class="source">${rule.source}</p></div>\n`;
        colourFlip = !colourFlip
    });
    returnMessge += `<script>
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    }
    </script></body></html>`
    /*try {
        context.res.status(200).json(rules);
      } catch (error) {
        context.res.status(500).json(error);
    }
    */

    context.res = {
        headers: {
            "Content-Type": "text/html"
        },
        body: returnMessge
    };

};