import Button from '../components/Button/Button';

const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>See Deals!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide adds!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          WTF is going on!
        </Button>
      </div>
    </div>
  );
};

export default App;
