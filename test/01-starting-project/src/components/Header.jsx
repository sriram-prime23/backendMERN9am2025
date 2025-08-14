import reactImg from '../assets/components.png';
const reactDescription = ['Fundamental', "core", "concepts", "crucial"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function Header() {
  const des = reactDescription[getRandomInt(reactDescription.length)];

  return (
    <header>
      <img src={reactImg} alt="" />
      <h1>React Essentials </h1>

      <p>
        {des} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}


export default Header;