function getProfileInfo(){return $.ajax({url:`/bhcustomapi/account/getprofile?id_token=${localStorage.getItem("bumrungrad.com.idtoken")}`,method:"Get"});}
function signOut(){return $.ajax({type:"POST",url:"/bhcustomapi/shoppingcart/clearcart",headers:{'Authorization':'bearer '+localStorage.getItem("bumrungrad.com.idtoken")},dataType:"json",});}
function isAuthenticated(){return $.ajax({url:`/bhcustomapi/kentico/isauthenticated?id_token=${localStorage.getItem("bumrungrad.com.idtoken")}`,method:"Get"});}
function setRedirectUrl(){let locationHref=window.location.href;if($('div.page-appointment div#BookAppointment #aTab0').hasClass('active')){if(locationHref.indexOf('?')<0){locationHref=`${locationHref}?isrealtime=true`}else{locationHref=`${locationHref}&isrealtime=true`}}else{if($('div.page-appointment div#BookAppointment #aTab0').length>0){locationHref=`${locationHref}`.replace('?isrealtime=true','');locationHref=`${locationHref}`.replace('&isrealtime=true','');}}
localStorage.setItem("bumrungrad.com.redirect.url",locationHref);}
function removeRedirectUrl(){localStorage.setItem("bumrungrad.com.redirect.url",'');}
function getRedirectUrl(){var url=localStorage.getItem("bumrungrad.com.redirect.url");return url==null||url==''?'':url;}
function checkProfileError(error){if(error.status==401){signOut().fail(error401);authModal();clearLocalStorageLogin();}
var checkExist=setInterval(function(){if($('#live-chat-widget').length){clearInterval(checkExist);messageBirdElementLogout();}},100);}
function error401(error){if(error.status==401){clearTotalUnits();clearLocalStorageLogin();}
var checkExist=setInterval(function(){if($('#live-chat-widget').length){clearInterval(checkExist);messageBirdElementLogout();}},100);}
function clearLocalStorageLogin(){localStorage.setItem("bumrungrad.com.idtoken",null);localStorage.setItem("RefreshToken",null);sessionStorage.removeItem('bumrungrad.com.checkout.data');removeRedirectUrl();var checkExist=setInterval(function(){if($('#live-chat-widget').length){clearInterval(checkExist);messageBirdElementLogout();}},100);}
async function messageBirdElementLogout(){if(typeof window.MessageBirdChatWidget!=='undefined'){window.MessageBirdChatWidget.logout();window.MessageBirdChatWidget.shutdown();}}
function addRule(sheet,selector,styles){if(sheet.insertRule)return sheet.insertRule(selector+" {"+styles+"}",sheet.cssRules.length);if(sheet.addRule)return sheet.addRule(selector,styles);};function clearTotalUnits(){addRule(document.styleSheets[0],"li.nav-item.cart-container:before","display: none");addRule(document.styleSheets[0],"li.nav-item.cart:before","display: none");}
function authModal(){$('#pnlShowSignin').hide();$('#authModal').modal({backdrop:'static',keyboard:false});$("body").addClass("modal-open");}
function renderProfile(data){$(".nav-link.dropdown-toggle.signin").empty();if(data.Data.Picture!=null&&data.Data.Picture!="")
$(".nav-link.dropdown-toggle.signin").append(`<img src='data:image/jpg;base64, ${data.Data.Picture}' class='profile picture nav' />`)
else
$(".nav-link.dropdown-toggle.signin").append(`<img src='/images/Avatar.svg' class='profile picture nav' />`)
$(".nav-link.dropdown-toggle.signin").find("i").css("display","none");$(".aSignIn").css("display","none");$("#aSignUp").css("display","none");$("#aProfile").css("display","block");$(".aSignOut").css("display","block");$("#aSignUpMobile").css("display","none");$("#aProfileMobile").css("display","block");}
function getAccountInfo(){var url=window.location.href;var str=url.split("#");$(".aSignIn").css("display","block");$(".aSignOut").css("display","none");if(str.length==1){if(localStorage.getItem("bumrungrad.com.idtoken")!=null&&localStorage.getItem("bumrungrad.com.idtoken")!='null'){isAuthenticated().done(function(isAuthenticated){getProfileInfo().done(renderProfile).fail(checkProfileError);}).fail(checkProfileError);}
$("[id$='aSignOut']").click(function(e){signOut().done(function(result){clearLocalStorageLogin();if($("[id$='aSignOut']").val()=='Profile')
window.location="/";else{window.location=window.location.href;}});})
$("#aSignOutMobile").click(function(e){signOut().done(function(result){clearLocalStorageLogin();if($("[id$='aSignOut']").val()=='Profile')
window.location="/";else{window.location=window.location.href;}});})}5}
$(function(){$("[id$='aSignOut']").val("Header");$("#aSignOutMobile").val("Header");$("#rejectLogin").prop("href",window.location.href);$("#rejectLoginModal").prop("href",window.location.href);getAccountInfo();});