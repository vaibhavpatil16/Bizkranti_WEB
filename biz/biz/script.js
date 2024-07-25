const btn = document.getElementById('btn');

function classAdd(){
 const nav = document.getElementById('navv');
  nav.classList.toggle('active');
}
 btn.addEventListener('click', classAdd);

 //welcome page

document.addEventListener('DOMContentLoaded', () => {
  const welcomePage = document.getElementById('welcome-page');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
      welcomePage.style.transform = 'translateY(-100%)';
      setTimeout(() => {
          welcomePage.style.display = 'none';
          mainContent.classList.remove('hidden');
          mainContent.style.display = 'block';
      }, 1000);
  }, 1000); // 3 seconds delay for the welcome screen
});
 

//left right name
document.addEventListener('DOMContentLoaded', () => {
  const digital = document.getElementById('digital');
  const kranti = document.getElementById('kranti');
  const withElement = document.getElementById('with');
  const biz = document.getElementById('biz');
  const fullName = document.getElementById('fullName');

  const moveLeftToCenter = (element) => {
      return new Promise(resolve => {
          element.style.transform = 'translateX(50vw) translateY(-50%)';
          element.style.opacity = '1';
          setTimeout(() => resolve(), 2000);
      });
  };

  const moveRightToCenter = (element) => {
      return new Promise(resolve => {
          element.style.transform = 'translateX(-50vw) translateY(-50%)';
          element.style.opacity = '1';
          setTimeout(() => resolve(), 2000);
      });
  };

  const hideElements = (elements) => {
      elements.forEach(element => {
          element.style.opacity = '0';
      });
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
  };

  const showFinalName = () => {
      fullName.style.opacity = '1';
  };

  // Animation Sequence
  Promise.all([
      moveLeftToCenter(digital),
      moveRightToCenter(kranti)
  ]).then(() => {
      return hideElements([digital, kranti]);
  }).then(() => {
      return Promise.all([
          moveLeftToCenter(biz),
          moveRightToCenter(withElement)
      ]);
  }).then(() => {
      return hideElements([biz, withElement]);
  }).then(() => {
      showFinalName();
  });
});
 
 