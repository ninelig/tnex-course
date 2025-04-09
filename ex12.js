function magicMirror(message, transformFunction) {
    const transformedMessage = transformFunction(message);
    return `The mirror says: ${transformedMessage}`;
}


console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));  
