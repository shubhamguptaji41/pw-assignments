const bar = document.querySelector('.bar');
const section = document.querySelector('.progressBar-section');

document.addEventListener('scroll', () => {
  //   console.log(document.documentElement.scrollTop);    //gives the scroll number where the user is
  //   console.log(document.documentElement.scrollHeight); //gives the total height of the document
  //   console.log(document.documentElement.clientHeight); //gives the height of client window

  const scrollPercentage =
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;

  bar.style.width = scrollPercentage + '%';
});