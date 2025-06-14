const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide some input.");
} else {
  const reversed = args.reverse().join(' ').toUpperCase();
  console.log(reversed);
}
