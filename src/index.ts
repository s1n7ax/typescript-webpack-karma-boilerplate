export default function main() {
	if(process.env.NODE_ENV === 'development') {
		console.log('only in dev')
	}

	console.log('hello world')
}

main();
