// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/parent/parent_login.asp","https://vtop.vit.ac.in/student/stud_login.asp","https://vtop.vit.ac.in/parent/","https://vtop.vit.ac.in/student/","https://27.251.102.132/parent/parent_login.asp","https://27.251.102.132/student/stud_login.asp","https://27.251.102.132/parent/","https://27.251.102.132/student/"],
  contentScriptFile: self.data.url("captcha.js")
});

pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/stud_login.asp","https://vtop.vit.ac.in/student/"],
  contentScriptFile: self.data.url("mainstyle.js")
});

pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/stud_login.asp","https://vtop.vit.ac.in/student/"],
  contentScriptFile: self.data.url("jquery.js")
});

pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/errormsg_2.asp"],
  contentScriptFile: self.data.url("error_msg.js"),
   attachTo: ["existing","top","frame"]
});

pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)|(27.251.102.132)\/(.)*\/attn_report.asp(.)*/,
  contentScriptFile: self.data.url("attendance.js"),
  attachTo: ["existing","top","frame"]
});

pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/attn_report.asp?sem=SS&fmdt=27-May-2016&todt=13-Jun-2016"],
  contentScriptFile: self.data.url("checkattend.js"),
  attachTo: ["existing","top","frame"]
});