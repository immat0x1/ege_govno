function getDeathDate() {    
  year = getRandomInt(2023, 2025).toString();
  month = getRandomInt(6, 8).toString();
  day = getRandomInt(1, 31).toString();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  return "ты сдохнешь " + day + "." + month + "." + year + ",<br>" + getDeathReason() + ".";
}

function getDeathReason() {
  switch(getRandomInt(1, 8)) {
    case 1:
      return "подавившись слезами радости после результатов егэ";
    case 2:
      return "узнав, что одноклы, два года пинавшие хуй сдали лучше, чем ты";
    case 3:
      return "не получив золотую медаль из-за одного балла"
    case 4:
      return "выпрыгнув с " + getRandomInt(5, 20) + " этажа из-за 6 баллов по математике";
    case 5:
      return "просто так, хули нет";
    case 6:
      return "потому что никуда не поступил со своими 180 баллами";
    case 7:
      return "хз короче по какой причине еще можно сдохнуть";
    case 8:
      return "поступив в колледж после 11";
    case 9:
      return "получив 0 баллов из-за сдвига ответов в бланке";
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
