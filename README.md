# CSbyUs site

This project is based on React Front End and Ruby on Rails Backend. Check out the tech spec [here](https://docs.google.com/document/d/1OBht5ythEHgHP5wKkjB2SehQMyU9Y4HAZ2q8AV27oD4/edit?usp=sharing).

## Getting Started with the Environment
### Install Ruby and Rails 
You need to first install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Rails](https://gorails.com/setup/) on your machine.

To verify the installation, use these commands:
```
ruby -v
rails -v
```
Let's make sure we have `ruby` and `rails` (>= 5.0) installed on our machine.
If you need to install or update rails, type this into your console:
```
gem install rails
```

### Clone 

Now we can get started to clone the repository.

For starters, go ahead and clone this repository into a new directory called `csbyus/practice/`:
```
cd ~/csbyus/practice/
git clone https://github.com/CSbyUs/csbyus-on-rails.git
```

Now, point your current directory to this new directory:

```
cd csbyus-on-rails
```

Okay, we're in! This repo currently has a rough outline for our application. Most of the interesting information lives in the `app` directory. 

### Install Dependencies 

Now, let's install this repository's dependencies:
```
bundle install
```
If you at any point get a `yarn` warning, go ahead and follow the output's directions. Usually, you just need to update:
```
yarn install
```
Moving on, we will install React dependencies for the front end development:
```
rails webpacker:install
rails webpacker:install:react
rails generate react:install
```

### Run on Local Server
Before running on local server, we need to change several lines in Gemfile that are written specifically for our remote environment:  
1. Delete/Comment line 3
```
# ruby "2.4.1"
```
2. Then comment line 14 and uncomment line 16
```
# Use pg for remote development
# gem 'pg'
# Use sqlite3 for local development
  gem 'sqlite3', '~> 1.3.13'
```

Now we can go ahead and start the server to see the site skeleton!
```
rails s
```
and navigate to `localhost:3000` on your browser. 

You just made a `GET` request that is registered as a route in our rails `/config/routes.rb` file. Since we called root, we asked the `pages` controller to execute its `index` method, which returns the `index view`. That file is located in `app/views/pages/index.html.erb`. Rails is smart and knows how to find this based on commonly used naming conventions. As you can see, this view simply contains an html-like element, which is our react component of interest:
```
<%= javascript_pack_tag 'index' %>
```
This line finds the react component located at `app/javascript/components/packs/index.js` and renders the page. 
You can kill the server now (`Ctrl-C`).

## React 101
[Here](https://reactjs.org/tutorial/tutorial.html) is the React official tutorial. The following information gives a quick overview of how to get started.

### Generate a React Component
Since we installed nice Rails-React tools at the beginning, we can use simple commands to start building React components. Try it out!

Build a component called `AboutMe`:
```
rails g react:component AboutMe name:string funFact:string
```
You just created a new React component in `app/javascript/components/` with two variables `name` and `funFact` with both type `string`. Go there and check it out. 
Play around with it and make it look pretty. 

Now, change `app/views/pages/index.html.erb` so it renders this component.
Tip: here's how you pass props into a react component in a rails view. 
```
<%= react_component("HelloWorld", { greeting: "Hello from react-rails." }) %>
```

### Install Material-UI with yarn
This project uses many material-UI components. Usually you don't need to worry about the installation, but in case of any package missing, follow instructions below:  
`material-ui` website gives instructions on how to install with `npm`. However, our project is using `yarn` as the package manager. Here is how you should install `material-ui` with `yarn`:

```
$ cd /path_to_project_folder
$ yarn add @material-ui/core
```

If you need to use material-ui icon, also add
```
$ yarn add @material-ui/icons
```

At last, run
```
$ yarn install
```
## Simple Git
If you are familiar with git, you only need to know the most important lines of this section:   
__*Never* `commit` and `push` to `master`.  
*Always* `commit` and `push` to a separate branch, and then `merge` with master.__ 
Have fun coding :)

### Up and Running with Git
1. Clone this repo into an appropriate directory.
```
$> mkdir ~/csbyus
$> cd csbyus
$> git clone https://github.com/CSbyUs/csbyus-on-rails.git
$> cd csbyus-on-rails
```

2. Make basic git configurations. 
```
$> git config --local user.name "YOUR_FIRSTNAME YOUR_LASTNAME"
$> git config --local user.email "your-email@whatever.yo"
$> git config --local push.default simple
```
Or you can generate your own SSH key.

3. Add our remote (Usually it should have already existed if you cloned the repo). 
```
$> git clone https://github.com/CSbyUs/csbyus-on-rails.git
```

To integrate code from our repo (relevant when changes have been pushed by someone), use this command:
```
$> git pull
```

All sub-team development work will happen on a different branch. Read more about branching [here](https://git-scm.com/docs/git-init).

__*Never* `commit` and `push` to `master`.  
*Always* `commit` and `push` to a separate branch, and then `merge` with master.__ 

To create a new branch off `master` or to switch back to a branch that already exists, use this command:
```
$> git checkout -b <your-branch-name>    // Create and switch to a new branch
$> git checkout <your-branch-name>       // Switch to another branch
```

To `commit` and `push` to a branch called `development`, do the following (step one verified you're on this branch):
```
$> git branch -b development    // Create development branch
>>> make changes to files 
$> git add .
$> git commit -m "this should be a detailed commit message the describes changes made"
$> git push
$> git branch master           // Switch back to master
```

To check the status of unstaged/staged (what happens in the `add .` step) files, as well as commited files, use 
```
$> git status
```

*Do not, under any circumstances, perform a hard reset or a force push on your repo*

## Other Info
### sqlite3 error
Check issue #27 for sqlite3 error
