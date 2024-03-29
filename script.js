function stringChop(str, size) {
  // your code here
	const chunks = [];

    // Iterate through the string, slicing it into chunks of length chunkLength
    for (let i = 0; i < str.length; i += chunkLength) {
        // Push each chunk to the array
        chunks.push(str.slice(i, i + chunkLength));
    }

    return chunks;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
