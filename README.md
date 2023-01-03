# WEB102 Prework - *Sea Monster Crowdfunding Games Display*

Submitted by: **Helena Zhang**

**Sea Monster Crowdfunding Games Display** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **4.5** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] A search bar and search button under the Our Games secton allows the user to enter in keywords and search for games by name after pressing the search button (not case sensitive)
* [x] Text in the header ('View Our Games') will navigate user to the Our Games section upon pressing the text
* [x] Changes to the style.css file sets hover property for buttons and adds blur shadow-box to the game cards and header
* [x] Show All Games in Order of Funding button is created to show order of games in terms of descending funding (original three buttons show unfunded, funded, and all games in original order of GAMES_JSON array)

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

The biggest challenge I faced was when pushing my final changes to git. My first two pushes went well but I encountered an issue when pushing the walkthrough gif file. The first walkthrough gif file I made to show the features I implemented exceeded github's max file size. Because of this, the push failed. I deleted the file locally but it was still there in my history so every time I tried to push new commits, it would fail due to this initial gif file. I had to undo commits to before that first file using git reset, unstage that file, and then re-commit everything. This fixed the issue and I was able to push a smaller walkthrough gif file to the repo and add it to the README.

Most of the javascript, css, and html changes were a good review and I did not face too many difficulties here. The main part that I got stuck on for a bit was with the GAMES_JSON array sorted by funding. The list of games would intially load in the original GAMES_JSON games order but then become sorted for all further actions. I had forgotton that this was due to .sort mutating the original array so I faced a bit of difficulty here figuring out why this was happening. Once I realized, I decided to implement an extra button, 'Show All Games in Funding Order' so that the 'Show All Games' button would preserve the original order of the games while the new button would show the sorted order (I used [...GAMES_JSON].sort so that a copy of the original array was created that was then sorted and the original GAMES_JSON array remained the same).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
