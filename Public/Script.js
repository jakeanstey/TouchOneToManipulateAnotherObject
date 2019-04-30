// -----JS CODE-----
//@input Component.MeshVisual boxToManipulate

//@input Asset.Material materialOne

//@input Asset.Material materialTwo

var touchEvent = script.createEvent("TapEvent");
var turnOnEvent = script.createEvent("TurnOnEvent");

var touchHandler = function(eventData)
{
    var materialOne = script.materialOne;
    var materialTwo = script.materialTwo;
    var box = script.boxToManipulate;
    
    
    if(box.getMaterial(0).name == materialOne.name)
    {
        box.clearMaterials();
        box.addMaterial(materialTwo);
    }
    else
    {
        box.clearMaterials();
        box.addMaterial(materialOne);
    }
}

var turnOnHandler = function(eventData)
{
    var materialOne = script.materialOne;
    var box = script.boxToManipulate;
    box.clearMaterials();
    box.addMaterial(materialOne);
}

turnOnEvent.bind(turnOnHandler);
touchEvent.bind(touchHandler);