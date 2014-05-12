## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
This command adds a file to the repo to be tracked. 

#### branch
This creates a new branch in the repo. 

#### checkout
In git there is something similar to a present working directory or in the terminology preferred by git, HEAD. This command changes the head and shifts the present branch to something else.

#### clone
This clones a repository into a newly created directory. Essentially it creates a new directory and then tracks it as well. Also it allows for pulling the information from the remote branch and will merge the remote master branch to the local one.

#### commit
This saves changes that have been made to the branch and creates a new head.

#### fetch
If a local repository is behind the remote repository, fetch will gather all the commits that are new and will store them in the local repository. Note that it does not merge them to the current branch.

#### log
Allows you to view the change log for a particular branch. There are certain useful flags: --author allows you to look for commits from a specific author. --since --before allows you to look at a certain time period. --grep allows you to search for specific key words in commit messages. --p shows what has been changed. 

#### merge
When a repository is behind another this will create a new head with the changes from another repository. Essentially when there are a lot of commits in queue this will add them to the new repository.

#### pull
This command is a lot like doing a fetch + merge. 

#### push
When there are changes to the local depository that should be sent to the remote depository this command sends them to the remote.

#### reset
This command undos a commit and sends the HEAD to the previous commit in the branch.

#### rm
This removes a file from the repository.

#### status
This tells the commit status of the current branch. So it will show the pending file changes scheduled to be committed and give a summary of the other changes that are not being tracked in the repo.

## Release 4: Git Workflow

- Push files to a remote repository: commit + push
- Fetch changes: fetch 
- Commit locally: merge

## Release 5: Reflection

I had worked from the command line from the beginning as I felt that the GUI was not as intuitive and was not written for Linux systems. There was a bit of a learning curve at the beginning but I had worked with the Mercurial repository system in previous projects so a lot of it was already familar. I found that the learn github tutorial at pcottle.github.io/learnGitBranching/ was really helpful for getting a handle on some of the more advanced commands.
