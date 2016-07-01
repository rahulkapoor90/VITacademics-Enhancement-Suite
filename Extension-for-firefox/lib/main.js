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
  include: ["https://vtop.vit.ac.in/student/stud_login.asp","https://vtop.vit.ac.in/student/","https://vtop.vit.ac.in/student/fac_profile.asp"],
  contentScriptFile: self.data.url("jquery.js")
});
pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/errormsg_2.asp"],
  contentScriptFile: self.data.url("error_msg.js"),
   attachTo: ["existing","top","frame"]
});

pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/attn_report.asp(.)*/,
  contentScriptFile: self.data.url("attendance.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/attn_report_details.asp"],
  contentScriptFile: self.data.url("attn_report.js"),
  attachTo: ["existing","top","frame"]
});

pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/attn_report.asp(.)*/,
  contentScriptFile: self.data.url("attendance.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/fac_profile.asp(.)*/,
  contentScriptFile: self.data.url("fsearch.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/fac_profile.asp(.)*/,
  contentScriptFile: self.data.url("fac_profile.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/timetable_(.)*.asp(.)*/,
  contentScriptFile: self.data.url("tableExport.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/timetable_(.)*.asp(.)*/,
  contentScriptFile: self.data.url("jquery.base64.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/timetable_(.)*.asp(.)*/,
  contentScriptFile: self.data.url("html2canvas.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/timetable_(.)*.asp(.)*/,
  contentScriptFile: self.data.url("base64.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/timetable_(.)*.asp(.)*/,
  contentScriptFile: self.data.url("sprintf.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/timetable_(.)*.asp(.)*/,
  contentScriptFile: self.data.url("jspdf.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/timetable_(.)*.asp(.)*/,
  contentScriptFile: self.data.url("timetable.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/coursepage_view3.asp"],
  contentScriptFile: self.data.url("course_view.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/student/coursepage_view3.asp"],
  contentScriptFile: self.data.url("content.js"),
  attachTo: ["existing","top","frame"]
});
pageMod.PageMod({
  include: /http(s)+:\/\/(vtop.vit.ac.in)\/(.)*\/coursepage_view.asp(.)*/,
  contentScriptFile: self.data.url("course_page.js"),
  attachTo: ["existing","top","frame"]
});