var currentLogLine = null;

JSIL.Host.getCanvas = function (desiredWidth, desiredHeight) {
    var e = document.getElementById("canvas");
    if (!e)
        return JSIL.Host.createCanvas(desiredWidth, desiredHeight);

    if (typeof (desiredWidth) === "number")
        e.width = desiredWidth;
    if (typeof (desiredHeight) === "number")
        e.height = desiredHeight;

    return e;
};

JSIL.Host.createCanvas = function (desiredWidth, desiredHeight) {
    var e = document.createElement("canvas");
    e.width = desiredWidth;
    e.height = desiredHeight;

    return e;
};

JSIL.Host.logWrite = function (text) {
    if (currentLogLine === null) {
        currentLogLine = document.createTextNode(text);
        appendLogLine(currentLogLine);
    } else {
        currentLogLine.textContent += text;
    }
};

JSIL.Host.logWriteLine = function (text) {
    var lines = text.split("\n");
    for (var i = 0, l = lines.length; i < l; i++) {
        var line = lines[i];
        if (currentLogLine === null) {
            var logLine = document.createTextNode(line);
            appendLogLine(logLine);
        } else {
            currentLogLine.textContent += line;
            currentLogLine = null;
        }
        appendLogLine(document.createElement("br"));
    }
};


JSIL.Host.throwException = function (e) {
    var stack = "";
    try {
        stack = e.stack || "";
    } catch (ex) {
        stack = "";
    }

    JSIL.Host.logWriteLine("Unhandled exception: " + String(e));

    if (stack.length > 0)
        JSIL.Host.logWriteLine(stack);
};



var appendLogLine = function (elt) {
    document.getElementsByTagName("body")[0].appendChild(elt);
};



var aborted = new Error("Aborted");


runScript = function (args) {

    

    //try {

    //eval.call(this, args.javascript);
    eval.call(window, args.javascript);

    

        JSIL.Initialize();

        alert(Program_Main);

        

        alert(typeof ($asm00));

        var entryPointFunction = eval.call(this, args.entryPoint);

        if (typeof (entryPointFunction) !== "function") {
            throw new Error("The entry point '" + args.entryPoint + "' is not a function.");
        }

    //entryPointFunction();
        Program_Main();
    //} catch (exc) {
    //    if (exc !== aborted)
    //        JSIL.Host.throwException(exc);
    //}
};