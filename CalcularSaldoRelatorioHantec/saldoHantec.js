let hk = us = xauusd = 0;

  for (let i = 0; i <= document.getElementsByTagName('tr').length; i++) {
    if (document.getElementsByTagName('tr')[i] && (document.getElementsByTagName('tr')[i].childElementCount === 14)) {
      if (document.getElementsByTagName('tr')[i].children[4].innerText === 'hk50') {
        console.log(1);
        if (Number(document.getElementsByTagName('tr')[i].lastChild.innerText))
          hk += Number(document.getElementsByTagName('tr')[i].lastChild.innerText)
      } if (document.getElementsByTagName('tr')[i].children[4].innerText === 'us30') {
        console.log(2);
        if (Number(document.getElementsByTagName('tr')[i].lastChild.innerText))
          us += Number(document.getElementsByTagName('tr')[i].lastChild.innerText)
      } if (document.getElementsByTagName('tr')[i].children[4].innerText === 'xauusd') {
        console.log(3);
        if (Number(document.getElementsByTagName('tr')[i].lastChild.innerText))
          xauusd += Number(document.getElementsByTagName('tr')[i].lastChild.innerText)
      }
    }
  }
  console.log(`hk50 = ${hk} \nus30 = ${us} \nxauusd = ${xauusd} \nsaldo = ${hk + us + xauusd}`);