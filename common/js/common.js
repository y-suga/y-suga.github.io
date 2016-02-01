function setSelectYear(id, year){
  var thisYear = new Date().getFullYear();
  var birthyear = "";
  if(year < 0){
    for(i = thisYear+year; i < thisYear; i++){
      birthyear = birthyear + "<option>" + i + "</option>¥n";
    }
    birthyear = birthyear + "<option selected>" + thisYear + "</option>¥n";
  } else {
    birthyear = birthyear + "<option selected>" + thisYear + "</option>¥n";
    for(i = thisYear + 1; i < thisYear + 1 + year; i++){
      birthyear = birthyear + "<option>" + i + "</option>¥n";
    }
  }
  document.getElementById(id).innerHTML = birthyear;
}
