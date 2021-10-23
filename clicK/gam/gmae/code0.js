gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObject2Objects1_1final = [];

gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];
gdjs.New_32sceneCode.GDNewObject6Objects1= [];
gdjs.New_32sceneCode.GDNewObject6Objects2= [];
gdjs.New_32sceneCode.GDbuy_95autoObjects1= [];
gdjs.New_32sceneCode.GDbuy_95autoObjects2= [];
gdjs.New_32sceneCode.GDauto_95textObjects1= [];
gdjs.New_32sceneCode.GDauto_95textObjects2= [];
gdjs.New_32sceneCode.GDbuy_95fastObjects1= [];
gdjs.New_32sceneCode.GDbuy_95fastObjects2= [];
gdjs.New_32sceneCode.GDbuy_95moreObjects1= [];
gdjs.New_32sceneCode.GDbuy_95moreObjects2= [];
gdjs.New_32sceneCode.GDfast_95textObjects1= [];
gdjs.New_32sceneCode.GDfast_95textObjects2= [];
gdjs.New_32sceneCode.GDmore_95textObjects1= [];
gdjs.New_32sceneCode.GDmore_95textObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32sceneCode.GDNewObject2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32sceneCode.GDNewObject2Objects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDNewObject2Objects1[i].timerElapsedTime("timer", 1.5)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects1[k] = gdjs.New_32sceneCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDNewObject2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32sceneCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject5Objects1[i].setWidth((( gdjs.New_32sceneCode.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObject2Objects1[0].getTimerElapsedTimeInSeconds("timer")) * 40);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32sceneCode.GDNewObject2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects2Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32sceneCode.GDNewObject2Objects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbuy_9595autoObjects1Objects = Hashtable.newFrom({"buy_auto": gdjs.New_32sceneCode.GDbuy_95autoObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbuy_9595fastObjects1Objects = Hashtable.newFrom({"buy_fast": gdjs.New_32sceneCode.GDbuy_95fastObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbuy_9595moreObjects1Objects = Hashtable.newFrom({"buy_more": gdjs.New_32sceneCode.GDbuy_95moreObjects1});gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObject2Objects1[i].timerElapsedTime("timer", 1.5) ) {
        gdjs.New_32sceneCode.condition2IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects1[k] = gdjs.New_32sceneCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects1.length = k;}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].resetTimer("timer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects, runtimeScene, true, true);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDNewObject2Objects1[i].timerElapsedTime("timer", 1.5)) ) {
        gdjs.New_32sceneCode.condition2IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects1[k] = gdjs.New_32sceneCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects1.length = k;}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("fast_text"), gdjs.New_32sceneCode.GDfast_95textObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].resetTimer("");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDfast_95textObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDfast_95textObjects1[i].setString("10$");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32sceneCode.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject4Objects1[i].setRadius(50);
}
}}

}


{

gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDNewObject2Objects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects2);
gdjs.New_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects2Objects, runtimeScene, true, true);
if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDNewObject2Objects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDNewObject2Objects1_1final.indexOf(gdjs.New_32sceneCode.GDNewObject2Objects2[j]) === -1 )
            gdjs.New_32sceneCode.GDNewObject2Objects1_1final.push(gdjs.New_32sceneCode.GDNewObject2Objects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.New_32sceneCode.GDNewObject2Objects1_1final, gdjs.New_32sceneCode.GDNewObject2Objects1);
}
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32sceneCode.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject4Objects1[i].setRadius(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("buy_auto"), gdjs.New_32sceneCode.GDbuy_95autoObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbuy_9595autoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 10;
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("auto_text"), gdjs.New_32sceneCode.GDauto_95textObjects1);
/* Reuse gdjs.New_32sceneCode.GDbuy_95autoObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(10);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbuy_95autoObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbuy_95autoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDauto_95textObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDauto_95textObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buy_fast"), gdjs.New_32sceneCode.GDbuy_95fastObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbuy_9595fastObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fast_text"), gdjs.New_32sceneCode.GDfast_95textObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{runtimeScene.getVariables().getFromIndex(1).mul(2);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDfast_95textObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDfast_95textObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) + ("$"));
}
}{runtimeScene.getVariables().getFromIndex(2).add(0.1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buy_more"), gdjs.New_32sceneCode.GDbuy_95moreObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbuy_9595moreObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("more_text"), gdjs.New_32sceneCode.GDmore_95textObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{runtimeScene.getVariables().get("more cos").mul(2);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDmore_95textObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmore_95textObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) + ("$"));
}
}{runtimeScene.getVariables().get("get").add(1);
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObject2Objects1[i].timerElapsedTime("timer", 1.5) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects1[k] = gdjs.New_32sceneCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].resetTimer("timer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


{
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects2.length = 0;
gdjs.New_32sceneCode.GDbuy_95autoObjects1.length = 0;
gdjs.New_32sceneCode.GDbuy_95autoObjects2.length = 0;
gdjs.New_32sceneCode.GDauto_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDauto_95textObjects2.length = 0;
gdjs.New_32sceneCode.GDbuy_95fastObjects1.length = 0;
gdjs.New_32sceneCode.GDbuy_95fastObjects2.length = 0;
gdjs.New_32sceneCode.GDbuy_95moreObjects1.length = 0;
gdjs.New_32sceneCode.GDbuy_95moreObjects2.length = 0;
gdjs.New_32sceneCode.GDfast_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDfast_95textObjects2.length = 0;
gdjs.New_32sceneCode.GDmore_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDmore_95textObjects2.length = 0;

gdjs.New_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
