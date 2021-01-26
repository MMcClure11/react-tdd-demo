Note: using create-react-app uses react vs 17 but the official adapter is not out yet
in the meantime you can use the unofficial version by running this command:
yarn add --save-dev @wojtekmaj/enzyme-adapter-react-17
and importing the below anytime the course imports enzyme-adapter-react-16
import Adapter from '@wojtekmaj/enzyme-adapter-react-17;

yarn add --save-dev enzyme jest-enzyme @wojtekmaj/enzyme-adapter-react-17