const request = require('request');
const rp = require('request-promise-native');
const languages = require('./models/languages');
const user = "christopher-wang";
const options = {
	uri: '',
	qs: {
		access_token: "786b261fcd98b88abbb5254d233de5edfbdc1b45"
	},
	headers: {
			'User-Agent': 'Request-Promise'
	},
	json: true
}

async function get_repos(user){
	options.uri = `https://api.github.com/users/${user}/repos`;
	try{
		let repos = [];
		const request = await rp(options);
		for(let i = 0; i < request.length; i++){
			repos[i] = request[i]['name'];
		}
		return repos;
	} catch(error) {
		console.error(error);
		return error;
	}
}

async function get_commits(user, repo){
	options.uri = `https://api.github.com/repos/${user}/${repo}/commits?author=${user}`;
	try{
		let commits = [];
		const request = await rp(options);
		for(let i = 0; i < request.length; i++){
			commits[i] = request[i]['sha'];
		}
		return commits;
	} catch(error) {
		console.error(error);
		return error;
	}
}

async function get_inserts(user, repo, sha){
	options.uri = `https://api.github.com/repos/${user}/${repo}/commits/${sha}`;
	try{
		let inserts = {};
		const request = await rp(options);
		files = request["files"]
		for(let i = 0; i < files.length; i++){
			let regex = /(?<=\.)[^.]*$/g;
			let extension = regex.exec(files[i]["filename"]);
			extension = !!extension ? extension[0] : extension;
			if(extension in languages){
				inserts["date"] = request["commit"]["author"]["date"]
				inserts["languages"] = {}
				if(languages[extension] in inserts["languages"] && files[i]["additions"] > 0){
					inserts["languages"][languages[extension]] += files[i]["additions"]
				} else{
					inserts["languages"][languages[extension]] = files[i]["additions"]
				}
			}
		}
		return inserts;
	} catch(error) {
		console.error(error);
		return error;
	}
}

async function get_all(user){
	let data = [];
	let repos = await get_repos(user);
	for(let repo of repos){
		let value = {};
		value["name"] = repo;
		let inserts	= [];
		let commits = await get_commits(user, repo);
		for (let commit of commits){
			let insertions = await get_inserts(user, repo, commit);
			if(JSON.stringify(insertions) !== JSON.stringify({})){
				inserts.push(insertions);
			}	
		}
		value["data"] = inserts;
		data.push(value);
	}
	return data;
}

async function main() {
	let getAll = await get_all(user)
	console.log(JSON.stringify(getAll));
}

main();