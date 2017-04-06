# <img src="https://raw.githubusercontent.com/rahulkapoor90/VITacademics-Enhancement-Suite/master/Media/logo.gif" width="500">

[![Code Climate](https://codeclimate.com/github/rahulkapoor90/VITacademics-Enhancement-Suite/badges/gpa.svg)](https://codeclimate.com/github/rahulkapoor90/VITacademics-Enhancement-Suite) [![ghit.me](https://ghit.me/badge.svg?repo=rahulkapoor90/VITacademics-Enhancement-Suite)](https://ghit.me/repo/rahulkapoor90/VITacademics-Enhancement-Suite)
[![College Code](https://img.shields.io/badge/CollegeCode-Repo-red.svg)](https://github.com/CollegeCODE/VITacademics-Enhancement-Suite)


> *This Repository is highly inspired from [Reddit Enhancement Suite.](https://github.com/honestbleeps/Reddit-Enhancement-Suite "RES")*
> *Special thanks to [Harshal Varday](https://github.com/hvarday).*

> Chrome and Firefox extension that helps you to enhance your browsing experience at [VIT Student Login] (https://vtop.vit.ac.in/student/stud_login.asp)

For general documentation, visit the [VITacademics Enhancement Suite Wiki](https://github.com/rahulkapoor90/VITacademics-Enhancement-Suite/wiki).

<img src="https://i.imgur.com/OHswLAn.png">
## Contributor guidelines

Contributions are welcome. if you see any issue then open an issue and if you think you can fix it then start working on it by forking this project. We just ask that you follow a few simple guidelines:

1. It would be greatly appreciated if you could stick to a few style guidelines:

  - please use tabs for indentation
  - please use spaces in your `if` statements, e.g. `if (foo === bar)`, not `if(foo===bar)`
  - please use single quotes `'` and not double quotes `"` for strings
  - please comment your code!
  
2. If you are introducing a big change, please make sure that everything else is working correctly.

## Download

VES is available for Chrome & Firefox users though the firefox is still in BETA phase. you can download the extension using the following links:

* Google Chrome Download -> [VES](https://chrome.google.com/webstore/detail/vitacademics-enhancement/fdeagddeencldcpojhlngflmhipgkhbb)
* Mozilla Firefox Download -> [VES](https://addons.mozilla.org/en-US/firefox/addon/vitacademics-enhancement/)

## Project structure

  - `Extension for Chrome/`: Chrome-specific  VES files
  - `Extension for Firefox/`: firefox-specific VES files
  - `Extension for Edge/`: edge-specific VES files
  - `Media/`: Image source
  - `CHANGELOG.md`: self-explanatory 
  - `README.md`: YOU ARE HERE, unless you're browsing on GitHub.
  
## Building development versions of the extension

##### Building in Chrome

  1. Go to `Menu->Tools->Extensions` and tick the `Developer Mode` checkbox
  2. Choose `Load unpacked extension` and point it to the `dist/chrome` folder. Make sure you only have one VITacademics ES version running at a time.
  3. Any time you make changes to the script, you must go back to the `Menu->Tools->Extensions` page and `Reload` the extension.

##### Building in Firefox

As Extension for Mozilla Firefox is based on chrome, you should follow this tutorial to [Load temporary add-ons](https://blog.mozilla.org/addons/2015/12/23/loading-temporary-add-ons/) in Firefox
  
##### Building in Microsoft Edge

  1. Go to `about:flags` and tick the `Enable extension developer features` checkbox.
  2. Choose `Load extension` on the extensions menu and select your extensions folder.
  3. Any time you make changes to the extension, you must go back to the `Menu->Extensions` page, go to the extensions settings and `Reload` the extension.
