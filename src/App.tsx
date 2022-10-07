import React, { useState } from 'react';
import Button from './components/Button';
import Contato from './components/Contato';
import Header from './components/Header';
import Section from './components/Section';
import Vantagens from './components/Vantagens';

function App() {
    const [currentTheme, setCurrentTheme] = useState('light')
    const ChangeTheme = () => {
      currentTheme === 'light'? setCurrentTheme('dark'):setCurrentTheme('light')
    }

    return (
      <>
        
        <Header tema={currentTheme} text="Minha primeira página em React!">
          {<Button tema={currentTheme} onClick={ChangeTheme}>Dark/Light Mode</Button>}
        </Header>
        <Vantagens tema={currentTheme}></Vantagens>
        <Section tema={currentTheme} photoUrl='https://iso.500px.com/wp-content/uploads/2016/05/stock-photo-150981579-1500x1000.jpg' title='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magni aspernatur debitis facere porro dicta similique illum, quia doloremque nostrum neque, architecto ad nesciunt reiciendis enim delectus eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magni aspernatur debitis facere porro dicta similique illum, quia doloremque nostrum neque, architecto ad nesciunt reiciendis enim delectus eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas molestiae aliquam aperiam officia quidem, fuga facere sint enim ipsam corporis. Asperiores vitae dolorem perspiciatis perferendis reprehenderit, deleniti voluptatem blanditiis quidem.' photoSide='right'></Section>
        <Section tema={currentTheme} photoSide='left' photoUrl='https://cdn.theatlantic.com/media/img/photo/2022/03/winners-2021-world-nature-photograp/a01_bwGBurton-1/original.jpg' title='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magni aspernatur debitis facere porro dicta similique illum, quia doloremque nostrum neque, architecto ad nesciunt reiciendis enim delectus eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magni aspernatur debitis facere porro dicta similique illum, quia doloremque nostrum neque, architecto ad nesciunt reiciendis enim delectus eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas molestiae aliquam aperiam officia quidem, fuga facere sint enim ipsam corporis. Asperiores vitae dolorem perspiciatis perferendis reprehenderit, deleniti voluptatem blanditiis quidem.' ></Section>
        <Section tema={currentTheme} photoUrl='https://eadn-wc04-796033.nxedge.io/cdn/wp-content/uploads/2019-5-Nature-ph9-WB.jpg' title='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magni aspernatur debitis facere porro dicta similique illum, quia doloremque nostrum neque, architecto ad nesciunt reiciendis enim delectus eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magni aspernatur debitis facere porro dicta similique illum, quia doloremque nostrum neque, architecto ad nesciunt reiciendis enim delectus eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas molestiae aliquam aperiam officia quidem, fuga facere sint enim ipsam corporis. Asperiores vitae dolorem perspiciatis perferendis reprehenderit, deleniti voluptatem blanditiis quidem.' photoSide='right'></Section>
        <Contato tema={currentTheme} img='https://previews.123rf.com/images/toltemara/toltemara1809/toltemara180900029/110261399-floral-seamless-pattern-vintage-background-with-different-doodle-plants-and-flowers-cute-textile-or-.jpg' texto='Contato'></Contato>
      </>
    );
  }

export default App;
