#Version Control with Git and Github
The aim of this session is to introduce version control systems as a collaborative tool during software development. Focus will be on building skills that allow members of team to work on projects and build products with a "flow" that is seamless.

### Goals for this lesson
At the end of this session, you should be able to:

1. Configure your git environment and initialise a git repository.
+ Edit, stage and commit files to the repository.
+ Setup a Github account.
+ Create and collaborate. using Pull Requests
+ Select and use a Github workflow for a team project.

### Milestone 1: Git Basics
####1.0 - Configuration

1. Set up your git user name
+ Set up your git email address
+ Check your git settings

**Hint:** `git config`

+ Set up your favourite text editor to use with git

#### 1.1 - Setup

1. Create a new git repository
+ Clone an already existing git repository

#### 1.2 - Make Changes

1. Create or make an edit to a file
+ Stage the changes to the repository
+ Commit changes to repository using "-m" flag
+ Repeat first three steps but making a commit WITHOUT the "-m" flag
+ Discuss the difference between the `git add` and `git commit` commands

#### 1.3 - Inspecting a Repository

1. Check the state of the working directory and stage area
+ Discuss the difference between the working directory and staging area
+ Create a '.gitignore' file
+ Discuss what kinds of files should be ignored in a git repository
+ Check the history of commits made in the repository
+ Find all the commits made by a particular author
+ See graph of oneline commit messages

#### 1.4 - Viewing old commits

1. Discuss the 3 functions of the `git checkout` command
+  View all the files from a specific commit from the past
+ Can you edit checked-out files from an old commit? Discuss.
+ What does a "detached HEAD" state mean. Why is this an important feature for version control systems?
+  Check out an individual file from a past commit
+ How is this different from  checking out a commit?

#### 1.5 - Undoing Changes
1. Return to the previous version of a file just committed
+ Read on and discuss the use of the `git revert` command.
+ Draw a before and after diagram of the `git revert` command?
+ Read on and discuss the use of the `git reset` command.
+ Draw a before and after diagram of the `git reset` command.
+ The `git reset` command is considered **DANGEROUS**. Why?
+ Read and discuss the `git clean` command.

#### 1.6 - Aliases

Sometimes git commands can be long and 'finger-heavy'. Alias are the solution.

Create aliases for some your commonly used git commands.  **Note: By convention, aliases should be 2 letters.**

Example: `git status` becomes `git st`

1. Create an alias for `status` command as `st`.
+ Create an alias for the `checkout` command as `co`.
+ Create an alias for the `branch` command as `br`.
+ Create an alias for the `commit` command as `ci`.


**Hint:** Use the `git config` command



###Milestone 2: Git Branching Tutorial

  For this Milestone, you will be working on the  Main Session in the [Learning Git Branching Tutorial](http://pcottle.github.io/learnGitBranching/)

#### 2.0 - Introduction

+  Complete Introduction Sequence level

#### 2.1 - Moving Around

+ Complete Ramping Up level
+ Complete Moving Work Around level

#### 2.2 - Git Tricks

+ Complete A Mixed Bag level

#### 2.3 - Advanced

+ Complete Advanced Topics level

###Milestone 3: Remote Branches & Workflows

  For this Milestone, you will be working on the Remote Session in the [Learning Git Branching Tutorial](http://pcottle.github.io/learnGitBranching/)

#### 3.0 - Git Remotes

+ Complete the Push & Pull level

#### 3.1 - Advanced Git Remotes

+ Complete the To Origin And Beyond level

#### 3.2 - Workflows [TBD] 



## Resources

+ [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
+ [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)
