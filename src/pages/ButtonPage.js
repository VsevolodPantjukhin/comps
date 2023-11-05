import Button from '../components/Button/Button';
import { GoBell, GoCloudOffline, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudOffline />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deals!
        </Button>
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

export default ButtonPage;
