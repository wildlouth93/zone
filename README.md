# The Zone 
[Live Link](https://wildlouth93.github.io/zone/)

Welcome to the Zone. This application is an original project that allows users to access real time statistics of their favorite NFL team or player. The Zone is a front-end javascript application that leverages a hidden ESPN API to populate the sight and provide statistical visuals to the user. 

This project was designed and built in under 1 week. 

![](https://user-images.githubusercontent.com/29221213/73215126-132e2300-4119-11ea-96bb-e61f05c59d1e.png)

## Features
* Team Index
* Player Index 
* Player Profile 
* Team Profile

### Index Page
* On the index page, users can navigate to a team page through the team index or to a player page through the player index. 
* The team index is a scrollable list of NFL logos that link to the team's profile page.

![](https://user-images.githubusercontent.com/29221213/73215167-23460280-4119-11ea-9f63-c5274c6a8bb0.png)

* The player index is a scrollable list of player headshots that link to the player's profile page.
* The player index is recreated throughout the site to provide navigation from team-to-player and player-to-player.

![](https://user-images.githubusercontent.com/29221213/73215182-280ab680-4119-11ea-85a7-b0f53570c09d.png)

### Player Profile
* Player Information Section. The player information section shows the player's basic personal information and provides a statistical snapshot of the player's performance. 

![](https://user-images.githubusercontent.com/29221213/73217530-ba14be00-411d-11ea-8c6b-4e632658fcf1.png)

* Player Visuals Section. This section allows the user to open statistical visuals based upon statistical categories and other statistical factors. 

![](https://user-images.githubusercontent.com/29221213/73217557-c4cf5300-411d-11ea-9137-fe7a4078e56a.png)

* Player Stats Section. This section provides a table with the information used to populate the statistical visuals. 

### Team Profile 
* Team Information Section. Much like the player information section, the team information section shows the team's basic information. 
* Team Visuals Section. This section shows a list of different statistical categories. After clicking on the statistical category, a visual pops up along with a list of team statistics. There is a section for the team's opponents that operates the same way.

![](https://user-images.githubusercontent.com/29221213/73219710-6062c280-4122-11ea-9ce9-61693e897105.png)

![](https://user-images.githubusercontent.com/29221213/73219733-6ce71b00-4122-11ea-8ce4-9b4db46f60e9.png)

* Team Roster Section. This section essentially shows a player index that is categorized based upon whether the player plays offense, defense, or special teams. 

## Highlights
1. **API.** All the information used to power the site comes from a hidden ESPN API. While ESPN does not actually publish an API, API endpoints exist that allows developers to have access to the site's information. Not every NFL team exists in the API, but the information provided is kept up to date. 

2. **No backend.** Because all of the information on the site comes from a third-party, I was able to build the site without saving any data on the backend. 

3. **Time Complexity.** In this project, many nested components exist. The player visuals is an example of this. Because the information populating the site is multiple layers deep on the data tree, this nesting allows the time complexity to be spread across components and to depend on the user's decision to open that section.
