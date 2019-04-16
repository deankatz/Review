// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance
let apiManager= new APIManager()
let renderer = new Renderer()

const loadData=function(){
    apiManager.loadData() 
}

const renderData = function(){
    renderer.render(apiManager.getData())
}


