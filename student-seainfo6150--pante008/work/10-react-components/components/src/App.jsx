import { useState } from 'react';
import Header from '/src/Header';
import Footer from '/src/Footer';
import TextPage from '/src/TextPage';
import CardPage from '/src/CardPage';
import PanelPage from '/src/PanelPage';
import Modal from '/src/Modal';
import Button from '/src/Button';
//import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('text');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonMessages, setButtonMessages] = useState({
    link: '',
    regular: '',
    modal: '',
    submit: ''
  });

  const renderPage = () => {
    switch(currentPage) {
      case 'text':
        console.log('Rendering TextPage');
        return <TextPage />;
      case 'card':
        console.log('Rendering CardPage');
        return <CardPage setCurrentPage={setCurrentPage} />;
      case 'panel':
        console.log('Rendering PanelPage');
        return <PanelPage />;
      default:
        console.log('Rendering default TextPage');
        return <TextPage />;
    }
  };

  const handleButtonClick = (buttonType) => {
    console.log(`Button clicked: ${buttonType}`);
    setButtonMessages(prevMessages => ({
      ...prevMessages,
      [buttonType]: `You clicked the ${buttonType} button!`
    }));
  };

  const handleModalOpen = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
    handleButtonClick('modal');
  };

  const handleModalClose = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
    setButtonMessages(prevMessages => ({
      ...prevMessages,
      modal: 'You closed the modal!'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    handleButtonClick('submit');
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
        <div className="button-container">
          <Button 
            type="button" 
            visual="link" 
            onClick={() => handleButtonClick('link')}
          >
            Link Button
          </Button>
          {buttonMessages.link && <p>{buttonMessages.link}</p>}

          <Button 
            type="button" 
            visual="button" 
            onClick={() => handleButtonClick('regular')}
          >
            Regular Button
          </Button>
          {buttonMessages.regular && <p>{buttonMessages.regular}</p>}

          <Button 
            type="button" 
            visual="button" 
            onClick={handleModalOpen}
          >
            Subscribe
          </Button>
          {buttonMessages.modal && <p>{buttonMessages.modal}</p>}
        </div>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Subscribe with email for more updates</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter some text" />
          <Button type="submit" visual="link">Submit</Button>
        </form>
        {buttonMessages.submit && <p>{buttonMessages.submit}</p>}
      </Modal>
    </div>
  );
}

export default App;