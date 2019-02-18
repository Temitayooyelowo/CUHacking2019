import requests
import os
headers = {"Authorization": "Token 786b261fcd98b88abbb5254d233de5edfbdc1b45"}
languages = {
		".css":"css",
		".html":"html",
		".js":"javascript",
		".py":"python",
		".java":"java",
		".cc":"c++",
		".cpp":"c++",
		".c":"c",
		".cs":"c#"
		}
user = "christopher-wang"
def get_repos(user): 
    repos = []
    request = requests.get(f"https://api.github.com/users/{user}/repos", headers=headers)
    if request.status_code == 200:
        repos = request.json()
        for index, repo in enumerate(repos):
            repos[index] = repo["name"]
        return repos

def get_commits(user, repo): 
    request = requests.get(f"https://api.github.com/repos/{user}/{repo}/commits?author={user}", headers=headers)
    commits = []
    if request.status_code == 200:
        commits = request.json()
        for index, commit in enumerate(commits):
            commits[index] = commit["sha"]
        return commits

def get_insertions(user, repo, sha): 
    request = requests.get(f"https://api.github.com/repos/{user}/{repo}/commits/{sha}", headers=headers)
    if request.status_code == 200:
        files = request.json()["files"]
        inserts = {}
        for file in files:
        	_, file_extension = os.path.splitext(file["filename"]) 
        	if file_extension in languages:
        		if languages[file_extension] in inserts:
        			inserts[languages[file_extension]] += file["additions"]
        		else:
        			inserts[languages[file_extension]] = file["additions"]
        return inserts

def get_all(user):
	data = []
	repos = get_repos(user)
	for repo in repos:
		value = {}
		value["name"] = repo
		inserts = []
		for commit in get_commits(user, repo):
			inserts.append(get_insertions(user, repo, commit))
		value["data"] = inserts
		data.append(value)
	return data

print(get_all(user))