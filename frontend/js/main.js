window.onload = () => {
  fetch('../components/header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

  fetch('../components/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);
  console.log("Main JS loaded for global components.");
};
