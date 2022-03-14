const { createHmac } = await import("crypto");

const secret = "blah blah";
const hash = createHmac("sha256", secret)
	.update("Blah Blah")
	.digest("hex");
	
console.log(hash);