import { registerRootComponent } from 'expo';
import axios from "axios";
import Main from "./app/Main";

axios.defaults.baseURL='http://106.12.117.221:38080';
registerRootComponent(Main);
