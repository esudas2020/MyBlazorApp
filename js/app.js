function sayHello(name) {
    alert(`Hello ${name}`);
}

function getMessage() {
    var message = prompt("Type in your message");
    return message;
}

async function invokeLogMessageInCsharp() {
    await DotNet.invokeMethodAsync
    ('JsInteropDemo', 'logMessage', 'LogMessage in ConsoleLogger was invoked from JavaScript')
    .catch(error => 
    {
        console.log(error)
    });
}
