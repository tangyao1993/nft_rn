import { registerRootComponent } from 'expo';
import App from './app/App';
import axios from "axios";

axios.defaults.baseURL='http://106.12.117.221:8080';
registerRootComponent(App);
