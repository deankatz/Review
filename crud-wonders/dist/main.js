const source = $("#wonders-template").html()
const template = Handlebars.compile(source)

const render = function(wonders){
    $("#wonders").empty()
    let newHtml = template({wonders})
    $("#wonders").append(newHtml)//??
}

const fetch = function(){
    $.get("/wonders", function(response){//the param here was sent from server.js at the end line"res.send(WONDERS)
        render(response)
    })
}

const addWonder = function(){
    let newWonder = $("#new-wonder-input").val()
    let newLocation = $("#new-location-input").val()

    let data = { name: newWonder, location: newLocation }//DATA
    $.post('/wonder', data, function (response) {//"sending DATA through POST"!!!!!!!!
    // -ONLY when at server we wrote RES.SEND/END the callback is INVOKED!!!!
    console.log("POST complete")  //POST the newWonder to the server
    // if we invoke the fetch() inside the console log callback- we dont even need to refresh the page!
    render(response)
}) 
}
const updateVisited = function (wonder) {//we need to invoke updateVisitied at click just up here
    $.ajax({
        url: `wonder/${wonder}`,
        method: "PUT",
        success: function (response) {
            console.log("PUT complete")
            fetch()
        }
    })
}


$("#wonders").on("click", ".visit", function(){//adds to wonders, which is not the handle bar
    let wonder = $(this).closest(".wonder").find(".name").text()
    updateVisited(wonder.split("-")[0].trim())
    // updateVisited()//הוספתי את זה, ולקחתי אתכל הכפתור אחרי ההגדרה לעיל כדי שיכלול את כל התוספות של הוונדרים
    //PUT this to the server: update the wonder's `visited` status to `true`
})


$.ajax({
    url: '/wonder/Colosseum',
    method: "DELETE",
    success: function () { 
        console.log("delete complete")
        fetch()
    }
})


fetch() //load the data on page load