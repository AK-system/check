function insert(photo,box_name){
 var area = document.getElementById(box_name);
 var bun = document.getElementById(box_name).value;
 var nagasa = bun.length;
 var basho = area.selectionStart;
 var mae = bun.substr(0, basho);
 var ushiro = bun.substr(basho, nagasa);
 var nakami = document.getElementById(photo).value;
 var link = '<a href="../img/news/'+nakami+'" data-lightbox="group" data-title="">';
 var sumna = '<img src="../img/news/'+nakami+'" class="copy_pho" title="" /></a>';
 document.getElementById(box_name).value = mae + link + sumna + ushiro;
 document.getElementById(photo).value = '';
}

function insert2(photo){
 var area = document.getElementById('bodycopy_box');
 var bun = document.getElementById('bodycopy_box').value;
 var nagasa = bun.length;
 var basho = area.selectionStart;
 var mae = bun.substr(0, basho);
 var ushiro = bun.substr(basho, nagasa);
 var nakami = document.getElementById(photo).value;
 var link = '<a href="../img/help/'+nakami+'" data-lightbox="group" data-title="">';
 var sumna = '<img src="../img/help/'+nakami+'" class="copy_pho" title="" /></a>';
 document.getElementById('bodycopy_box').value = mae + link + sumna + ushiro;
 document.getElementById(photo).value = '';
}

function formCheck(FormName){
 FormSubmit(FormName);
}

function totalCheck(FormName){
  if(!checkNull(document.getElementById('u_name'),'お名前')) return false;
  if(!checkNull(document.getElementById('u_mail'),'メールアドレス')) return false;  
  if(!checkEMail(document.getElementById('u_mail'),'メールアドレス')) return false;
  if(!checkNull(document.getElementById('u_inquery'),'お問い合わせ内容')) return false;  
  FormSubmit(FormName);
 }

function NullRedio(obj){
 chk = obj.checked;
 return chk;
} 
function checkNull(obj,msg){
  if(obj.value==''){
   alert(msg+'が未記入です');
   obj.focus();
   return false;
  }
  return true;
}
 
function checkFalse(msg){
 alert(msg+'が未選択です');
 return false;
}

function checkAgree(){
  if(document.query_form.agree.checked){
    return true;
  }else{
    alert('内容に同意が選択されていません');
    obj.focus();
    return false;
  }
}

function checkMail2(mail1,mail2){
  var retval=true;
  var hikaku1=mail1.value
  var hikaku2=mail2.value
  if (hikaku1 != hikaku2){
   alert('E-Mail確認用が\n一致しません');
   mail2.focus();
   retval=false;
   } 
  return retval;
}

// メールアドレスチェック
function checkEMail(obj,retnull){
  var retval=true;
  var value =obj.value;
  if (value=='') retval=retnull;
  else {
    var del=value.indexOf('@');
    var del2=value.indexOf('.');
    retval = (del>0 && del2>0 && (value.length-del)>1
           && value.substring(del+1).indexOf('@')==-1);
  }
  if(retval==false)
    alertMsg('E-Mailアドレス',obj);
  return retval;
}

// フォーマットエラーメッセージの表示部分
function alertMsg(msg,obj){
    alert(msg+'の形式が間違っています');
    obj.focus();
}

function pageAlert(StringTmp) {
 alert(StringTmp);
}

function FormSubmit(FormName) {
 document.forms[FormName].submit();
}
function FormSubmit_n() {
 for (var i=0; i<document.forms.length; ++i) {
  clearForm(document.forms[i]);
  }
}
function clearForm(form) {
 for(var i=0; i<form.elements.length; ++i) {
  clearElement(form.elements[i]);
 }
}
function clearElement(element) {
 switch(element.type) {
  case "hidden":
  case "submit":
  case "reset":
  case "button":
  case "image":
  return;
  case "file":
  return;
  case "text":
  case "password":
  case "textarea":
  element.value = "";
  return;
  case "checkbox":
  case "radio":
  element.checked = false;
  return;
  case "select-one":
  case "select-multiple":
  element.selectedIndex = 0;
  return;
  default:
 }
}

//指定先へ飛ぶ（クリア代わりに使える）
function location_(basyo){
 location.href="basyo";
}

function window_make(url){
window.open(url, "edit_sub_win", "width=800,height=800,scrollbars=yes,resizable=yes,status=yes")
}
