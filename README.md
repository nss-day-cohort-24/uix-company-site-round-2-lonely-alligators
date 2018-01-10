# Group Project UIX: Company Site

As a team, build the web site for a fictitious product company. The team gets to decide the name of the company and what types of products it manufactures/sells. Be creative and have fun.

## Setup

Every teammate will copy and run the following commands in the host machine terminal.

```bash
mkdir -p ~/workspace/group-projects && cd $_
```

## Requirements

### Theme

Pick a theme that the team likes. A good place for inspiration is the [Wordpress themes](https://wordpress.org/themes/) site. Do not purchase, or copy the theme code, just browse them for inspiration. Everyone should agree on a theme and ensure that each page is consistent with the colors, fonts, and/or images chosen.

### Pages
Each team member is going to be responsible for the **content** of a different page, so decide on the name and content for each of those pages. Some possible options are...

1. Home page
1. Products
1. Employee listing/contact
1. Company history
1. Company culture/mission
1. Job listings
1. Company awards
1. Office locations

Regardless of the pages each team member works on, each team must have a **Products** page for their site that the team will collaborate on. See more details about the product page below.

### Git
Your team is going to learn how to use git to enable good teamwork when building a software product.
1. Team leads will accept the assignment and create a team (with team name). Members will then join the team.
1. Now that everyone has joined the same team, everyone clone the Github Classroom project into your current directory - which should be `group-projects` if you ran the setup commands.
1. `cd` into the directory that was created.
1. Before anyone on the team writes a single line of code, the team will decide on a branch naming strategy. Branches should be descriptive of the work that is going to be done on that branch. Some teams also decide to add the developer's information to the branch name, such as initials. For example, a developer named Jasmine Sheboygen is going to work on the job listings page for the web site. A good name for the branch would be `js-job-listing-page`.
1. Before you write any code, one team member will create the ignore file on a branch. Be sure to add `.DS_Store`
    1. `touch .gitignore`
    1. `git add .`
    1. `git commit -m "Initial commit with .gitignore file"`
    1. `git push origin YOUR BRANCH NAME`
1. Now make a PR and have your team approve and merge into master.
1. Now everyone should `git pull origin master`.
1. That's the last commit you make on the master branch. At this point, each teammate will create a branch.

Everyone will work on their page on individual branches. Only when teammates feel their work is complete, the teammate will push up their branch to Github and create a pull request. One of the other teammates must review the pull request and give a thumbs up (Just type :+1 in the comment box).

Once the PR gets a thumbs up, the teammates can merge the branch. Follow the one way street flow. 

Once the master is updated on Github, you may need to update your local branch.  Again, follow the one way street.
1. Pull master into local master
1. Checkout your branch
1. Within your branch, merge master

### Products page

The team's product page will be driven from JavaScript code. Decide on at least, 8 products that your business manufactures. The product page must have a linked JavaScript file.

1. Create a data structure to hold your products. This could be an array of objects or an object of objects. Discuss with your teammates.
1. Each product item needs to contain the following information: name, description, price, and URL for product image. You can add more properties if that's what the team wants, but it must have those.
1. The team will use JavaScript to add each product to the DOM.
1. Each product must be a card. As a team, decide on the style of the card.
1. The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.

### HTML and CSS
1. Use emantic HTML.
1. Each page should have one meaningful and important headline (h1).
1. All styles included within css file.


## Plan and Design First
1. Define problem statement           
1. Define primary user persona 
1. User Interviews (50% interview, 50% team/SMEs)
1. Use your whiteboard and communication skills to wireframe each page before you build it.
    * What information will be on the page?
    * How should the information be presented?
    * What is the layout? Just a list, or a grid? Sketch the views (whiteboard, pencil/pen)

## Bonus

1. Create modular javascript; split your JavaScript into two files.
    * Create a Factory
        * The factory deals with data (data definition or creation).
    * Use a Controller
        * The job of the controller is to query and manipulate the DOM.
1. Create data with object constructor.
1. Include a competitor evaluation
1. Add a form for ordering.



