# <img src="https://raw.githubusercontent.com/rahulkapoor90/VITacademics-Enhancement-Suite/master/Media/logo.gif" width="500">

[![ghit.me](https://ghit.me/badge.svg?repo=rahulkapoor90/VITacademics-Enhancement-Suite)](https://ghit.me/repo/rahulkapoor90/VITacademics-Enhancement-Suite)
[![Code Climate](https://codeclimate.com/github/rahulkapoor90/VITacademics-Enhancement-Suite/badges/gpa.svg)](https://codeclimate.com/github/rahulkapoor90/VITacademics-Enhancement-Suite)

> *This Repository is highly inspired from [Reddit Enhancement Suite.](https://github.com/honestbleeps/Reddit-Enhancement-Suite "RES")*
> *Special thanks to [Harshal Varday](https://github.com/hvarday).*

> Chrome and Firefox extension that helps you to enhance your browsing experience at [VIT Student Login] (https://vtop.vit.ac.in/student/stud_login.asp)

For general documentation, visit the [VITacademics Enhancement Suite Wiki](https://github.com/rahulkapoor90/VITacademics-Enhancement-Suite/wiki).

## Contributions

Contributions are welcome. if you see any issue then open an issue and if you think you can fix it then start working on it by forking this project.

## Project structure

  - `Extension for Chrome/`: Chrome-specific  VES files
  - `Extension for firefox/`: firefox-specific VES files
  - `Media/`: Image source
  - `CHANGELOG.md`: self-explanatory 
  - `README.md`: YOU ARE HERE, unless you're browsing on GitHub.

##### Building in Chrome

  1. Go to `Menu->Tools->Extensions` and tick the `Developer Mode` checkbox
  2. Choose `Load unpacked extension` and point it to the `dist/chrome` folder. Make sure you only have one VITacademics ES version running at a time.
  3. Any time you make changes to the script, you must go back to the `Menu->Tools->Extensions` page and `Reload` the extension.

##### Building in Firefox

  1. Install [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm) using `npm`: `npm install -g jpm`
  2. Navigate to `dist/firefox` and run the command `jpm run`, which should launch a new Firefox browser using a temporary profile with only VITacademics ES installed.
