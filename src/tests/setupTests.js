import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({path: '.env.test'}); //pass in the test
//environment variables so jest can actually use them

//configure Enzyme
Enzyme.configure({
    adapter: new Adapter()
});
